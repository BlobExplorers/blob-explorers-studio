import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { worlds } from "@/config/worlds";
import { collection } from "@/config/collection";
import { getRevealedWorldCount } from "@/lib/reveal";

export default function Worlds() {
  const revealedWorldCount = getRevealedWorldCount();
  const visibleWorlds = worlds.slice(0, revealedWorldCount);

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
          description={`Explore ${visibleWorlds.length} currently revealed worlds, each filled with unique professions and handcrafted adventures.`}
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
                  className="object-cover transition duration-500 group-hover:scale-110"
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
        </div>

        {visibleWorlds.length < collection.totalWorlds && (
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-7 text-gray-500 sm:text-base">
            The remaining worlds will unlock {collection.revealDelayHours} hours
            after the official OpenSea launch.
          </p>
        )}
      </div>
    </section>
  );
}