import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, ChevronRight, Sparkles, Star, Clock, Users, Heart, Phone, Calendar } from 'lucide-react';

// Import components for testimonial carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Index = () => {
  // Parallax and scroll effects
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroYOffset = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });
  
  const heroImageUrl = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80";
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sophia Johnson",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      quote: "The attention to detail and personalized care I receive at Rajana Beauty is unmatched. My self-confidence has truly transformed.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michelle Carter",
      role: "First-time Visitor",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      quote: "From the moment I walked in, I felt like royalty. The ambiance, the service, and the results exceeded all my expectations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rebecca Liu",
      role: "Monthly Member",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100",
      quote: "My wellness journey has been completely elevated since discovering Rajana Beauty. Their holistic approach is truly special.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Premium Hero Section with Parallax */}
      <motion.section
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          y: heroYOffset
        }}
        className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div> {/* Darker overlay for better text contrast */}
        </div>
        
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="overflow-hidden mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-2 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="h-[1px] w-12 bg-brand-rose-gold/70"></span>
                <p className="text-brand-rose-gold uppercase tracking-widest text-xs font-light">
                  Elevate Your Beauty Experience
                </p>
                <span className="h-[1px] w-12 bg-brand-rose-gold/70"></span>
              </motion.div>
            </motion.div>

            <motion.h1 
              className="font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg" // Added drop-shadow
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-white">Experience True</span> {/* Explicit white color */}
              <span className="block bg-gradient-to-r from-brand-rose-gold to-brand-ivory bg-clip-text text-transparent">
                Elegance & Rejuvenation
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white mb-10 font-light max-w-2xl mx-auto drop-shadow-md" // Added drop-shadow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover a sanctuary of beauty and relaxation, where luxury meets tranquility.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/booking">
              <Button 
                size="lg" 
                className="bg-brand-rose-gold text-white hover:bg-opacity-90 text-lg px-10 py-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:translate-y-[-3px]"
              >
                Book Your Escape <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
              >
                Explore Services <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
              }}
            >
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </motion.div>
            <p className="text-white/70 text-xs mt-2">Scroll to discover</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Elegant Intro Section with Reveal Animation */}
      <motion.section 
        ref={ref}
        className="py-20 md:py-28 bg-brand-ivory overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10 mb-16"
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-rose-gold to-brand-deep-plum flex items-center justify-center text-white mx-auto mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="h-7 w-7" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-semibold text-brand-deep-plum mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Welcome to Rajana Beauty
            </motion.h2>
            
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-brand-dark-gray/80 mb-8 leading-relaxed">
                At Rajana Beauty, we believe that beauty is an art and wellness is a journey. 
                Our expert stylists and therapists are dedicated to providing you with 
                personalized treatments that enhance your natural allure and promote inner peace. 
                Step into our world of luxury and let us pamper you from head to toe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-brand-deep-plum text-brand-deep-plum hover:bg-brand-deep-plum hover:text-white transition-all duration-300 px-8 py-3 text-md group"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-xl text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="h-10 w-10 mx-auto text-brand-rose-gold mb-3" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-1">12+ Years</h3>
              <p className="text-brand-dark-gray/70 text-sm">Of Excellence & Experience</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-xl text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="h-10 w-10 mx-auto text-brand-rose-gold mb-3" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-1">5000+</h3>
              <p className="text-brand-dark-gray/70 text-sm">Satisfied Clients</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-xl text-center"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="h-10 w-10 mx-auto text-brand-rose-gold mb-3" />
              <h3 className="text-2xl font-serif text-brand-deep-plum mb-1">20+</h3>
              <p className="text-brand-dark-gray/70 text-sm">Premium Services</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Premium Services Showcase */}
      <motion.section className="py-20 md:py-28 bg-brand-light-gray relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose-gold/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-deep-plum/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-deep-plum mb-4">
              Our Signature Treatments
            </h2>
            <p className="max-w-2xl mx-auto text-brand-dark-gray/80">
              Immerse yourself in our world-class beauty treatments, designed to rejuvenate your body and elevate your spirit.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {/* Service Card 1 */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1597019558926-f8ef2c8f7a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
              title="Revitalizing Facials"
              description="Customized facials to refresh and rejuvenate your skin, bringing out your natural radiance."
              link="/services#facials"
              delay={0.1}
            />
            
            {/* Service Card 2 */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1519415387726-f1351218859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
              title="Luxury Manicures"
              description="Pamper your hands with our premium manicure services, including art, gel, and paraffin treatments."
              link="/services#manicures"
              delay={0.2}
            />
            
            {/* Service Card 3 */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1605497788044-5a32c7ba3814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
              title="Expert Hair Styling"
              description="Transform your look with our professional hair artists, from classic cuts to cutting-edge trends."
              link="/services#hairstyling"
              delay={0.3}
            />
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/services">
              <Button className="bg-brand-deep-plum hover:bg-brand-deep-plum/90 text-white">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-brand-ivory overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-deep-plum mb-4">
              Client Experiences
            </h2>
            <p className="max-w-2xl mx-auto text-brand-dark-gray/80">
              Discover what our clients have to say about their transformative journey with us.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="py-12 px-4">
                  <div className="bg-white rounded-xl shadow-xl p-8 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-rose-gold"
                      />
                    </div>
                    <div className="flex justify-center mt-8 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-brand-dark-gray mb-6 text-center italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <h4 className="font-serif text-lg font-medium text-brand-deep-plum">{testimonial.name}</h4>
                      <p className="text-brand-dark-gray/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-deep-plum mb-4">
              Our Gallery
            </h2>
            <p className="max-w-2xl mx-auto text-brand-dark-gray/80">
              Glimpse into the world of beauty transformation and peaceful rejuvenation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <GalleryImage
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
              className="col-span-2 row-span-2"
              delay={0}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1604654894610-df69be701bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
              delay={0.1}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1599386308546-8d3ff80f77e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
              delay={0.2}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1600979958009-9dc4535752eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
              delay={0.3}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1596704017254-9744oggc1r4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
              delay={0.4}
            />
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/gallery">
              <Button variant="outline" className="border-brand-deep-plum text-brand-deep-plum hover:bg-brand-deep-plum hover:text-white">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Book an Appointment CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 bg-brand-deep-plum relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose-gold rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
                Ready to Transform Your Day?
              </h2>
              <p className="text-lg text-brand-ivory/80 mb-8">
                Book your appointment today and embark on a journey of relaxation, rejuvenation, and radiance. Our expert team is ready to welcome you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-rose-gold rounded-full p-2 mt-1">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">Flexible Scheduling</h4>
                    <p className="text-brand-ivory/70">Book appointments that fit your busy lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-rose-gold rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">Expert Stylists</h4>
                    <p className="text-brand-ivory/70">Our team of certified professionals awaits</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-rose-gold rounded-full p-2 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">Easy Consultation</h4>
                    <p className="text-brand-ivory/70">Get personalized advice for your unique needs</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-white mb-6 text-center">Book Your Appointment</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-ivory/70">Select Service</p>
                    <p className="text-brand-ivory text-lg font-serif">Luxury Facial</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-ivory/70">Choose Date</p>
                    <p className="text-brand-ivory text-lg font-serif">Oct 15, 2023</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-ivory/70">Available Time Slots</p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-white/10 rounded p-2 text-center text-brand-ivory hover:bg-brand-rose-gold transition-colors cursor-pointer">
                      10:00 AM
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center text-brand-ivory hover:bg-brand-rose-gold transition-colors cursor-pointer">
                      01:30 PM
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center text-brand-ivory hover:bg-brand-rose-gold transition-colors cursor-pointer">
                      04:00 PM
                    </div>
                  </div>
                </div>
                
                <Link to="/booking" className="block">
                  <Button className="w-full bg-brand-rose-gold hover:bg-brand-rose-gold/90 text-white py-6">
                    Complete Booking <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Replace the intersection observer usage */}
      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-swiper {
          padding: 60px 0 40px;
          width: 100%;
        }
        
        .swiper-slide {
          width: 80%;
          max-width: 600px;
          opacity: 0.4;
          transform: scale(0.85);
          transition: 0.5s;
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        
        .swiper-pagination-bullet {
          background-color: #D4AF7A;
        }
      `}} />
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ image, title, description, link, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-xl overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="overflow-hidden h-56">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-brand-deep-plum mb-2">{title}</h3>
        <p className="text-sm text-brand-dark-gray/70 mb-4">{description}</p>
        <Link to={link}>
          <Button variant="link" className="text-brand-rose-gold hover:text-brand-deep-plum p-0 group flex items-center">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

// Gallery Image Component
const GalleryImage = ({ src, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img 
        src={src} 
        alt="Gallery" 
        className="w-full h-full object-cover aspect-square"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Index;
