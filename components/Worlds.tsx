import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { worlds } from "@/config/worlds";
import { collection } from "@/config/collection";
import { getRevealedWorldCount } from "@/lib/reveal";

export default function Worlds() {
  const revealedWorldCount = getRevealedWorldCount();

  const visibleWorlds = worlds
    .filter((world) => world.status === "revealed")
    .slice(0, revealedWorldCount);

  const hiddenWorldCount =
    collection.totalWorlds - visibleWorlds.length;

  return (
    <section
      id="worlds"
      className="relative scroll-mt-28 overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Enter the BlobVerse"
          title="Explore the Worlds"
          description={`Explore ${visibleWorlds.length} discovered worlds, each filled with unique professions, handcrafted Explorers and stories waiting to be uncovered.`}
        />

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {visibleWorlds.map((world) => (
            <article
              key={world.slug}
              className={`premium-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${world.gradient} shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50`}
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={world.image}
                  alt={world.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-[center_20%] transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="flex min-h-[290px] flex-col p-6 sm:min-h-[310px] sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm sm:tracking-[0.25em]">
                  {world.range}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  {world.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-300 sm:mt-5 sm:text-base">
                  {world.description}
                </p>

                <div className="mt-5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-200 sm:text-sm">
                  {collection.nftsPerWorld} Handcrafted NFTs
                </div>

                <Link
                  href={`/worlds/${world.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-bold text-emerald-400 sm:pt-10"
                >
                  Discover World

                  <span className="transition group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}

          {Array.from({ length: hiddenWorldCount }).map((_, index) => {
            const worldNumber = visibleWorlds.length + index + 1;

            return (
              <article
                key={`hidden-${worldNumber}`}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-black shadow-2xl"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden sm:h-64">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_65%)]" />

                  <div className="relative z-10 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-3xl shadow-[0_0_50px_rgba(16,185,129,0.08)]">
                      🔒
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                      World {String(worldNumber).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[290px] flex-col p-6 sm:min-h-[310px] sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 sm:text-sm sm:tracking-[0.25em]">
                    Hidden World
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white/80 sm:text-3xl">
                    Undiscovered Realm
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base">
                    This world remains hidden within the BlobVerse, waiting
                    for future explorers to discover its story.
                  </p>

                  <div className="mt-5 inline-flex w-fit rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-gray-600 sm:text-sm">
                    100 Handcrafted NFTs
                  </div>

                  <div className="mt-auto pt-8 text-sm font-bold text-gray-600 sm:pt-10">
                    🔒 Discovery Locked
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-base font-semibold leading-7 text-gray-300 sm:text-lg">
            {visibleWorlds.length} worlds have been discovered.
          </p>

          <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
            {hiddenWorldCount} remain hidden, waiting for future explorers.
          </p>
        </div>
      </div>
    </section>
  );
}