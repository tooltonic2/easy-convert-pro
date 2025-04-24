
import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adSlot?: string;
  adFormat?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const AdBanner = ({ 
  adSlot = 'xxxxxxxxxx', 
  adFormat = 'auto', 
  className = '' 
}: AdBannerProps) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Skip ad loading during development
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    try {
      // Initialize and push ad configuration
      if (typeof window !== 'undefined') {
        // Initialize the adsbygoogle array if it doesn't exist
        window.adsbygoogle = window.adsbygoogle || [];
        // Push the configuration
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Development placeholder
  if (process.env.NODE_ENV === 'development') {
    return (
      <div 
        className={`bg-muted/30 border border-dashed border-muted-foreground flex items-center justify-center p-4 ${className}`}
        style={{ minHeight: '90px' }}
      >
        <span className="text-sm text-muted-foreground">Ad Space</span>
      </div>
    );
  }

  return (
    <div ref={adContainerRef} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
