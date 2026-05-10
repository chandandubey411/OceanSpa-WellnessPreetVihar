import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X as XIcon, Sparkles } from 'lucide-react';
import { pricingData } from '../../data/pricingData';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { Link } from 'react-router-dom';

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" className="py-28 relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.06) 0%, transparent 60%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Investment in Wellness</p>
          <h2 className="section-title">
            Choose Your <em className="text-gold-gradient not-italic">Journey</em>
          </h2>
          <div className="gold-divider mx-auto mt-6 mb-6" />
          <p className="text-cream/50 font-sans text-sm max-w-xl mx-auto">
            Every package is crafted to deliver an exceptional experience. Choose the one that resonates with your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {pricingData.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.highlight
                  ? 'ring-1 ring-gold-500 shadow-gold'
                  : 'glass-card'
              }`}
            >
              {/* Highlighted background */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-xl" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-semibold rounded-bl-2xl ${
                  plan.highlight
                    ? 'bg-gold-500 text-navy-950'
                    : 'bg-navy-700 text-gold-400 border border-gold-700/30'
                }`}>
                  <Sparkles size={12} />
                  {plan.badge}
                </div>
              )}

              <div className="relative p-8">
                {/* Plan header */}
                <p className="text-gold-500 text-[10px] font-sans tracking-[0.3em] uppercase mb-2">{plan.tagline}</p>
                <h3 className="font-serif text-2xl text-cream mb-1">{plan.name}</h3>
                <p className="text-cream/40 text-xs font-sans mb-6 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-5xl text-gold-gradient">{plan.price}</span>
                </div>
                <p className="text-cream/30 text-xs font-sans mb-8">{plan.duration} · Per Person</p>

                <div className="h-px bg-gold-700/15 mb-7" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-sans">
                      {f.included ? (
                        <Check size={15} className="text-gold-500 flex-shrink-0" />
                      ) : (
                        <XIcon size={15} className="text-cream/20 flex-shrink-0" />
                      )}
                      <span className={f.included ? 'text-cream/70' : 'text-cream/25 line-through'}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/booking"
                  className={`block text-center py-3.5 rounded-full text-sm font-sans font-medium tracking-widest uppercase transition-all duration-300 ${
                    plan.highlight
                      ? 'btn-gold'
                      : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
