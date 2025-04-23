
import { Card } from '@/components/ui/card';
import { ConversionRecord } from '@/types/converter';
import { formatResult } from '@/utils/conversionLogic';

interface ConversionHistoryProps {
  history: ConversionRecord[];
}

const ConversionHistory = ({ history }: ConversionHistoryProps) => {
  const formatTime = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <div className="space-y-3">
      {history.map((record) => (
        <Card key={record.id} className="history-item overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center w-full">
            <div className="text-left">
              <span className="font-medium text-lg md:text-xl">{record.fromValue}</span>
              <span className="text-muted-foreground ms-2 text-sm">{record.fromUnit.abbreviation}</span>
            </div>
            
            <div className="text-center hidden md:block">
              <span className="font-bold">→</span>
            </div>
            
            <div className="text-right md:text-left">
              <span className="font-medium text-lg md:text-xl">{formatResult(record.toValue)}</span>
              <span className="text-muted-foreground ms-2 text-sm">{record.toUnit.abbreviation}</span>
            </div>
            
            <div className="text-right text-xs text-muted-foreground">
              {formatTime(record.timestamp)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ConversionHistory;
