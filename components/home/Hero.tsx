'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/shared/Button';
import FloatingParticles from '@/components/shared/FloatingParticles';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-paddy-fields.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={30} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Decorative Element */}
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-6xl">🌾</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Experience Authentic
            <br />
            <span className="text-clay-300">Village Life in Ella</span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-sand-100 mb-8 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Immerse yourself in traditional Sri Lankan countryside surrounded by
            paddy fields, coconut groves, and timeless traditions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button size="lg" href="/contact">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" href="/experiences">
              Explore Experiences
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </div>
    </section>
  );
}