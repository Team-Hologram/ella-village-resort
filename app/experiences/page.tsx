'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ACTIVITIES } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/experiences/hero.jpg"
          alt="Village Experiences"
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
              Village Experiences
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto">
              Authentic activities that connect you with Sri Lankan village life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((activity, index) => (
              <AnimatedSection
                key={activity.id}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <Card hoverable>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl">{activity.icon}</span>
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-earth-900">
                          {activity.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-earth-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-earth-600 leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    <Button variant="expr" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-clay-700 text-white text-center">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Village Life?
            </h2>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto mb-8">
              Book your stay and immerse yourself in authentic Sri Lankan traditions
            </p>
            <Button size="lg" href="/contact">
              Book Now
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}