'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AboutPage() {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/about/hero.jpg"
          alt="About Ella Village Retreat"
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
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto">
              Preserving traditions, creating memories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-sand-50 paper-overlay">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-earth-900 mb-6">
                Rooted in Tradition
              </h2>
              <div className="w-24 h-1 bg-clay-600 mb-6"></div>
              <p className="text-lg text-earth-700 mb-6 leading-relaxed">
                Ella Village Retreat was born from a deep love for Sri Lankan rural
                heritage and a desire to share it with the world. Our property sits on
                land that has been cultivated by the same family for four generations.
              </p>
              <p className="text-lg text-earth-700 mb-6 leading-relaxed">
                We built our retreat using traditional methods – clay bricks fired in
                local kilns, timber from sustainable sources, and thatched roofs woven
                by village craftsmen. Every corner tells a story of authentic Sri Lankan
                village architecture.
              </p>
              <p className="text-lg text-earth-700 leading-relaxed">
                Our mission is simple: to offer you an immersive experience of village
                life while supporting our local community and preserving centuries-old
                traditions for future generations.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-3xl overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/images/about/traditional-house.jpg"
                alt="Traditional village house"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-clay-600 mx-auto"></div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-display text-3xl font-bold text-clay-600">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-clay-600 rounded-full flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-24 bg-clay-300 -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="font-display text-2xl font-semibold text-earth-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-24 bg-leaf-50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-earth-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-clay-600 mx-auto"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Sustainability',
                description:
                  'We practice eco-friendly farming, use solar energy, and minimize waste through composting and recycling.',
              },
              {
                icon: '🤝',
                title: 'Community',
                description:
                  'We employ local villagers, source ingredients from nearby farms, and support traditional crafts.',
              },
              {
                icon: '💚',
                title: 'Authenticity',
                description:
                  'Every experience we offer is genuine, preserving the true essence of Sri Lankan village culture.',
              },
            ].map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="scaleIn"
                delay={index * 0.2}
              >
                <div className="bg-white rounded-2xl p-8 text-center paper-overlay shadow-lg">
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-earth-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}