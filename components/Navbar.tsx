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
    <header className="relative z-50 px-4 pt-4 md:px-6">
      <div
        className="
          navbar-shell
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#07110d]
          shadow-none
          [box-shadow:none!important]
          [filter:none!important]
        "
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-7">

          {/* ================================================= */}
          {/* LOGO + BRAND */}
          {/* ================================================= */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              items-center
              gap-3
              shadow-none
              [box-shadow:none!important]
              [filter:none!important]
            "
          >

            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <div
              className="
                relative
                h-14
                w-14
                shrink-0
                shadow-none
                [box-shadow:none!important]
                [filter:none!important]
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  shadow-none
                  [box-shadow:none!important]
                  [filter:none!important]
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
                  sizes="56px"
                  priority
                  className="
                    pointer-events-none
                    object-contain
                    shadow-none
                    [box-shadow:none!important]
                    [filter:none!important]
                  "
                  style={{
                    filter: "none",
                    boxShadow: "none",
                    willChange: "transform",
                  }}
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* BRAND TEXT */}
            {/* ================================================= */}

            <div className="shadow-none [box-shadow:none!important]">
              <span
                className="
                  block
                  text-lg
                  font-black
                  tracking-wide
                  text-white
                  shadow-none
                  [box-shadow:none!important]
                  sm:text-xl
                  md:text-2xl
                "
              >
                {siteConfig.name}
              </span>

              <span
                className="
                  hidden
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-emerald-400/80
                  shadow-none
                  [box-shadow:none!important]
                  sm:block
                "
              >
                Explore the BlobVerse
              </span>
            </div>
          </Link>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-8
              shadow-none
              [box-shadow:none!important]
              md:flex
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
                  text-sm
                  font-bold
                  text-gray-300
                  shadow-none
                  [box-shadow:none!important]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-emerald-400
                    to-yellow-400
                    shadow-none
                    [box-shadow:none!important]
                    transition-[width]
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

            {/* ================================================= */}
            {/* X */}
            {/* ================================================= */}

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
                  text-sm
                  font-bold
                  text-gray-300
                  shadow-none
                  [box-shadow:none!important]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                X

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-emerald-400
                    to-yellow-400
                    shadow-none
                    [box-shadow:none!important]
                    transition-[width]
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            )}
          </nav>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              shadow-none
              [box-shadow:none!important]
            "
          >

            {/* ================================================= */}
            {/* EXPLORE COLLECTION */}
            {/* ================================================= */}

            <Link
              href="/collection"
              className="
                hidden
                rounded-full
                border
                border-yellow-300/20
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
                px-5
                py-3
                text-sm
                font-black
                text-black
                shadow-none
                [box-shadow:none!important]
                transition-transform
                duration-300
                hover:-translate-y-0.5
                sm:inline-flex
              "
            >
              Explore Collection
            </Link>

            {/* ================================================= */}
            {/* MOBILE MENU BUTTON */}
            {/* ================================================= */}

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                text-xl
                text-white
                shadow-none
                [box-shadow:none!important]
                transition-transform
                duration-300
                hover:scale-105
                md:hidden
              "
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE NAVIGATION */}
        {/* ================================================= */}

        {menuOpen && (
          <div
            className="
              border-t
              border-white/10
              px-5
              pb-5
              pt-3
              shadow-none
              [box-shadow:none!important]
              md:hidden
            "
          >
            <nav className="flex flex-col gap-2 shadow-none [box-shadow:none!important]">

              {/* ================================================= */}
              {/* MOBILE LINKS */}
              {/* ================================================= */}

              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    font-bold
                    text-gray-300
                    shadow-none
                    [box-shadow:none!important]
                    transition-colors
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* ================================================= */}
              {/* MOBILE X */}
              {/* ================================================= */}

              {xLinkAvailable && (
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    font-bold
                    text-gray-300
                    shadow-none
                    [box-shadow:none!important]
                    transition-colors
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  X
                </a>
              )}

              {/* ================================================= */}
              {/* MOBILE COLLECTION BUTTON */}
              {/* ================================================= */}

              <Link
                href="/collection"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  rounded-full
                  border
                  border-yellow-300/20
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-600
                  px-5
                  py-3
                  text-center
                  font-black
                  text-black
                  shadow-none
                  [box-shadow:none!important]
                  transition-transform
                  duration-300
                  hover:-translate-y-0.5
                "
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