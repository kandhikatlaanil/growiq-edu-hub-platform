
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-growiq-600 to-accent-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="/lovable-uploads/7b644ca8-df5c-4564-abeb-fc36bbd2b87a.png"
              alt="Student Dashboard Interface"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Future of Education Management
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Get a hands-on experience with our comprehensive school management system. 
              Start your 30-day free trial today and discover how GrowIQ can transform your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
