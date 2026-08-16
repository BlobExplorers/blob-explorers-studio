"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const xLinkAvailable = siteConfig.social.x.trim() !== "";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="glass-panel mx-auto max-w-7xl rounded-2xl">
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="relative h-14 w-14 shrink-0 transition duration-300 group-hover:scale-105">
  <Image
    src="/images/hero/bloblogo.png"
    alt={`${siteConfig.name} Logo`}
    fill
    sizes="56px"
    className="object-contain"
    priority
  />
</div>

            <div>
              <span className="block text-lg font-black tracking-wide text-white sm:text-xl md:text-2xl">
                {siteConfig.name}
              </span>

              <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400/80 sm:block">
                Explore the BlobVerse
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-2 text-sm font-bold text-gray-300 transition hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {xLinkAvailable && (
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on X`}
                className="group relative py-2 text-sm font-bold text-gray-300 transition hover:text-white"
              >
                X

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </a>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/collection"
              className="hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-3 text-sm font-black text-black shadow-[0_8px_28px_rgba(234,179,8,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_38px_rgba(234,179,8,0.42)] sm:inline-flex"
            >
              Explore Collection
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl text-white md:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 px-5 pb-5 pt-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-bold text-gray-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              {xLinkAvailable && (
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-bold text-gray-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  X
                </a>
              )}

              <Link
                href="/collection"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-3 text-center font-black text-black"
              >
                Explore Collection
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}