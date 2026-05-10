import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Waves } from 'lucide-react';
import FloatingParticles from '../components/animations/FloatingParticles';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-950">
      <FloatingParticles count={15} color="gold" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 60%)' }} />

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center">
            <Waves size={40} className="text-navy-950" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="section-label mb-4">Page Not Found</p>
          <h1 className="font-serif text-8xl md:text-9xl text-gold-gradient mb-4">404</h1>
          <h2 className="font-serif text-3xl text-cream font-light mb-6">
            This page has found <em className="text-gold-gradient not-italic">its stillness</em>
          </h2>
          <p className="text-cream/50 font-sans text-sm mb-10 leading-relaxed">
            The page you are looking for seems to have drifted away like ocean waves. Let us guide you back to serenity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-gold flex items-center gap-2 justify-center">
              <ArrowLeft size={16} /> Return Home
            </Link>
            <Link to="/booking" className="btn-outline">
              Book a Treatment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
