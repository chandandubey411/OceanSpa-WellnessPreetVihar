import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { programSteps } from '../../data/faqData';
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '../../utils/animations';

const collageImages = [
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=300&q=80',
  'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=300&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80',
];

export default function FeaturedProgram() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="program" className="py-28 relative overflow-hidden bg-navy-900">
      {/* Glowing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-left"
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Featured Program</p>
          <h2 className="section-title">
            Meditation <em className="text-gold-gradient not-italic">Spa Day</em>
          </h2>
          <div className="gold-divider mx-auto mt-6 mb-6" />
          <p className="text-cream/50 font-sans text-sm max-w-2xl mx-auto">
            Our most transformative offering — a full-day journey through six healing rituals designed to completely reset your mind, body, and spirit.
          </p>

          {/* Program meta */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-sm font-sans text-cream/60">
              <Clock size={16} className="text-gold-500" />
              Total: 3 Hours
            </div>
            <div className="w-px h-5 bg-gold-700/30" />
            <div className="flex items-center gap-2 text-sm font-sans text-cream/60">
              <Star size={16} className="text-gold-500 fill-gold-500" />
              Premium Experience
            </div>
            <div className="w-px h-5 bg-gold-700/30 hidden sm:block" />
            <div className="text-gold-400 font-serif text-xl hidden sm:block">From ₹3,999</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {programSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeLeft}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 group"
              >
                {/* Icon + Line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full glass-card border border-gold-700/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-gold-500 group-hover:shadow-gold transition-all duration-300"
                  >
                    {step.icon}
                  </motion.div>
                  {i < programSteps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: '100%' } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      className="w-px flex-1 mt-2 bg-gradient-to-b from-gold-600/50 to-transparent min-h-[40px]"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-gold-600 text-xs font-sans tracking-widest">Step {step.step}</span>
                      <h3 className="font-serif text-xl text-cream mb-2">{step.title}</h3>
                      <p className="text-cream/50 text-xs font-sans leading-relaxed">{step.description}</p>
                    </div>
                    <span className="text-gold-600/60 text-xs font-sans whitespace-nowrap flex-shrink-0 bg-gold-600/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Collage + CTA */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="sticky top-28"
          >
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {collageImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-48' : 'h-36'}`}
                >
                  <img src={src} alt={`Spa ritual ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Pricing card */}
            <div className="glass-card p-8 text-center">
              <p className="section-label mb-2">Full Program</p>
              <div className="font-serif text-5xl text-gold-gradient mb-2">₹3,999</div>
              <p className="text-cream/40 text-xs font-sans mb-6">Per person · All inclusive · 180 minutes</p>
              <Link to="/booking" className="btn-gold w-full flex items-center justify-center gap-2">
                Book Spa Day <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glowing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-right"
      />
    </section>
  );
}
