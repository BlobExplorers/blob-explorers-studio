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

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <SectionHeading
          eyebrow="Enter the BlobVerse"
          title="Explore the Worlds"
          description={`Explore ${revealedWorlds.length} discovered worlds, while ${
            collection.totalWorlds - revealedWorlds.length
          } hidden worlds remain locked and waiting to be discovered.`}
        />

        {/* =====================================================
            WORLD GRID
        ===================================================== */}

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

          {/* ===================================================
              REVEALED WORLDS
          =================================================== */}

          {revealedWorlds.map((world, index) => (
            <article
              key={world.slug}
              className="
                world-card
                group
                relative
                overflow-hidden
                rounded-3xl
              "
            >

              {/* =================================================
                  IMAGE AREA
              ================================================= */}

              <div
                className="
                  world-card-image-wrap
                  relative
                  h-56
                  overflow-hidden
                  sm:h-64
                "
              >

                {/* IMAGE */}

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
                    world-card-image
                    object-cover
                    object-[center_20%]
                  "
                />

                {/* =================================================
                    CINEMATIC OVERLAY
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-gradient-to-t
                    from-[#07110d]/75
                    via-[#07110d]/05
                    to-transparent
                  "
                />

                {/* =================================================
                    PREMIUM IMAGE SWEEP
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    world-card-sweep-line
                  "
                />

                {/* =================================================
                    GOLD / IVORY / EMERALD JUNCTION
                    IMAGE BOTTOM EDGE
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    world-card-junction-line
                  "
                />

                {/* =================================================
                    IMAGE CORNER DETAIL
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-4
                    right-5
                    z-30
                    h-8
                    w-8
                    border-b
                    border-r
                    border-[#d9b35f]/35
                    transition-all
                    duration-500
                    group-hover:h-10
                    group-hover:w-10
                    group-hover:border-[#d9b35f]/75
                  "
                />

                {/* =================================================
                    ARCHITECTURAL DETAIL LINES
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    world-detail-line
                    world-detail-line-diagonal
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    world-detail-line
                    world-detail-line-vertical
                  "
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  world-card-content
                  relative
                  flex
                  min-h-[310px]
                  flex-col
                  p-6
                  sm:min-h-[330px]
                  sm:p-8
                "
              >

                {/* =================================================
                    CONTENT TOP LINE
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    sm:left-8
                    sm:right-8
                  "
                />

                {/* =================================================
                    WORLD RANGE
                ================================================= */}

                <p
                  className="
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[#d9b35f]
                    sm:text-xs
                  "
                >
                  WORLD {world.number}

                  <span className="mx-2 text-white/20">
                    •
                  </span>

                  <span className="text-white/45">
                    {world.range}
                  </span>
                </p>

                {/* =================================================
                    WORLD NAME
                ================================================= */}

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {world.name}
                </h3>

                {/* =================================================
                    TITLE ACCENT
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    mt-4
                    h-px
                    w-10
                    bg-[#d9b35f]/60
                  "
                />

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-300/90
                    sm:text-base
                  "
                >
                  {world.description}
                </p>

                {/* =================================================
                    NFT COUNT
                ================================================= */}

                <div
                  className="
                    mt-5
                    inline-flex
                    w-fit
                    items-center
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-white/[0.025]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-gray-300
                    transition-all
                    duration-500
                    group-hover:border-[#d9b35f]/25
                    group-hover:text-[#e7dcae]
                    sm:text-sm
                  "
                >
                  {collection.nftsPerWorld} Handcrafted NFTs
                </div>

                {/* =================================================
                    DISCOVER WORLD
                ================================================= */}

                <Link
                  href={`/worlds/${world.slug}`}
                  prefetch
                  className="
                    discover-world
                    mt-auto
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    pt-8
                    text-sm
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-[#d9b35f]
                    hover:text-[#f0d889]
                    sm:pt-10
                  "
                >
                  <span className="relative">
                    Discover World

                    <span
                      aria-hidden="true"
                      className="
                        discover-underline
                      "
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      discover-arrow
                      text-base
                    "
                  >
                    →
                  </span>
                </Link>

                {/* =================================================
                    BOTTOM CORNER
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-5
                    right-5
                    h-5
                    w-5
                    border-b
                    border-r
                    border-white/[0.08]
                    transition-all
                    duration-500
                    group-hover:h-7
                    group-hover:w-7
                    group-hover:border-[#d9b35f]/40
                  "
                />
              </div>
            </article>
          ))}

          {/* =====================================================
              LOCKED WORLDS
          ===================================================== */}

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
                "
              >

                {/* =================================================
                    LOCKED IMAGE AREA
                ================================================= */}

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

                  {/* BACKGROUND */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-[#0b1510]
                      to-[#060a08]
                    "
                  />

                  {/* TOP LINE */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-8
                      right-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d9b35f]/20
                      to-transparent
                    "
                  />

                  {/* LOCK */}

                  <div className="relative z-20 text-center">

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
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.3em]
                        text-[#d9b35f]/50
                      "
                    >
                      WORLD {String(worldNumber).padStart(2, "0")}
                    </p>
                  </div>

                  {/* CORNER */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-5
                      right-5
                      h-8
                      w-8
                      border-b
                      border-r
                      border-white/[0.08]
                    "
                  />
                </div>

                {/* =================================================
                    LOCKED CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    min-h-[310px]
                    flex-col
                    p-6
                    sm:min-h-[330px]
                    sm:p-8
                  "
                >

                  {/* BADGE */}

                  <div
                    className="
                      inline-flex
                      w-fit
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
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
                      text-white/70
                      sm:text-3xl
                    "
                  >
                    Hidden World
                  </h3>

                  {/* ACCENT */}

                  <div
                    aria-hidden="true"
                    className="
                      mt-4
                      h-px
                      w-8
                      bg-[#d9b35f]/20
                    "
                  />

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5
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

                  {/* FOOTER */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-2
                      pt-8
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-gray-600
                      sm:pt-10
                    "
                  >
                    🔒 Discovery Locked
                  </div>

                  {/* CORNER */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-5
                      right-5
                      h-5
                      w-5
                      border-b
                      border-r
                      border-white/[0.06]
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SUMMARY
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <div
            aria-hidden="true"
            className="
              mx-auto
              mb-5
              h-px
              w-16
              bg-gradient-to-r
              from-transparent
              via-[#d9b35f]/50
              to-transparent
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