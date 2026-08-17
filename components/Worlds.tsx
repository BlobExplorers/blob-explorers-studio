import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { worlds } from "@/config/worlds";
import { collection } from "@/config/collection";
import { getRevealedWorldCount } from "@/lib/reveal";

export default function Worlds() {
  const revealedWorldCount = getRevealedWorldCount();

  const revealedWorlds = worlds
    .filter((world) => world.status === "revealed")
    .slice(0, revealedWorldCount);

  const lockedWorldCount = Math.max(
    collection.totalWorlds - revealedWorlds.length,
    0
  );

  return (
    <section
      id="worlds"
      className="
        relative
        scroll-mt-28
        overflow-hidden
        bg-[#07110d]
        px-5
        py-20
        sm:px-8
        md:px-12
        md:py-24
        lg:px-20
      "
    >
      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}

        <SectionHeading
          eyebrow="Enter the BlobVerse"
          title="Explore the Worlds"
          description={`Explore ${revealedWorlds.length} discovered worlds, while ${
            collection.totalWorlds - revealedWorlds.length
          } hidden worlds remain locked and waiting to be discovered.`}
        />

        {/* WORLD GRID */}

        <div
          className="
            mt-10
            grid
            gap-6
            sm:mt-12
            md:grid-cols-2
            lg:mt-14
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {/* REVEALED WORLDS */}

          {revealedWorlds.map((world, index) => (
            <article
              key={world.slug}
              className="
                world-card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.09]
                bg-[#0a1510]
                transition-colors
                duration-300
                hover:border-emerald-400/35
              "
            >
              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={world.image}
                  alt={world.name}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    object-[center_20%]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                {/* IMAGE GRADIENT */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* UNLOCKED BADGE */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    rounded-full
                    border
                    border-emerald-400/30
                    bg-[#07110d]
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                    text-emerald-300
                    sm:text-sm
                  "
                >
                  🔓 Unlocked
                </div>
              </div>

              {/* CONTENT */}

              <div
                className="
                  relative
                  flex
                  min-h-[300px]
                  flex-col
                  p-6
                  sm:min-h-[320px]
                  sm:p-8
                "
              >
                {/* WORLD NUMBER */}

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-yellow-400
                    sm:text-sm
                  "
                >
                  WORLD {world.number} • {world.range}
                </p>

                {/* WORLD NAME */}

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {world.name}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-300
                    sm:text-base
                  "
                >
                  {world.description}
                </p>

                {/* NFT COUNT */}

                <div
                  className="
                    mt-5
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-gray-200
                    sm:text-sm
                  "
                >
                  {collection.nftsPerWorld} Handcrafted NFTs
                </div>

                {/* DISCOVER */}

                <Link
                  href={`/worlds/${world.slug}`}
                  prefetch
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-8
                    font-bold
                    text-emerald-400
                    transition-colors
                    duration-300
                    hover:text-emerald-300
                    sm:pt-10
                  "
                >
                  Discover World

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}

          {/* LOCKED WORLDS */}

          {Array.from({ length: lockedWorldCount }).map((_, index) => {
            const worldNumber = revealedWorlds.length + index + 1;

            return (
              <article
                key={`locked-world-${worldNumber}`}
                className="
                  locked-world-card
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#080d0b]
                "
              >
                {/* LOCKED VISUAL */}

                <div
                  className="
                    relative
                    flex
                    h-56
                    items-center
                    justify-center
                    overflow-hidden
                    sm:h-64
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#080d0b]
                    "
                  />

                  {/* LOCK ICON */}

                  <div className="relative z-10 text-center">
                    <div
                      className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.10]
                        bg-[#07110d]
                        text-3xl
                      "
                    >
                      🔒
                    </div>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.3em]
                        text-emerald-400/65
                      "
                    >
                      WORLD {String(worldNumber).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                {/* LOCKED CONTENT */}

                <div
                  className="
                    flex
                    min-h-[300px]
                    flex-col
                    p-6
                    sm:min-h-[320px]
                    sm:p-8
                  "
                >
                  {/* LOCKED BADGE */}

                  <div
                    className="
                      inline-flex
                      w-fit
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-gray-500
                    "
                  >
                    🔒 Locked
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-black
                      text-white/75
                      sm:text-3xl
                    "
                  >
                    Hidden World
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-gray-500
                      sm:text-base
                    "
                  >
                    This world remains hidden within the BlobVerse. Its
                    identity, story and discoveries will be revealed to future
                    explorers.
                  </p>

                  {/* NFT COUNT */}

                  <div
                    className="
                      mt-5
                      inline-flex
                      w-fit
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-gray-600
                      sm:text-sm
                    "
                  >
                    {collection.nftsPerWorld} Handcrafted NFTs
                  </div>

                  {/* LOCKED FOOTER */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-2
                      pt-8
                      text-sm
                      font-black
                      uppercase
                      tracking-wider
                      text-gray-600
                      sm:pt-10
                    "
                  >
                    🔒 Discovery Locked
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM SUMMARY */}

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="
              mx-auto
              mb-5
              h-px
              w-20
              bg-emerald-400/30
            "
          />

          <p
            className="
              text-base
              font-semibold
              leading-7
              text-gray-300
              sm:text-lg
            "
          >
            {revealedWorlds.length} worlds have been discovered.
          </p>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            {collection.totalWorlds - revealedWorlds.length} remain hidden,
            waiting for future explorers.
          </p>
        </div>
      </div>
    </section>
  );
}