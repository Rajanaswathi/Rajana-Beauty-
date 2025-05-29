import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deep-plum text-brand-ivory py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-serif font-semibold text-brand-rose-gold mb-4">Rajana Beauty</h3>
          <p className="text-sm text-brand-ivory/80">
            Experience unparalleled luxury and care. Your journey to beauty and relaxation starts here.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-serif font-semibold text-brand-rose-gold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-brand-rose-gold transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-brand-rose-gold transition-colors">Services</a></li>
            <li><a href="/booking" className="hover:text-brand-rose-gold transition-colors">Book Now</a></li>
            <li><a href="/contact" className="hover:text-brand-rose-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-serif font-semibold text-brand-rose-gold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <MapPin size={16} className="mr-2 text-brand-rose-gold" /> 123 Luxury Lane, Beautytown, BT 45678
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone size={16} className="mr-2 text-brand-rose-gold" /> (123) 456-7890
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail size={16} className="mr-2 text-brand-rose-gold" /> contact@rajana.beauty
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-brand-rose-gold/30 text-center text-sm text-brand-ivory/70">
        <p>&copy; {new Date().getFullYear()} Rajana Beauty Parlour. All Rights Reserved.</p>
        <p className="mt-1">Designed with <span className="text-brand-rose-gold">&hearts;</span> by Dream Team</p>
      </div>
    </footer>
  );
};

export default Footer;
