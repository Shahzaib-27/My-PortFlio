import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {

  const reduced = useReducedMotion();
  
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.4 }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden h-8 w-8 rounded-full border border-primary/60 mix-blend-screen md:block"
    />
  );
}
