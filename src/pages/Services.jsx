import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { staggerContainer, fadeUp } from '../utils/animations';

function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mb-4">
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-cream font-light"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        />
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <title>Services | Ocean Spa – Preet Vihar, Delhi</title>
      <PageHero
        title="Our Treatments"
        subtitle="Signature Services"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=85"
      />

      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cream/50 font-sans text-sm max-w-2xl mx-auto">
              Every treatment at Ocean Spa is a meticulously crafted ritual — blending ancient healing wisdom with modern luxury to create transformative experiences for mind, body, and spirit.
            </p>
          </div>

          {/* Services - alternating layout */}
          <div className="space-y-20">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-80 rounded-3xl overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <div className="absolute top-5 left-5 text-4xl">{service.icon}</div>
                    {service.featured && (
                      <div className="absolute top-5 right-5 bg-gold-500 text-navy-950 text-xs font-sans font-semibold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="section-label mb-3">{service.subtitle}</p>
                  <h2 className="font-serif text-4xl text-cream mb-4 font-light">{service.title}</h2>
                  <div className="gold-divider mb-6" />
                  <p className="text-cream/55 font-sans text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm font-sans text-cream/60">
                        <Check size={14} className="text-gold-500 flex-shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-cream/40 text-sm font-sans">
                      <Clock size={14} className="text-gold-600" /> {service.duration}
                    </div>
                    <div className="font-serif text-3xl text-gold-400">{service.price}</div>
                  </div>

                  <Link to="/booking" className="btn-gold inline-flex items-center gap-2">
                    Book {service.title} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
