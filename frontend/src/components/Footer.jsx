import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home_page' },
    { name: 'Features', href: '#feature_page' },
    { name: 'About', href: '#about_page' },
    { name: 'FAQs', href: '#faqs_page' },
    { name: 'Contact', href: '#contact_page' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#facebook', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#twitter', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#instagram', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <Send className="w-5 h-5" />, href: 'https://t.me/+8TwEgfD5V-RmZDc9', label: 'Send' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24">
      <div className="px-8 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-emerald-500 mb-4">SnapNutrient</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Track your macros, fuel your goals. Your personal nutrition companion for a healthier lifestyle.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-500 border border-slate-700 hover:border-emerald-400 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy', internal: true },
                { name: 'Terms of Service', href: '/terms', internal: false },
                { name: 'About Developers', href: '/devs', internal: false },
                { name: 'Install APK', href: 'https://t.me/+8TwEgfD5V-RmZDc9', internal: false },
              ].map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:snapnutrientapp@gmail.com" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300">
                  snapnutrientapp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300">
                  +63 09123718217
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Taguig City, Metro Manila, Philippines
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 rounded-2xl p-8 mb-12 border border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400 text-sm">
                Subscribe to our newsletter for tips, updates, and exclusive content.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 flex-1 md:w-64"
              />
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/50">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SnapNutrient. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>for your health</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
