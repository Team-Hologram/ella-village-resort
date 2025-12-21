"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { EXPLORATION_POINTS } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

// Dynamically import map to avoid SSR issues
const InteractiveMap = dynamic(
  () => import("@/components/explore/InteractiveMap"),
  { ssr: false }
);

export default function ExplorePage() {
  const typeIcons: { [key: string]: string } = {
    waterfall: "💧",
    temple: "🛕",
    paddy: "🌾",
    lake: "🏞️",
    river: "🏊",
    home: "",
  };

  const typeColors: { [key: string]: string } = {
    waterfall: "bg-water-500",
    temple: "bg-clay-600",
    paddy: "bg-leaf-600",
    lake: "bg-water-600",
    river: "bg-water-400",
    home: "",
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/explore/hero.jpg"
          alt="Explore the Area"
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
              Explore Ella-Wellawaya
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl mx-auto">
              Discover natural wonders and cultural treasures around our village
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-sand-50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-4xl font-bold text-earth-900 text-center mb-4">
              Interactive Area Map
            </h2>
            <div className="w-24 h-1 bg-clay-600 mx-auto mb-6"></div>
            <p className="text-center text-earth-600 max-w-2xl mx-auto">
              Click on the markers to learn more about each location
            </p>
          </AnimatedSection>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[600px] relative z-0 isolate">
            <InteractiveMap points={EXPLORATION_POINTS} />
          </div>
        </div>
      </section>

      {/* Points List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPLORATION_POINTS.map((point, index) => (
              <AnimatedSection
                key={point.id}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-sand-50 rounded-2xl p-6 paper-overlay"
                  whileHover={{ y: -5, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 ${
                        typeColors[point.type]
                      } rounded-full flex items-center justify-center text-3xl flex-shrink-0`}
                    >
                      {typeIcons[point.type]}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-earth-900">
                        {point.name}
                      </h3>
                      <span className="text-sm text-earth-600 capitalize">
                        {point.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-earth-700 leading-relaxed">
                    <Image
                      src={point.description}
                      height={100}
                      width={400}
                      alt={`Gallery image`}
                      className="object-container"
                    />
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
