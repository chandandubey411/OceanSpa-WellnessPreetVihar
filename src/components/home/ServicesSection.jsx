import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { staggerContainer, fadeUp, cardHover } from '../../utils/animations';

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.08 }}
      whileHover="hover"
      className="group relative glass-card overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden rounded-t-[20px]">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-950/70 backdrop-blur-sm border border-gold-700/30 flex items-center justify-center text-lg">
          {service.icon}
        </div>

        {/* Featured badge */}
        {service.featured && (
          <div className="absolute top-4 left-4 bg-gold-500 text-navy-950 text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full tracking-widest uppercase">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gold-500 text-[10px] font-sans tracking-[0.25em] uppercase mb-2">
          {service.subtitle}
        </p>
        <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-cream/50 text-xs font-sans leading-relaxed mb-5 line-clamp-3">
          {service.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-cream/40 text-xs font-sans">
            <Clock size={12} className="text-gold-600" />
            {service.duration}
          </div>
          <div className="text-gold-400 font-serif text-lg font-medium">{service.price}</div>
        </div>

        {/* Hover CTA */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden"
        >
          <Link
            to="/booking"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-gold-600/40 text-gold-400 text-xs font-sans tracking-widest uppercase hover:bg-gold-600/10 transition-colors"
          >
            Book Now <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-navy-950">
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(201,162,39,0.4), transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">What We Offer</p>
          <h2 className="section-title mb-5">
            Our Signature <em className="text-gold-gradient not-italic">Treatments</em>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-cream/50 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Each ritual is thoughtfully designed to restore balance, release tension, and awaken a profound sense of wellbeing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link to="/services" className="btn-outline inline-flex items-center gap-3">
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
