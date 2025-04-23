
import Layout from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "How accurate are the conversions?",
      answer: "Our conversions are highly accurate and use standard conversion formulas. For most practical purposes, the precision we provide is more than adequate. We use up to 8 decimal places for internal calculations and display results with appropriate precision."
    },
    {
      question: "Can I use this tool on my mobile device?",
      answer: "Yes! EasyConvertPro is fully responsive and works well on smartphones, tablets, and desktop computers. The interface adjusts automatically to provide the best experience on any screen size."
    },
    {
      question: "Are all the conversions free to use?",
      answer: "Absolutely! All features of our unit converter are completely free to use with no hidden charges or premium features."
    },
    {
      question: "How do I clear my conversion history?",
      answer: "You can clear your conversion history by clicking the 'Clear History' button that appears above your history list. This will remove all saved conversions from your device."
    },
    {
      question: "Does this tool work offline?",
      answer: "Once you've loaded the website, most functionality should work even if you lose your internet connection. However, you'll need an internet connection initially to load the application."
    },
    {
      question: "How do I switch between different unit categories?",
      answer: "Simply click on the tabs at the top of the converter to switch between different unit categories like Length, Weight, Temperature, etc."
    },
    {
      question: "Can I swap the 'from' and 'to' units?",
      answer: "Yes, look for the swap button (circular arrow) next to the 'To' heading, which will instantly swap your source and target units."
    },
    {
      question: "What should I do if I find an incorrect conversion?",
      answer: "If you believe you've found an error in our conversions, please let us know through our contact form. We take accuracy seriously and will investigate any potential issues."
    }
  ];

  return (
    <Layout>
      <div className="container-app py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Find answers to commonly asked questions about using EasyConvertPro.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your question here? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
