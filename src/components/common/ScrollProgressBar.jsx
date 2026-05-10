import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useHooks';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress, transformOrigin: 'left' }}
    />
  );
}
