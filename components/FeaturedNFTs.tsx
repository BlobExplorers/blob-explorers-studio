import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { explorers } from "@/data/explorers";

export default function FeaturedNFTs() {
  const genesisExplorers = explorers.filter(
    (explorer) => explorer.rarity === "Genesis"
  );

  return (
    <section
      id="collection"
      className="relative scroll-mt-28 overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-[110px] sm:right-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The Genesis Explorers"
            title="Featured Explorers"
            description="Meet six featured Explorers from the first six discovered worlds of the BlobVerse."
            center={false}
          />

          <Link
            href="/collection"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-yellow-400/40 hover:bg-white/10 sm:w-fit"
          >
            View Revealed Collection
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {genesisExplorers.map((explorer) => (
            <article
              key={explorer.id}
              className="premium-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={explorer.image}
                  alt={`#${explorer.id} ${explorer.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <p className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs font-bold text-yellow-400 backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:text-sm">
                  #{explorer.id}
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 sm:text-sm sm:tracking-[0.2em]">
                  {explorer.worldName}
                </p>

                <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
                  {explorer.name}
                </h3>

                <Link
                  href={`/explorer/${explorer.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-400 sm:mt-7"
                >
                  View Explorer

                  <span className="transition group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}