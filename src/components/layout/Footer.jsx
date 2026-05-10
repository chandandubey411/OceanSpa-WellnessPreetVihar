import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { IconInstagram, IconFacebook, IconYoutube, IconWhatsApp } from '../common/SocialIcons';
import { navLinks, businessInfo } from '../../utils/helpers';
import { servicesData } from '../../data/servicesData';
import { staggerContainer, fadeUp } from '../../utils/animations';

export default function Footer() {
  const featuredServices = servicesData.slice(0, 5);

  return (
    <footer className="relative bg-navy-950 border-t border-gold-700/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-navy-800/20 via-transparent to-transparent pointer-events-none" />

      {/* Newsletter Banner */}
      <div className="relative border-b border-gold-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="section-label mb-2">Stay Connected</p>
              <h3 className="font-serif text-3xl text-cream font-light">
                Subscribe for Exclusive Offers
              </h3>
              <p className="text-cream/50 text-sm mt-2 font-sans">
                Wellness tips, seasonal rituals, and members-only discounts — delivered monthly.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="input-luxury min-w-[280px] border rounded-7"
                required
              />
              <button type="submit" className="btn-gold whitespace-nowrap w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <Waves className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
              <span className="font-serif text-2xl tracking-widest text-cream">
                Ocean <span className="text-gold-gradient font-semibold">Spa</span>
              </span>
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed font-sans mb-6">
              {businessInfo.tagline}. A sanctuary of luxury wellness and holistic healing in the heart of Preet Vihar, Delhi.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: IconInstagram, href: '#', label: 'Instagram' },
                { Icon: IconFacebook, href: '#', label: 'Facebook' },
                { Icon: IconYoutube, href: '#', label: 'YouTube' },
                { Icon: IconWhatsApp, href: `https://wa.me/${businessInfo.whatsapp}`, label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gold-700/30 text-cream/60 hover:text-gold-400 hover:border-gold-500 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-serif text-lg text-cream mb-5 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/50 hover:text-gold-400 text-sm font-sans transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-600/40 group-hover:w-6 group-hover:bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-serif text-lg text-cream mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-cream/50 hover:text-gold-400 text-sm font-sans transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-600/40 group-hover:w-6 group-hover:bg-gold-400 transition-all duration-300" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h4 className="font-serif text-lg text-cream mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 font-sans leading-relaxed">{businessInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-gold-500 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-cream/50 hover:text-gold-400 font-sans transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-gold-500 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-cream/50 hover:text-gold-400 font-sans transition-colors">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-cream/50 font-sans">{businessInfo.hours}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/30 font-sans">
          <p>© {new Date().getFullYear()} Ocean Spa. All Rights Reserved. Preet Vihar, Delhi.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
