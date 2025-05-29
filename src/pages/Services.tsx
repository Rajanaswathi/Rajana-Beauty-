
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const sampleServices = [
  {
    id: 'facial-glow',
    title: 'Radiant Glow Facial',
    description: 'A luxurious facial treatment designed to cleanse, exfoliate, and nourish your skin, leaving you with a radiant, healthy glow. Uses premium organic products.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    price: '$120',
    category: 'Facials',
  },
  {
    id: 'mani-deluxe',
    title: 'Deluxe Manicure & Pedicure',
    description: 'Indulge in our deluxe manicure and pedicure combo. Includes nail shaping, cuticle care, exfoliation, massage, and your choice of polish.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df69be701bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    price: '$90',
    category: 'Nail Care',
  },
  {
    id: 'hair-cut-style',
    title: 'Designer Haircut & Styling',
    description: 'Transform your look with a precision haircut and professional styling by our expert stylists. Includes consultation, wash, cut, and blow-dry.',
    imageUrl: 'https://images.unsplash.com/photo-1597019558926-f8ef2c8f7a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    price: 'From $80',
    category: 'Hair Services',
  },
  {
    id: 'swedish-massage',
    title: 'Relaxing Swedish Massage',
    description: 'A classic full-body massage using long, flowing strokes to reduce tension, improve circulation, and promote overall relaxation. Choose your preferred pressure.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c478cb051r4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', // Placeholder: typo in original, using a generic massage image
    price: '$100 / 60min',
    category: 'Massage Therapy',
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup Artistry',
    description: 'Look stunning on your special day with our professional bridal makeup services. Includes consultation and trial session to create your perfect look.',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9744oggc1r4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', // Placeholder typo, using a generic makeup image
    price: 'From $250',
    category: 'Makeup',
  },
  {
    id: 'eyelash-extensions',
    title: 'Glamour Eyelash Extensions',
    description: 'Enhance your eyes with our beautiful and natural-looking eyelash extensions. Various styles available to suit your preference.',
    imageUrl: 'https://images.unsplash.com/photo-1599386308546-8d3ff80f77e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    price: 'From $150',
    category: 'Eye Treatments',
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <section className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep-plum mb-4">
          Our Exquisite Services
        </h1>
        <p className="text-lg text-brand-dark-gray/80 max-w-2xl mx-auto">
          Indulge in a wide array of treatments designed to pamper, rejuvenate, and enhance your natural beauty. Each service is performed by our highly skilled professionals using only the finest products.
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        {/* TODO: Add filter/category selection here in a future iteration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sampleServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              price={service.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
