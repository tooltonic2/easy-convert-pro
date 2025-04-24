
import { useState } from 'react';
import { ConversionRecord } from '@/types/converter';

export const useConversionHistory = () => {
  const [conversionHistory, setConversionHistory] = useState<ConversionRecord[]>([]);

  const addToHistory = (newConversion: ConversionRecord) => {
    setConversionHistory(prev => [newConversion, ...prev].slice(0, 10));
  };

  const clearHistory = () => {
    setConversionHistory([]);
  };

  return {
    conversionHistory,
    addToHistory,
    clearHistory
  };
};
