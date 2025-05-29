
import React from 'react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Spa setting' },
  { id: 2, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Facial treatment' },
  { id: 3, src: 'https://images.unsplash.com/photo-1604654894610-df69be701bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Manicure' },
  { id: 4, src: 'https://images.unsplash.com/photo-1597019558926-f8ef2c8f7a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Hair styling' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515377905703-c478cb051r4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Massage therapy' },
  { id: 6, src: 'https://images.unsplash.com/photo-1596704017254-9744oggc1r4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Bridal makeup' },
  { id: 7, src: 'https://images.unsplash.com/photo-1599386308546-8d3ff80f77e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Eyelash extensions' },
  { id: 8, src: 'https://images.unsplash.com/photo-1600979958009-9dc4535752eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600', alt: 'Relaxing ambiance' },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up py-8">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep-plum mb-4">
          Moments of Beauty
        </h1>
        <p className="text-lg text-brand-dark-gray/80 max-w-2xl mx-auto">
          Explore our gallery and get a glimpse of the artistry and tranquility that await you at Rajana Beauty.
        </p>
      </section>

      {/* Placeholder for Image/Video Carousel & Masonry Layout */}
      <section className="container mx-auto px-4">
        <p className="text-center text-brand-dark-gray/60 italic mb-8">
          (Image/Video Carousel with Lightbox and Pinterest-style Masonry Layout with infinite scroll to be implemented here using Cloudinary media)
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="break-inside-avoid_"> {/* break-inside-avoid for masonry effect */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
