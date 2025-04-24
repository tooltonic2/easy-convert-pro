
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { unitCategories, getUnitsByCategory } from '@/utils/unitData';
import { UnitCategory } from '@/types/converter';
import ConversionForm from './ConversionForm';
import ConversionHistory from './ConversionHistory';
import { useUnitConversion } from '@/hooks/useUnitConversion';

const UnitConverter = () => {
  const {
    selectedCategory,
    fromValue,
    fromUnit,
    toUnit,
    result,
    conversionHistory,
    setSelectedCategory,
    setFromValue,
    setFromUnit,
    setToUnit,
    setConversionHistory
  } = useUnitConversion();

  const handleCategoryChange = (category: UnitCategory) => {
    setSelectedCategory(category);
  };

  const handleReset = () => {
    setFromValue('1');
    const availableUnits = getUnitsByCategory(selectedCategory);
    if (availableUnits.length >= 2) {
      setFromUnit(availableUnits[0]);
      setToUnit(availableUnits[1]);
    }
  };

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
      
      setConversionHistory(prev => [newConversion, ...prev].slice(0, 10));
    }
  };

  const clearHistory = () => {
    setConversionHistory([]);
  };

  return (
    <div>
      <Tabs defaultValue={selectedCategory} className="w-full" onValueChange={(value) => handleCategoryChange(value as UnitCategory)}>
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6">
          {unitCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

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
              onReset={handleReset}
              onSave={saveConversion}
            />
          </TabsContent>
        ))}
      </Tabs>

      {conversionHistory.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Conversions</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearHistory}
            >
              Clear History
            </Button>
          </div>
          <Separator className="my-4" />
          <ConversionHistory history={conversionHistory} />
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
