"use client";

import { motion } from "framer-motion";

const fireflies = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "18%", top: "72%", delay: 1.2 },
  { left: "32%", top: "30%", delay: 2.1 },
  { left: "46%", top: "78%", delay: 0.8 },
  { left: "58%", top: "20%", delay: 1.7 },
  { left: "70%", top: "66%", delay: 2.8 },
  { left: "82%", top: "28%", delay: 0.4 },
  { left: "91%", top: "76%", delay: 2.3 },
];

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {fireflies.map((firefly, index) => (
        <motion.span
          key={index}
          className="absolute h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.9)]"
          style={{
            left: firefly.left,
            top: firefly.top,
          }}
          animate={{
            y: [0, -24, 8, 0],
            x: [0, 12, -8, 0],
            opacity: [0.25, 1, 0.45, 0.25],
            scale: [0.8, 1.35, 0.9, 0.8],
          }}
          transition={{
            duration: 5 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: firefly.delay,
          }}
        />
      ))}
    </div>
  );
}