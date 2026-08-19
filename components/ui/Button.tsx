"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
      : "border border-white/20 bg-white/[0.04] text-white hover:border-emerald-400/40 hover:bg-white/[0.08]";

  const isHashLink = href.startsWith("#");

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!isHashLink) return;

    event.preventDefault();
    scrollToHash(href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
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