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
      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
      : "border border-white/20 bg-white/[0.04] text-white hover:border-emerald-400/40 hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-4
        font-bold
        ${styles}
      `}
    >
      {children}
    </a>
  );
}