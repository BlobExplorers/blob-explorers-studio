import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_10px_35px_rgba(234,179,8,0.25)] hover:shadow-[0_14px_45px_rgba(234,179,8,0.4)]"
      : "border border-white/20 bg-white/[0.04] text-white backdrop-blur hover:border-emerald-400/40 hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${styles}`}
    >
      {children}
    </a>
  );
}