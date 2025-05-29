
import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn button

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
      <div className="relative h-56">
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <span className="absolute top-4 right-4 bg-brand-rose-gold text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-brand-deep-plum mb-2">{title}</h3>
        <p className="text-brand-dark-gray/80 text-sm mb-4 h-20 overflow-hidden">
          {description}
        </p>
        <Button variant="outline" className="w-full bg-transparent border-brand-rose-gold text-brand-rose-gold hover:bg-brand-rose-gold hover:text-white transition-colors duration-300 group-hover:bg-brand-rose-gold group-hover:text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
