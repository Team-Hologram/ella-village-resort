'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/shared/Card';
import AnimatedSection from '@/components/shared/AnimatedSection';

const FESTIVALS = [
  {
    id: 'aluth-aurudda',
    title: 'Aluth Aurudda (Sinhala & Tamil New Year)',
    description:
      'Celebrate the New Year with traditional games, sweetmeats, rituals, and village gatherings full of joy.',
    image: '/images/festivals/aluth-aurudda.jpg',
    icon: '🪔',
    duration: 'April (Seasonal)',
  },
  {
    id: 'aurudu-uthsawa',
    title: 'Aurudu Uthsawa',
    description:
      'A festive village-style celebration with traditional competitions, cultural performances, and family fun.',
    image: '/images/festivals/aurudu-uthsawa.jpg',
    icon: '🎉',
    duration: 'April (Seasonal)',
  },
  {
    id: 'katharagama-perahera',
    title: 'Kataragama Perahera',
    description:
      'A sacred multi-religious procession honoring devotion, ritual fire walking, traditional drumming, and ancient spiritual traditions.',
    image: '/images/festivals/katharagama-perahera.jpg',
    icon: '🐘',
    duration: 'July–August (Seasonal)',
  },
  {
    id: 'vesak-kudu',
    title: 'Vesak Kudu & Lanterns',
    description:
      'Experience the island glowing with lanterns, devotional songs, and peaceful evenings of celebration.',
    image: '/images/festivals/vesak-kudu.jpg',
    icon: '🏮',
    duration: 'May (Seasonal)',
  },
  {
    id: 'thoran',
    title: 'Vesak Thorana (Illuminated Displays)',
    description:
      'Admire storytelling light displays that bring Buddhist tales to life with stunning craftsmanship.',
    image: '/images/festivals/thoran.jpg',
    icon: '✨',
    duration: 'May (Seasonal)',
  },
  {
    id: 'dance-music',
    title: 'Traditional Dance & Drumming',
    description:
      'Feel the rhythm of Sri Lanka with vibrant dance, ceremonial drumming, and cultural performances.',
    image: '/images/festivals/traditional-dance.jpeg',
    icon: '🥁',
    duration: 'Year-round',
  },
];

export default function FestivalsPreview() {
  const featuredFestivals = FESTIVALS.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl">🏮</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Traditional Festivals
          </h2>

          <div className="w-24 h-1 bg-clay-600 mx-auto mb-6"></div>

          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Discover Sri Lanka’s living culture through vibrant festivals, sacred
            processions, lantern-lit nights, and timeless music & dance.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredFestivals.map((festival, index) => (
            <AnimatedSection
              key={festival.id}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <Card hoverable>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={festival.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                    {festival.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                    {festival.title}
                  </h3>

                  <p className="text-earth-600 text-sm mb-4">
                    {festival.description}
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
                    {festival.duration}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
