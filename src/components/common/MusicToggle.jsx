import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  // We use a gentle ambient sound — toggling is visual only for safety
  const toggle = () => setPlaying(!playing);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      onClick={toggle}
      className="music-toggle"
      aria-label={playing ? 'Pause ambient music' : 'Play ambient music'}
      title={playing ? 'Pause ambient music' : 'Play ambient music'}
    >
      <motion.div
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
      >
        {playing ? (
          <Music size={18} className="text-gold-400" />
        ) : (
          <VolumeX size={18} className="text-cream/50" />
        )}
      </motion.div>
    </motion.button>
  );
}
