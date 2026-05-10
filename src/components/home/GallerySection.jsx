import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { galleryData, galleryCategories } from '../../data/galleryData';
import { staggerContainer, scaleUp } from '../../utils/animations';
import { X, ZoomIn } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function GallerySection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(g => g.category === activeCategory);

  return (
    <section id="gallery" className="py-28 relative overflow-hidden bg-navy-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Visual Journey</p>
          <h2 className="section-title">
            Enchanting <em className="text-gold-gradient not-italic">Atmosphere</em>
          </h2>
          <div className="gold-divider mx-auto mt-6 mb-8" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-navy-950 shadow-gold'
                    : 'glass-card text-cream/60 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="masonry-grid"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="masonry-item group relative cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setLightboxImg(item)}
              >
                <img
                  src={item.thumb}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: item.height === 'tall' ? '320px' : item.height === 'medium' ? '240px' : '180px' }}
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gold-500/80 backdrop-blur text-navy-950 text-[10px] font-sans px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-gold-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-navy-800 border border-gold-700/30 flex items-center justify-center text-cream hover:text-gold-400 transition-colors"
            >
              <X size={18} />
            </button>
            <p className="absolute bottom-6 text-cream/40 text-sm font-sans">{lightboxImg.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
