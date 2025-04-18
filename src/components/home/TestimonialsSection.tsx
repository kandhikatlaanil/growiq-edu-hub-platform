
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  institution: string;
  imageSrc: string;
}

const TestimonialCard = ({ quote, name, title, institution, imageSrc }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="text-accent-500 mb-4">
        <Quote size={24} />
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400" fill="#facc15" />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{title}, {institution}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "GrowIQ has transformed the way we manage our institution. The comprehensive suite of tools has streamlined our administrative processes and saved us countless hours of manual work.",
    name: "Dr. Rajesh Kumar",
    title: "Principal",
    institution: "Modern High School",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The E-Learning platform has been a game-changer, especially during the pandemic. Our teachers could seamlessly transition to online teaching with minimal training.",
    name: "Priya Sharma",
    title: "Vice Principal",
    institution: "Global International School",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The parent-teacher interaction module has significantly improved our communication with parents. They appreciate the real-time updates on their child's performance and activities.",
    name: "Alok Verma",
    title: "Administrator",
    institution: "Excellence College",
    imageSrc: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h6 className="text-growiq-600 font-semibold mb-3">TESTIMONIALS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Hear from educational institutions that have transformed their management systems with GrowIQ solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              institution={testimonial.institution}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
