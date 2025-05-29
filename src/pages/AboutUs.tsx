
import React from 'react';
import { Users, Clock, Award } from 'lucide-react'; // Example icons

const teamMembers = [
  {
    name: 'Elena Moreau',
    role: 'Lead Stylist & Founder',
    bio: 'With over 15 years of experience, Elena is passionate about creating transformative beauty experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Therapist',
    bio: 'Specializing in therapeutic massage and skincare, Marcus brings a holistic approach to wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    name: 'Sophia Dubois',
    role: 'Nail Art Specialist',
    bio: 'Sophia\'s intricate designs and attention to detail make her a sought-after nail artist.',
    imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up space-y-16 md:space-y-24 py-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep-plum mb-4">
          Our Story of Elegance
        </h1>
        <p className="text-lg text-brand-dark-gray/80 max-w-3xl mx-auto">
          Rajana Beauty was founded on the principle of providing an oasis of tranquility and luxury. We are dedicated to the art of beauty and the science of rejuvenation.
        </p>
      </section>

      {/* Brand History / Timeline Placeholder */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-deep-plum mb-8 text-center">
          Our Journey
        </h2>
        <div className="relative">
          {/* This would be where a more complex timeline component goes */}
          <div className="border-l-2 border-brand-rose-gold pl-8 py-4 relative mb-8">
            <div className="absolute -left-[11px] top-4 w-5 h-5 bg-brand-rose-gold rounded-full border-4 border-brand-ivory"></div>
            <h3 className="text-xl font-serif text-brand-deep-plum mb-1">2010 - The Beginning</h3>
            <p className="text-brand-dark-gray/70">Rajana Beauty opens its doors, envisioning a new standard for luxury parlours.</p>
          </div>
          <div className="border-l-2 border-brand-rose-gold pl-8 py-4 relative mb-8">
            <div className="absolute -left-[11px] top-4 w-5 h-5 bg-brand-rose-gold rounded-full border-4 border-brand-ivory"></div>
            <h3 className="text-xl font-serif text-brand-deep-plum mb-1">2015 - Expansion & Recognition</h3>
            <p className="text-brand-dark-gray/70">Expanded services and gained recognition for excellence in beauty care.</p>
          </div>
          <div className="border-l-2 border-brand-rose-gold pl-8 py-4 relative">
            <div className="absolute -left-[11px] top-4 w-5 h-5 bg-brand-rose-gold rounded-full border-4 border-brand-ivory"></div>
            <h3 className="text-xl font-serif text-brand-deep-plum mb-1">Today - Your Sanctuary</h3>
            <p className="text-brand-dark-gray/70">Continuously innovating to provide the ultimate sanctuary for beauty and relaxation.</p>
          </div>
          <p className="text-center mt-8 text-brand-dark-gray/60 italic">
            (More detailed animated timeline to be implemented)
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-deep-plum mb-12 text-center">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-xl overflow-hidden text-center p-6 group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-rose-gold/50 group-hover:border-brand-rose-gold transition-colors"
              />
              <h3 className="text-xl font-serif text-brand-deep-plum mb-1">{member.name}</h3>
              <p className="text-brand-rose-gold text-sm font-medium mb-2">{member.role}</p>
              <p className="text-brand-dark-gray/70 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-brand-dark-gray/60 italic">
            (Interactive hover cards with more details to be implemented)
        </p>
      </section>

      {/* Our Values Section */}
      <section className="bg-brand-light-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-deep-plum mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <Award size={48} className="mx-auto text-brand-rose-gold mb-4" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-2">Excellence</h3>
              <p className="text-brand-dark-gray/70">We strive for perfection in every service, ensuring the highest quality and care.</p>
            </div>
            <div className="p-6">
              <Users size={48} className="mx-auto text-brand-rose-gold mb-4" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-2">Client-Centric</h3>
              <p className="text-brand-dark-gray/70">Your comfort, satisfaction, and well-being are at the heart of everything we do.</p>
            </div>
            <div className="p-6">
              <Clock size={48} className="mx-auto text-brand-rose-gold mb-4" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-2">Innovation</h3>
              <p className="text-brand-dark-gray/70">We embrace the latest techniques and products to offer cutting-edge beauty solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
