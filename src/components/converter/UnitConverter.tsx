
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Unit, UnitCategory, ConversionRecord } from '@/types/converter';
import { unitCategories, getUnitsByCategory } from '@/utils/unitData';
import { convertValue, formatResult, generateId } from '@/utils/conversionLogic';
import ConversionHistory from './ConversionHistory';

const UnitConverter = () => {
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>('length');
  const [fromValue, setFromValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<Unit | null>(null);
  const [toUnit, setToUnit] = useState<Unit | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [conversionHistory, setConversionHistory] = useState<ConversionRecord[]>([]);

  // Set initial units when category changes
  useEffect(() => {
    const availableUnits = getUnitsByCategory(selectedCategory);
    
    if (availableUnits.length >= 2) {
      setFromUnit(availableUnits[0]);
      setToUnit(availableUnits[1]);
    }
  }, [selectedCategory]);

  // Calculate result when inputs change
  useEffect(() => {
    if (fromUnit && toUnit && fromValue) {
      try {
        const value = parseFloat(fromValue);
        
        if (!isNaN(value)) {
          const convertedValue = convertValue(value, fromUnit, toUnit);
          setResult(formatResult(convertedValue));
        } else {
          setResult(null);
        }
      } catch (error) {
        console.error('Conversion error:', error);
        setResult(null);
      }
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleCategoryChange = (category: UnitCategory) => {
    setSelectedCategory(category);
    setResult(null);
  };

  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromValue(e.target.value);
  };

  const handleReset = () => {
    setFromValue('1');
    setResult(null);
    
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
      const newConversion: ConversionRecord = {
        id: generateId(),
        fromValue: parseFloat(fromValue),
        fromUnit: fromUnit,
        toUnit: toUnit,
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
            <Card className="converter-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">From</h3>
                  
                  <Input
                    type="number"
                    value={fromValue}
                    onChange={handleFromValueChange}
                    className="input-display text-xl md:text-2xl"
                    placeholder="Enter value"
                  />
                  
                  <Select 
                    value={fromUnit?.id} 
                    onValueChange={(value) => {
                      const unit = getUnitsByCategory(selectedCategory).find(u => u.id === value);
                      if (unit) setFromUnit(unit);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="max-h-[300px] bg-popover">
                      {getUnitsByCategory(selectedCategory).map((unit) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.name} ({unit.abbreviation})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">To</h3>
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={handleSwapUnits}
                      className="rounded-full h-8 w-8 p-1"
                      title="Swap units"
                    >
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </Button>
                  </div>
                  
                  <div className="input-display text-xl md:text-2xl p-4 h-[42px] flex items-center justify-end">
                    {result !== null ? (
                      <span>{result}</span>
                    ) : (
                      <span className="text-muted-foreground">Result</span>
                    )}
                  </div>
                  
                  <Select 
                    value={toUnit?.id} 
                    onValueChange={(value) => {
                      const unit = getUnitsByCategory(selectedCategory).find(u => u.id === value);
                      if (unit) setToUnit(unit);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="max-h-[300px] bg-popover">
                      {getUnitsByCategory(selectedCategory).map((unit) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.name} ({unit.abbreviation})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={handleReset}
                >
                  <RefreshCw size={16} />
                  Reset
                </Button>
                
                <Button 
                  onClick={saveConversion}
                  disabled={result === null}
                  className="gap-2 premium-gradient"
                >
                  Save to History
                </Button>
              </div>
            </Card>
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
