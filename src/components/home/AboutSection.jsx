import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '../../utils/animations';

function AnimatedCounter({ end, duration = 2.5, inView }) {
  const [hasStarted, setHasStarted] = useState(false);
  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (inView && !hasStarted) {
      springValue.set(end);
      setHasStarted(true);
    }
  }, [inView, hasStarted, end, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}

const stats = [
  { num: 5000, suffix: '+', label: 'Happy Clients' },
  { num: 15, suffix: '+', label: 'Years of Excellence' },
  { num: 20, suffix: '+', label: 'Expert Therapists' },
  { num: 8, suffix: '', label: 'Signature Treatments' },
];

const ABOUT_IMG_1 = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=85';
const ABOUT_IMG_2 = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=85';

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-navy-900">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(201,162,39,0.3), transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Collage */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative">
              <img
                src={ABOUT_IMG_1}
                alt="Ocean Spa aromatherapy experience"
                className="w-full h-[500px] object-cover rounded-3xl shadow-navy"
              />
              {/* Floating image card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-navy-900 shadow-gold"
              >
                <img src={ABOUT_IMG_2} alt="Meditation spa" className="w-full h-full object-cover" />
              </motion.div>
              {/* Gold badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-gold-500 flex items-center justify-center text-center shadow-gold-lg"
              >
                <div>
                  <div className="font-serif text-navy-950 text-2xl font-bold">15+</div>
                  <div className="text-navy-800 text-xs font-sans font-medium">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mt-16 lg:mt-0"
          >
            <p className="section-label mb-4">Our Philosophy</p>
            <h2 className="section-title mb-6">
              A Sanctuary of <br />
              <em className="text-gold-gradient not-italic">Ancient Healing</em>
            </h2>
            <div className="gold-divider mb-8" />

            <p className="text-cream/60 font-sans text-sm leading-relaxed mb-6">
              At Ocean Spa, we believe true wellness begins when the mind surrenders to stillness and the body surrenders to care. Our sanctuary in Preet Vihar, Delhi, was founded on the principle that luxury and healing are not opposites — they are one.
            </p>
            <p className="text-cream/60 font-sans text-sm leading-relaxed mb-10">
              Drawing from Thai, Japanese, and Ayurvedic traditions, each treatment is crafted as a ritual — an intentional journey designed to restore your natural vitality, release accumulated tension, and awaken deep inner calm.
            </p>

            {/* Stats Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="glass-card p-5 text-center"
                >
                  <div className="font-serif text-3xl text-gold-400 mb-1">
                    {inView && (
                      <AnimatedCounter end={s.num} duration={2.5} inView={inView} />
                    )}
                    {s.suffix}
                  </div>
                  <div className="text-cream/50 text-xs font-sans tracking-wider uppercase">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
