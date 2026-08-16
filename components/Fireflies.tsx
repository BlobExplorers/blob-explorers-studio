"use client";

const fireflies = [
  { left: "8%", top: "18%" },
  { left: "18%", top: "72%" },
  { left: "32%", top: "30%" },
  { left: "46%", top: "78%" },
  { left: "58%", top: "20%" },
  { left: "70%", top: "66%" },
  { left: "82%", top: "28%" },
  { left: "91%", top: "76%" },
];

export default function Fireflies() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {fireflies.map((firefly, index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300 opacity-60"
          style={{
            left: firefly.left,
            top: firefly.top,
          }}
        />
      ))}
    </div>
  );
}