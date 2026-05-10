import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import FloatingParticles from '../animations/FloatingParticles';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=90',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=90',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=90',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=90',
  'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1920&q=90',
  'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=90',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel with parallax overlay */}
      <div className="absolute inset-0 z-0 bg-navy-950">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt={`Ocean Spa luxury massage treatment ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Multi-layer dark overlay for cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/40" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,11,24,0.85) 100%)'
        }} />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={20} color="gold" />

      {/* Animated gold orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          {/* Label */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="section-label mb-6"
          >
            ✦ Preet Vihar, Delhi's Finest Wellness Sanctuary ✦
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-none tracking-tight mb-4"
          >
            Harmony For
            <br />
            <span className="text-gold-gradient italic font-normal">Mind & Body</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={{ hidden: { width: 0, opacity: 0 }, visible: { width: '80px', opacity: 1, transition: { duration: 0.8, delay: 0.2 } } }}
            className="mx-auto my-8 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          />

          {/* Subheading */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="text-cream/60 font-sans text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Discover a world of pure indulgence where ancient healing traditions meet
            modern luxury. Each treatment is a journey into deep relaxation and renewal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201,162,39,0.7)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold flex items-center gap-3"
              >
                Book Your Treatment
                <ArrowRight size={16} />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline flex items-center gap-3"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } }}
            className="mt-20 flex flex-wrap justify-center gap-8 sm:gap-16"
          >
            {[
              { num: '5000+', label: 'Happy Clients' },
              { num: '15+', label: 'Years of Excellence' },
              { num: '20+', label: 'Expert Therapists' },
              { num: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl font-light text-gold-400">{stat.num}</div>
                <div className="text-cream/40 text-xs font-sans tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/30"
      >
        <span className="text-xs font-sans tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
