
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ConversionRecord } from '@/types/converter';
import ConversionHistory from './ConversionHistory';

interface HistorySectionProps {
  history: ConversionRecord[];
  onClearHistory: () => void;
}

const HistorySection = ({ history, onClearHistory }: HistorySectionProps) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Conversions</h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onClearHistory}
        >
          Clear History
        </Button>
      </div>
      <Separator className="my-4" />
      <ConversionHistory history={history} />
    </div>
  );
};

export default HistorySection;
