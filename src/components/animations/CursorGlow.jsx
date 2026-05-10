import { useCursorGlow } from '../../hooks/useHooks';

export default function CursorGlow() {
  const { x, y } = useCursorGlow();

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{ left: x, top: y }}
      aria-hidden="true"
    />
  );
}
