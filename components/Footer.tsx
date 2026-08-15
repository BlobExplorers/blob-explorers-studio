import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { collection } from "@/config/collection";
import { navigationLinks } from "@/config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const xLinkAvailable = siteConfig.social.x.trim() !== "";

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 md:px-12 md:py-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <Link
          href="/"
          className="flex flex-col items-center gap-4 sm:flex-row md:items-center"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            <Image
              src="/images/hero/logo.png"
              alt={`${siteConfig.name} Logo`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">
              {siteConfig.name}
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm font-semibold text-gray-300 md:justify-end">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}

          {xLinkAvailable && (
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.name} on X`}
              className="transition hover:text-emerald-400"
            >
              X
            </a>
          )}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-xs leading-6 text-gray-500 sm:text-sm md:flex-row md:justify-between md:text-left">
        <p>
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>

        <p>
          {collection.totalSupply.toLocaleString()} handcrafted Explorers
          across {collection.totalWorlds} worlds.
        </p>
      </div>
    </footer>
  );
}