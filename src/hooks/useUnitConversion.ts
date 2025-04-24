
import { useState, useEffect } from 'react';
import { Unit, UnitCategory, ConversionRecord } from '@/types/converter';
import { getUnitsByCategory } from '@/utils/unitData';
import { convertValue, formatResult, generateId } from '@/utils/conversionLogic';

export const useUnitConversion = () => {
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>('length');
  const [fromValue, setFromValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<Unit | null>(null);
  const [toUnit, setToUnit] = useState<Unit | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [conversionHistory, setConversionHistory] = useState<ConversionRecord[]>([]);

  useEffect(() => {
    const availableUnits = getUnitsByCategory(selectedCategory);
    if (availableUnits.length >= 2) {
      setFromUnit(availableUnits[0]);
      setToUnit(availableUnits[1]);
    }
  }, [selectedCategory]);

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

  return {
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
  };
};
