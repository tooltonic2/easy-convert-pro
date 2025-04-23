
import Layout from '@/components/layout/Layout';
import UnitConverter from '@/components/converter/UnitConverter';
import AdBanner from '@/components/ads/AdBanner';

const Index = () => {
  return (
    <Layout>
      <div className="container-app py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Easy Unit Converter
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Convert between common units instantly with our simple and accurate conversion tool.
            Length, weight, temperature, area, and volume - all in one place.
          </p>
        </div>

        {/* Top Ad Banner */}
        <AdBanner className="mb-6" />

        <UnitConverter />
        
        {/* Bottom Ad Banner */}
        <AdBanner className="mt-8" adFormat="horizontal" />
      </div>
    </Layout>
  );
};

export default Index;
