
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { unitCategories } from '@/utils/unitData';
import { UnitCategory } from '@/types/converter';

interface ConversionTabsProps {
  onCategoryChange: (category: UnitCategory) => void;
}

const ConversionTabs = ({ onCategoryChange }: ConversionTabsProps) => {
  return (
    <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6">
      {unitCategories.map((category) => (
        <TabsTrigger 
          key={category.id} 
          value={category.id}
          onClick={() => onCategoryChange(category.id as UnitCategory)}
        >
          {category.name}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default ConversionTabs;
