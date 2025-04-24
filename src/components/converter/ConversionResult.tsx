
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Unit, UnitCategory } from '@/types/converter';
import { getUnitsByCategory } from '@/utils/unitData';

interface ConversionResultProps {
  result: string | null;
  toUnit: Unit | null;
  selectedCategory: UnitCategory;
  onToUnitChange: (unit: Unit) => void;
  onSwapUnits: () => void;
}

const ConversionResult = ({
  result,
  toUnit,
  selectedCategory,
  onToUnitChange,
  onSwapUnits
}: ConversionResultProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">To</h3>
        <Button 
          variant="outline" 
          size="icon"
          onClick={onSwapUnits}
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
          if (unit) onToUnitChange(unit);
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
  );
};

export default ConversionResult;
