
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Mail, Phone, Scissors } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up py-8">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep-plum mb-4">
          Book Your Escape
        </h1>
        <p className="text-lg text-brand-dark-gray/80 max-w-2xl mx-auto">
          Schedule your appointment with us and embark on a journey of relaxation and rejuvenation. We look forward to pampering you.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-deep-plum mb-8 text-center">
            Appointment Details
          </h2>
          {/* Placeholder for booking form. Actual implementation will use react-hook-form and connect to Firebase */}
          <form className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brand-dark-gray mb-1">Select Service</label>
              <div className="relative">
                <Scissors className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                <select 
                  id="service" 
                  name="service"
                  className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                >
                  <option>Choose a service...</option>
                  <option>Radiant Glow Facial</option>
                  <option>Deluxe Manicure & Pedicure</option>
                  <option>Designer Haircut & Styling</option>
                  <option>Relaxing Swedish Massage</option>
                  {/* Add more services from Firestore */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-brand-dark-gray mb-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-brand-dark-gray mb-1">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                  <select 
                    id="time" 
                    name="time"
                    className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                  >
                    <option>Select a time slot...</option>
                    <option>09:00 AM</option>
                    <option>11:00 AM</option>
                    <option>01:00 PM</option>
                    <option>03:00 PM</option>
                    <option>05:00 PM</option>
                    {/* Real-time slots from Firebase */}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark-gray mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark-gray mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-dark-gray mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-medium-gray" />
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  placeholder="(123) 456-7890"
                  className="w-full pl-10 pr-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-brand-dark-gray mb-1">Additional Notes (Optional)</label>
              <textarea 
                id="notes" 
                name="notes" 
                rows={3}
                placeholder="Any special requests or preferences?"
                className="w-full px-4 py-3 border border-brand-medium-gray/50 rounded-lg focus:ring-brand-rose-gold focus:border-brand-rose-gold shadow-sm"
              ></textarea>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-brand-rose-gold text-white hover:bg-opacity-90 text-lg py-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              Request Appointment
            </Button>
          </form>
          <p className="text-center mt-8 text-brand-dark-gray/60 italic text-sm">
            (This is a placeholder form. Real-time availability, Firebase integration, and confirmation pop-up with animation will be implemented.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
