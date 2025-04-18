
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-growiq-600 to-accent-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Experience the Future of Education Management
        </h2>
        <p className="text-xl mb-8 text-gray-100">
          Start your 30-day free trial today and discover how GrowIQ can transform your institution
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-white text-growiq-600 hover:bg-gray-100"
            asChild
          >
            <Link to="/demo">Request Free Demo</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
