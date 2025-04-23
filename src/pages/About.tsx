
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container-app py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About EasyConvertPro</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            EasyConvertPro is designed to make unit conversion simple, fast, and accurate for everyone. 
            Whether you're a student, professional, or just need to convert units for everyday tasks, 
            our tool provides a user-friendly interface for all your conversion needs.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to create the most intuitive unit conversion tool that anyone can use without 
            technical knowledge or complex steps. We believe that unit conversion should be straightforward, 
            providing accurate results instantly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Convert between multiple unit categories including length, weight, temperature, area, and volume</li>
            <li>Instant conversion results with no page reloading</li>
            <li>Clean, user-friendly interface optimized for all devices</li>
            <li>Save recent conversions for quick reference</li>
            <li>Accurate calculations with appropriate precision</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose EasyConvertPro</h2>
          <p>
            Unlike many conversion tools that are cluttered with ads or confusing to use, EasyConvertPro 
            focuses on simplicity and user experience. We've designed our tool to be intuitive, 
            fast, and accessible on any device.
          </p>
          
          <div className="bg-accent/50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-medium mb-3">Get Started</h3>
            <p className="mb-4">
              Try our converter today and experience the easiest way to convert between units.
              No sign-up required, completely free to use.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
