'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const footerLinks = {
    explore: [
      { name: 'About Us', path: '/about' },
      { name: 'Experiences', path: '/experiences' },
      { name: 'Accommodation', path: '/accommodation' },
      { name: 'Explore Area', path: '/explore' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Cancellation Policy', path: '/cancellation' },
    ],
  };

  return (
    <footer className="bg-earth-900 text-sand-100 pt-16 pb-8 paper-overlay">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-clay-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-display text-xl font-bold">
                Ella Village Retreat
              </h3>
            </div>
            <p className="text-sand-300 text-sm leading-relaxed mb-4">
              Experience authentic Sri Lankan village life surrounded by paddy
              fields, coconut groves, and ancient traditions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sand-800 rounded-full flex items-center justify-center hover:bg-clay-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sand-800 rounded-full flex items-center justify-center hover:bg-clay-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sand-300 hover:text-clay-400 text-sm smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sand-300 hover:text-clay-400 text-sm smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-clay-400 mt-1 flex-shrink-0" />
                <span className="text-sand-300 text-sm">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-clay-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sand-300 hover:text-clay-400 text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-clay-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sand-300 hover:text-clay-400 text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-sand-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sand-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved. Crafted with 🌿 in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}