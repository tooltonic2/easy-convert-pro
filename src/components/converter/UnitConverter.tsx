
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { unitCategories } from '@/utils/unitData';
import { generateId } from '@/utils/conversionLogic';
import ConversionForm from './ConversionForm';
import ConversionTabs from './ConversionTabs';
import HistorySection from './HistorySection';
import { useUnitConversion } from '@/hooks/useUnitConversion';
import { useConversionHistory } from '@/hooks/useConversionHistory';

const UnitConverter = () => {
  const {
    selectedCategory,
    fromValue,
    fromUnit,
    toUnit,
    result,
    setSelectedCategory,
    setFromValue,
    setFromUnit,
    setToUnit,
  } = useUnitConversion();

  const { conversionHistory, addToHistory, clearHistory } = useConversionHistory();

  const handleSwapUnits = () => {
    if (fromUnit && toUnit) {
      const temp = fromUnit;
      setFromUnit(toUnit);
      setToUnit(temp);
    }
  };

  const saveConversion = () => {
    if (fromUnit && toUnit && result !== null) {
      const newConversion = {
        id: generateId(),
        fromValue: parseFloat(fromValue),
        fromUnit,
        toUnit,
        toValue: parseFloat(result.replace(/,/g, '')),
        timestamp: new Date()
      };
      
      addToHistory(newConversion);
    }
  };

  return (
    <div>
      <Tabs defaultValue={selectedCategory} className="w-full">
        <ConversionTabs onCategoryChange={setSelectedCategory} />

        {unitCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <ConversionForm
              fromValue={fromValue}
              fromUnit={fromUnit}
              toUnit={toUnit}
              result={result}
              selectedCategory={selectedCategory}
              onFromValueChange={setFromValue}
              onFromUnitChange={setFromUnit}
              onToUnitChange={setToUnit}
              onSwapUnits={handleSwapUnits}
              onReset={() => setFromValue('1')}
              onSave={saveConversion}
            />
          </TabsContent>
        ))}
      </Tabs>

      <HistorySection 
        history={conversionHistory}
        onClearHistory={clearHistory}
      />
    </div>
  );
};

export default UnitConverter;
