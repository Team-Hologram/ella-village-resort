'use client';

import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import FloatingParticles from '@/components/shared/FloatingParticles';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/cta-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 to-clay-900/80" />
      </div>

      <FloatingParticles count={25} />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-6xl">🌿</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Your Village Adventure Awaits
          </h2>

          <p className="text-xl text-sand-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Escape to the tranquility of rural Ella-Wellawaya. Experience authentic Sri
            Lankan hospitality, timeless traditions, and the simple joys of
            village life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" href="/contact">
              Book Your Stay Now
            </Button>
            <Button size="lg" variant="outline" href="/accommodation">
              View Accommodation
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center items-center space-x-12">
            {[
              { icon: '🏡', label: 'Traditional Homes' },
              { icon: '🌾', label: 'Paddy Field Views' },
              { icon: '🍛', label: 'Village Cuisine' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-sand-200 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}