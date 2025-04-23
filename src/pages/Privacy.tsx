
import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="container-app py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: April 23, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            EasyConvertPro ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you use our unit conversion tool.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            <strong>Local Storage Data:</strong> We may store your recent conversions in your browser's local storage 
            to provide the history feature. This data is stored locally on your device and is not transmitted to our servers.
          </p>
          <p>
            <strong>Usage Data:</strong> We collect anonymous usage statistics to help us improve the tool, 
            such as which unit conversions are most commonly used.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our service</li>
            <li>Improve and optimize our unit converter</li>
            <li>Monitor the usage of our service</li>
            <li>Detect, prevent and address technical issues</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
          <p>
            We may use cookies to improve your experience while using our site. You can instruct your 
            browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide the 
            service on our behalf, or assist us in analyzing how our service is used.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the contact form on our website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
