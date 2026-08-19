"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { collection } from "@/config/collection";
import { navigationLinks } from "@/config/navigation";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const xLinkAvailable = siteConfig.social.x.trim() !== "";

  function handleNavigation(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!href.startsWith("/#")) return;

    const hash = href.substring(1);

    event.preventDefault();
    scrollToHash(hash);
  }

  function handleHome(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== "/") return;

    event.preventDefault();

    window.history.replaceState(null, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#07110d]
        px-5
        py-14
        sm:px-8
        md:px-12
        md:py-18
        lg:px-20
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[55%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#d9b35f]/60
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
          h-32
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-b
          from-emerald-500/[0.018]
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.07]
            bg-white/[0.018]
            px-5
            py-8
            sm:px-8
            sm:py-10
            md:px-10
            md:py-11
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-400/25
              to-transparent
            "
          />

          <div
            className="
              grid
              gap-10
              md:grid-cols-[1fr_auto]
              md:items-center
              md:gap-16
            "
          >
            {/* BRAND */}

            <div
              className="
                flex
                flex-col
                items-center
                text-center
                sm:flex-row
                sm:items-center
                sm:text-left
              "
            >
              <Link
                href="/"
                aria-label="Go to Blob Explorers homepage"
                onClick={handleHome}
                className="
                  group
                  relative
                  block
                  h-[72px]
                  w-[72px]
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
                    group-hover:scale-[1.05]
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
                    sizes="72px"
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

              <div className="mt-5 sm:ml-6 sm:mt-0">
                <Link
                  href="/"
                  className="group inline-block"
                  onClick={handleHome}
                >
                  <div className="flex items-center justify-center gap-3 sm:justify-start">
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

                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-yellow-400/70
                        sm:block
                      "
                    />
                  </div>
                </Link>

                <p
                  className="
                    mt-2
                    max-w-md
                    text-sm
                    leading-6
                    text-gray-400
                    sm:text-base
                  "
                >
                  {siteConfig.tagline}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mx-auto
                    mt-4
                    h-px
                    w-20
                    bg-gradient-to-r
                    from-emerald-400/70
                    via-yellow-400/70
                    to-transparent
                    sm:mx-0
                  "
                />
              </div>
            </div>

            {/* NAVIGATION */}

            <nav
              aria-label="Footer navigation"
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-7
                gap-y-3
                text-sm
                font-bold
                text-gray-500
                md:justify-end
              "
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
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

          <div
            aria-hidden="true"
            className="
              relative
              mt-10
              h-px
              bg-white/[0.06]
              sm:mt-12
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-px
                w-28
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#d9b35f]/55
                to-transparent
              "
            />
          </div>

          <div
            className="
              mt-7
              flex
              flex-col
              items-center
              gap-4
              text-center
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            <p
              className="
                text-xs
                leading-6
                text-gray-600
                sm:text-sm
              "
            >
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            <div
              className="
                flex
                items-center
                gap-3
                text-xs
                font-semibold
                text-gray-500
                sm:text-sm
              "
            >
              <span>
                <span className="font-black text-white">
                  {collection.totalSupply.toLocaleString()}
                </span>{" "}
                handcrafted Explorers
              </span>

              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-yellow-400/50
                "
              />

              <span>
                <span className="font-black text-white">
                  {collection.totalWorlds}
                </span>{" "}
                worlds
              </span>
            </div>
          </div>

          <div className="mt-9 text-center sm:mt-10">
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-5
                h-px
                w-12
                bg-gradient-to-r
                from-transparent
                via-emerald-400/40
                to-transparent
              "
            />

            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.24em]
                text-gray-500
                sm:text-xs
                sm:tracking-[0.34em]
              "
            >
              Explore.
              <span className="mx-2 text-yellow-400/50">
                Discover.
              </span>
              Together We Shape Our World.
            </p>

            <p
              className="
                mt-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/[0.18]
              "
            >
              The BlobVerse · Every Blob Has a Story
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}