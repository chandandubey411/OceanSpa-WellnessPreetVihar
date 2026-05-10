import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.04) 0%, transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Guest Stories</p>
          <h2 className="section-title">
            What Our Guests <em className="text-gold-gradient not-italic">Say</em>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonialsData.map((t) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(201,162,39,0.15)' }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-7 h-full flex flex-col"
                >
                  {/* Quote icon */}
                  <Quote className="text-gold-700/50 mb-4" size={28} />

                  {/* Rating */}
                  <StarRating rating={t.rating} />

                  {/* Review */}
                  <p className="text-cream/60 font-sans text-sm leading-relaxed mt-4 mb-6 flex-1">
                    "{t.review}"
                  </p>

                  {/* Service tag */}
                  <div className="text-gold-600 text-[10px] font-sans tracking-widest uppercase mb-5 bg-gold-600/10 w-fit px-3 py-1 rounded-full">
                    {t.service}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-gold-700/30"
                    />
                    <div>
                      <div className="font-serif text-cream text-sm">{t.name}</div>
                      <div className="text-cream/40 text-xs font-sans">{t.title} · {t.location}</div>
                    </div>
                    <div className="ml-auto text-cream/30 text-xs font-sans">{t.date}</div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
