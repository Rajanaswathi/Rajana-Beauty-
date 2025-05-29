
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, User } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up py-8">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep-plum mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-brand-dark-gray/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or want to schedule a consultation, feel free to reach out.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form Placeholder */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-deep-plum mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-brand-dark-gray mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="contact-name"
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-brand-dark-gray mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="contact-email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-brand-dark-gray mb-1">Message</label>
                <textarea 
                  id="contact-message" 
                  name="contact-message" 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-brand-deep-plum text-white hover:bg-opacity-90 text-lg py-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
              >
                Send Message
              </Button>
              <p className="text-center text-xs text-brand-dark-gray/60 italic">
                (Animated form elements and auto-email via Firebase Functions to be implemented.)
              </p>
            </form>
          </div>

          {/* Contact Info & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-serif font-semibold text-brand-deep-plum mb-4">Our Address</h3>
              <a 
                href="https://maps.google.com/?q=123+Luxury+Lane,+Beautytown,+BT+45678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start text-brand-dark-gray hover:text-brand-rose-gold transition-colors group"
              >
                <MapPin size={20} className="mr-3 mt-1 text-brand-rose-gold flex-shrink-0 group-hover:animate-pulse" />
                <span>123 Luxury Lane,<br />Beautytown, BT 45678</span>
              </a>
              
              <h3 className="text-xl font-serif font-semibold text-brand-deep-plum mt-6 mb-4">Call Us</h3>
              <a href="tel:+11234567890" className="flex items-center text-brand-dark-gray hover:text-brand-rose-gold transition-colors group">
                <Phone size={20} className="mr-3 text-brand-rose-gold flex-shrink-0 group-hover:animate-pulse" />
                <span>(123) 456-7890</span>
              </a>

              <h3 className="text-xl font-serif font-semibold text-brand-deep-plum mt-6 mb-4">Email Us</h3>
              <a href="mailto:contact@rajana.beauty" className="flex items-center text-brand-dark-gray hover:text-brand-rose-gold transition-colors group">
                <Mail size={20} className="mr-3 text-brand-rose-gold flex-shrink-0 group-hover:animate-pulse" />
                <span>contact@rajana.beauty</span>
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <h3 className="text-xl font-serif font-semibold text-brand-deep-plum p-6 pb-0">Find Us Here</h3>
              {/* Placeholder for Google Maps embed */}
              <div className="w-full h-64 bg-brand-light-gray flex items-center justify-center">
                <p className="text-brand-medium-gray italic">(Embedded Google Maps to be implemented here)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
