
import { Unit, UnitCategory } from '@/types/converter';
import { getUnitsByCategory } from '@/utils/unitData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ArrowRight, RefreshCw } from 'lucide-react';

interface ConversionFormProps {
  fromValue: string;
  fromUnit: Unit | null;
  toUnit: Unit | null;
  result: string | null;
  selectedCategory: UnitCategory;
  onFromValueChange: (value: string) => void;
  onFromUnitChange: (unit: Unit) => void;
  onToUnitChange: (unit: Unit) => void;
  onSwapUnits: () => void;
  onReset: () => void;
  onSave: () => void;
}

const ConversionForm = ({
  fromValue,
  fromUnit,
  toUnit,
  result,
  selectedCategory,
  onFromValueChange,
  onFromUnitChange,
  onToUnitChange,
  onSwapUnits,
  onReset,
  onSave
}: ConversionFormProps) => {
  return (
    <Card className="converter-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">From</h3>
          
          <Input
            type="number"
            value={fromValue}
            onChange={(e) => onFromValueChange(e.target.value)}
            className="input-display text-xl md:text-2xl"
            placeholder="Enter value"
          />
          
          <Select 
            value={fromUnit?.id} 
            onValueChange={(value) => {
              const unit = getUnitsByCategory(selectedCategory).find(u => u.id === value);
              if (unit) onFromUnitChange(unit);
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
      </div>

      <div className="flex items-center justify-between mt-6">
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={onReset}
        >
          <RefreshCw size={16} />
          Reset
        </Button>
        
        <Button 
          onClick={onSave}
          disabled={result === null}
          className="gap-2 premium-gradient"
        >
          Save to History
        </Button>
      </div>
    </Card>
  );
};

export default ConversionForm;
