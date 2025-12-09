'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ACTIVITIES } from '@/lib/constants';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ExperiencePreview() {
  const featuredActivities = ACTIVITIES.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl">✨</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Village Experiences
          </h2>
          
          <div className="w-24 h-1 bg-clay-600 mx-auto mb-6"></div>
          
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Immerse yourself in authentic village activities that connect you with
            local traditions and the natural rhythms of rural Sri Lankan life
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredActivities.map((activity, index) => (
            <AnimatedSection
              key={activity.id}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <Card hoverable>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-earth-600 text-sm mb-4">
                    {activity.description}
                  </p>
                  <div className="flex items-center text-clay-600 text-sm">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {activity.duration}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button size="lg" href="/experiences">
            View All Experiences
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}