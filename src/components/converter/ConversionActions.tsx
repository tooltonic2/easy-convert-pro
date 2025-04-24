
import { Button } from '@/components/ui/button';
import { Unit, UnitCategory } from '@/types/converter';
import { getUnitsByCategory } from '@/utils/unitData';

interface ConversionActionsProps {
  fromUnit: Unit | null;
  toUnit: Unit | null;
  result: string | null;
  selectedCategory: UnitCategory;
  onReset: () => void;
  onSwapUnits: () => void;
  onSave: () => void;
  setFromUnit: (unit: Unit) => void;
  setToUnit: (unit: Unit) => void;
}

const ConversionActions = ({
  fromUnit,
  toUnit,
  result,
  selectedCategory,
  onReset,
  onSwapUnits,
  onSave,
  setFromUnit,
  setToUnit
}: ConversionActionsProps) => {
  const handleReset = () => {
    const availableUnits = getUnitsByCategory(selectedCategory);
    if (availableUnits.length >= 2) {
      setFromUnit(availableUnits[0]);
      setToUnit(availableUnits[1]);
    }
    onReset();
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <Button 
        variant="outline" 
        className="gap-2"
        onClick={handleReset}
      >
        Reset
      </Button>
      
      <Button 
        onClick={onSave}
        disabled={result === null || !fromUnit || !toUnit}
        className="gap-2 premium-gradient"
      >
        Save to History
      </Button>
    </div>
  );
};

export default ConversionActions;
