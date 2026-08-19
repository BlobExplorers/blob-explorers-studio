"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { collection } from "@/config/collection";
import { navigationLinks } from "@/config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const xLinkAvailable = siteConfig.social.x.trim() !== "";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-20">
      {/* =========================================================
          PREMIUM TOP ACCENT
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[45%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-yellow-400/45
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-72
          -translate-x-1/2
          bg-emerald-500/[0.025]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          {/* =================================================
              BRAND
              ================================================= */}

          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
            {/* LOGO */}

            <Link
              href="/"
              aria-label="Go to Blob Explorers homepage"
              className="
                group
                relative
                block
                h-16
                w-16
                shrink-0
                rounded-full
              "
            >
              <div
                className="
                  footer-logo-float
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.06]
                  group-hover:rotate-[3deg]
                "
                style={{
                  filter: "none",
                  boxShadow: "none",
                  willChange: "transform",
                }}
              >
                <Image
                  src="/images/hero/bloblogo.png"
                  alt={`${siteConfig.name} Logo`}
                  fill
                  sizes="64px"
                  priority
                  className="
                    pointer-events-none
                    object-contain
                  "
                  style={{
                    filter: "none",
                    boxShadow: "none",
                    willChange: "transform",
                  }}
                />
              </div>
            </Link>

            {/* BRAND TEXT */}

            <div className="mt-5 sm:ml-5 sm:mt-0">
              <Link
                href="/"
                className="group inline-block"
              >
                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-yellow-300
                    sm:text-3xl
                  "
                >
                  {siteConfig.name}
                </h2>
              </Link>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                {siteConfig.tagline}
              </p>

              <div
                aria-hidden="true"
                className="
                  mx-auto
                  mt-4
                  h-px
                  w-16
                  bg-gradient-to-r
                  from-emerald-400/70
                  via-yellow-400/80
                  to-transparent
                  sm:mx-0
                "
              />
            </div>
          </div>

          {/* =================================================
              NAVIGATION
              ================================================= */}

          <nav
            aria-label="Footer navigation"
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-7
              gap-y-4
              text-sm
              font-bold
              text-gray-400
              md:justify-end
            "
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  group
                  relative
                  py-2
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-emerald-400
                    to-yellow-400
                    transition-[width]
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

            {xLinkAvailable && (
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on X`}
                className="
                  group
                  relative
                  py-2
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                X

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-emerald-400
                    to-yellow-400
                    transition-[width]
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            )}
          </nav>
        </div>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <div className="relative mt-12 h-px bg-white/[0.07]">
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-24
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-yellow-400/50
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
            ===================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            items-center
            gap-3
            text-center
            text-xs
            leading-6
            text-gray-500
            sm:text-sm
            md:flex-row
            md:justify-between
            md:text-left
          "
        >
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>
            {collection.totalSupply.toLocaleString()} handcrafted Explorers
            <span className="mx-2 text-yellow-400/40">•</span>
            {collection.totalWorlds} worlds
          </p>
        </div>

        {/* =====================================================
            FINAL BRAND LINE
            ===================================================== */}

        <div className="mt-7 text-center">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-gray-600
              sm:text-xs
              sm:tracking-[0.35em]
            "
          >
            Explore. Discover. Together We Shape Our World.
          </p>
        </div>
      </div>
    </footer>
  );
}