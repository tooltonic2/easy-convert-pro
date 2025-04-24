
import { Unit, UnitCategory } from '@/types/converter';
import { getUnitsByCategory } from '@/utils/unitData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import ConversionResult from './ConversionResult';
import ConversionActions from './ConversionActions';

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
        
        <ConversionResult
          result={result}
          toUnit={toUnit}
          selectedCategory={selectedCategory}
          onToUnitChange={onToUnitChange}
          onSwapUnits={onSwapUnits}
        />
      </div>

      <ConversionActions
        fromUnit={fromUnit}
        toUnit={toUnit}
        result={result}
        selectedCategory={selectedCategory}
        onReset={onReset}
        onSwapUnits={onSwapUnits}
        onSave={onSave}
        setFromUnit={onFromUnitChange}
        setToUnit={onToUnitChange}
      />
    </Card>
  );
};

export default ConversionForm;
