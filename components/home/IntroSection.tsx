'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function IntroSection() {
  return (
    <section className="py-24 bg-sand-50 paper-overlay">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-5xl">🏡</span>
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6">
              A Home Away From Home
            </h2>
            
            <div className="w-24 h-1 bg-clay-600 mb-6"></div>
            
            <p className="text-lg text-earth-700 mb-6 leading-relaxed">
              Nestled in the heart of Ella-Wellawaya's countryside, our traditional village
              retreat offers an authentic glimpse into Sri Lankan rural life.
              Built with clay bricks, thatched roofs, and surrounded by swaying
              coconut palms and golden paddy fields.
            </p>
            
            <p className="text-lg text-earth-700 mb-8 leading-relaxed">
              Here, time slows down. Wake to the gentle sounds of nature, spend
              your days exploring ancient temples and waterfall trails, and
              evenings gathered around traditional wood-fire cooking.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: '🌾', label: 'Paddy Fields', desc: 'Walk through golden rice terraces' },
                { icon: '🥥', label: 'Coconut Groves', desc: 'Fresh coconuts daily' },
                { icon: '🛕', label: 'Ancient Temples', desc: '300+ years old' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-earth-800 text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-earth-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/intro/paddy-field.jpg"
                  alt="Paddy fields"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/intro/coconut-tree.jpg"
                  alt="Coconut trees"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/intro/traditional-house.jpg"
                  alt="Traditional house"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/intro/village-path.jpg"
                  alt="Village path"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}