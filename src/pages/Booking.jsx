import BookingSection from '../components/home/BookingSection';
import PricingSection from '../components/home/PricingSection';
import { motion } from 'framer-motion';

function PageHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=85"
        alt="Book your spa treatment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mb-4">
          Reserve Your Serenity
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-cream font-light"
        >
          Book a Treatment
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

export default function Booking() {
  return (
    <>
      <title>Book Now | Ocean Spa – Preet Vihar, Delhi</title>
      <PageHero />
      <PricingSection />
      <BookingSection />
    </>
  );
}
