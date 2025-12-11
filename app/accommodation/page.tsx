'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Traditional Clay House data
const room = {
  id: 1,
  name: 'Traditional Clay House',
  description:
    'Experience authentic Sri Lankan village life in our traditionally built clay house. Constructed using age-old techniques with mud walls, thatched roof, and natural materials, this accommodation offers a genuine glimpse into rural living while maintaining comfort for our guests.',
  capacity: 2,
  amenities: [
    'King-size traditional bed',
    'Authentic clay walls',
    'Thatched palm roof',
    'Traditional bathroom',
    'Garden courtyard view',
    'Natural ventilation',
    'Handcrafted furniture',
    'Mosquito netting',
  ],
  price: "Happy Money",
  features: [
    {
      title: 'Authentic Architecture',
      description: 'Built using traditional village construction methods passed down through generations',
      icon: '🏡',
    },
    {
      title: 'Natural Cooling',
      description: 'Thick clay walls and thatched roof provide natural temperature regulation',
      icon: '🌬️',
    },
    {
      title: 'Peaceful Setting',
      description: 'Surrounded by paddy fields and coconut groves for ultimate tranquility',
      icon: '🌾',
    },
    {
      title: 'Cultural Experience',
      description: 'Immerse yourself in authentic village lifestyle and traditions',
      icon: '✨',
    },
  ],
  gallery: [
    '/images/rooms/1.jpg',
    '/images/rooms/2.jpg',
    '/images/rooms/3.jpg',
    '/images/rooms/4.jpg',
    '/images/rooms/5.jpg',
    '/images/rooms/6.jpg',
    '/images/rooms/7.jpg',
    '/images/rooms/8.jpg',
    '/images/rooms/9.jpg',
    '/images/rooms/10.jpg',
    '/images/rooms/11.jpg',
    '/images/rooms/12.jpg',
    '/images/rooms/13.jpg',
    '/images/rooms/14.jpg',
    '/images/rooms/15.jpg',
    '/images/rooms/16.jpg',
    '/images/rooms/17.jpg',
    '/images/rooms/18.jpg',
    '/images/rooms/19.jpg',
    '/images/rooms/20.jpg',
  ],
};

export default function AccommodationPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % room.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? room.gallery.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/accommodation/hero.jpg"
          alt="Traditional Clay House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-6xl">🏡</span>
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              {room.name}
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto">
              Authentic village living meets comfortable hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Room Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="font-display text-4xl font-bold text-earth-900 mb-4">
                    About This Accommodation
                  </h2>
                  <div className="w-24 h-1 bg-clay-600 mb-6"></div>
                  <p className="text-lg text-earth-700 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                    <h3 className="font-display text-2xl font-semibold text-earth-900 mb-4">
                      Amenities & Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {room.amenities.map((amenity, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-earth-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="w-2 h-2 bg-clay-600 rounded-full"></div>
                          <span>{amenity}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features Grid
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {room.features.map((feature, index) => (
                      <AnimatedSection
                        key={index}
                        animation="fadeInUp"
                        delay={index * 0.1}
                      >
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                          <div className="text-4xl mb-3">{feature.icon}</div>
                          <h4 className="font-display text-lg font-semibold text-earth-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-earth-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div> */}
                </AnimatedSection>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-clay-700 mb-2">
                        {room.price}
                      </div>
                      
                    </div>

                    <div className="border-t border-sand-200 pt-6 mb-6">
                      <h4 className="font-semibold text-earth-900 mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2 text-sm text-earth-700">
                        <li className="flex items-start gap-2">
                          <span className="text-leaf-600 mt-1">✓</span>
                          <span>Traditional Sri Lankan breakfast</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf-600 mt-1">✓</span>
                          <span>Village walking tour</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf-600 mt-1">✓</span>
                          <span>Access to all common areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf-600 mt-1">✓</span>
                          <span>Cultural activities</span>
                        </li>
                      </ul>
                    </div>

                    <Button size="lg" className="w-full mb-4" href="/contact">
                      Book Now
                    </Button>

                    <p className="text-xs text-center text-earth-500">
                      Free cancellation up to 48 hours before check-in
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Gallery Section */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-center mb-10">
                  <h2 className="font-display text-4xl font-bold text-earth-900 mb-4">
                    Photo Gallery
                  </h2>
                  <div className="w-24 h-1 bg-clay-600 mx-auto mb-4"></div>
                  <p className="text-earth-600">
                    Explore our traditional clay house through these images
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {room.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        >
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-clay-300 transition z-10"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={40} />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-6 text-white hover:text-clay-300 transition z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={room.gallery[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-6 text-white hover:text-clay-300 transition z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-6 py-3 rounded-full">
            {selectedImage + 1} / {room.gallery.length}
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            Use arrow keys to navigate • Press ESC to close
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-clay-700 text-white text-center">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* <span className="text-6xl">🌾</span> */}
              <img src='/images/logo/logo.png' height={150} width={150}/>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready for an Authentic Village Experience?
            </h2>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto mb-8">
              Book your stay in our traditional clay house and immerse yourself
              in Sri Lankan village life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href="/contact">
                Check Availability
              </Button>
              <Button size="lg" variant="outline" href="/experiences">
                View Experiences
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Keyboard Navigation for Lightbox */}
      {selectedImage !== null && (
        <div
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
          }}
          tabIndex={0}
          className="fixed inset-0 pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
}