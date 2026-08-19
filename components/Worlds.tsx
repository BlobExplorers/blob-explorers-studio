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
                border
                border-white/[0.07]
                bg-[#0a1510]
              "
            >
              {/* =================================================
                  CLEAN PREMIUM OUTER BORDER
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-50
                  rounded-3xl
                  border
                  border-white/[0.08]
                  transition-colors
                  duration-700
                  group-hover:border-[#d9b35f]/30
                "
              />

              {/* =================================================
                  SUBTLE TOP ACCENT
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[18%]
                  right-[18%]
                  top-0
                  z-[51]
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/35
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[8%]
                  group-hover:right-[8%]
                  group-hover:via-[#d9b35f]/75
                "
              />

              {/* =================================================
                  IMAGE FRAME
              ================================================= */}

              <div
                className="
                  world-card-image-frame
                  relative
                  m-[1px]
                  overflow-hidden
                  rounded-[23px]
                  border
                  border-white/[0.06]
                  bg-[#07110d]
                "
              >
                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <div
                  className="
                    world-card-image-wrap
                    group/image
                    relative
                    h-56
                    overflow-hidden
                    sm:h-64
                  "
                >
                  {/* =================================================
                      WORLD IMAGE
                      SIZE / CROP / POSITION PRESERVED
                  ================================================= */}

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
  transition-transform
  duration-[1400ms]
  ease-out
  group-hover:scale-[1.06]
"
                  />

                  {/* =================================================
                      CLEAN CINEMATIC OVERLAY
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      bg-gradient-to-t
                      from-[#07110d]/70
                      via-[#07110d]/[0.03]
                      to-transparent
                    "
                  />

                  {/* =================================================
                      SINGLE PREMIUM IMAGE BORDER
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[6px]
                      z-40
                      rounded-[17px]
                      border
                      border-white/[0.08]
                      transition-colors
                      duration-700
                      group-hover:border-[#d9b35f]/45
                    "
                  />

                  {/* =================================================
                      VERY SUBTLE GOLD INNER ACCENT
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[10px]
                      z-40
                      rounded-[14px]
                      border
                      border-[#d9b35f]/[0.10]
                      transition-colors
                      duration-700
                      group-hover:border-[#42b883]/30
                    "
                  />

                  {/* =================================================
                      PREMIUM MOVING SWEEP
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-1/2
                      z-30
                      w-1/3
                      -skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.10]
                      to-transparent
                      opacity-0
                      transition-all
                      duration-[1200ms]
                      ease-out
                      group-hover:left-[130%]
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  world-card-content
                  relative
                  z-30
                  flex
                  min-h-[310px]
                  flex-col
                  p-6
                  sm:min-h-[330px]
                  sm:p-8
                "
              >
                {/* CONTENT TOP LINE */}

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

                {/* TITLE */}

                <h3
                  className="
                    text-2xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-white
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-[#f7f0d5]
                  "
                >
                  {world.name}
                </h3>

                {/* TITLE ACCENT */}

                <div
                  aria-hidden="true"
                  className="world-card-title-accent mt-4"
                />

                {/* DESCRIPTION */}

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

                {/* NFT COUNT */}

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
                    group-hover:border-[#d9b35f]/30
                    group-hover:bg-[#d9b35f]/[0.035]
                    group-hover:text-[#e7dcae]
                    sm:text-sm
                  "
                >
                  {collection.nftsPerWorld} Handcrafted NFTs
                </div>

                {/* DISCOVER LINK */}

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
                    transition-all
                    duration-500
                    hover:text-[#f0d889]
                    sm:pt-10
                  "
                >
                  <span className="relative">
                    Discover World

                    <span
                      aria-hidden="true"
                      className="discover-underline"
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="discover-arrow text-base"
                  >
                    →
                  </span>
                </Link>

                {/* CONTENT CORNER */}

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
                    duration-700
                    group-hover:h-7
                    group-hover:w-7
                    group-hover:border-[#d9b35f]/45
                  "
                />
              </div>

              {/* =================================================
                  FINAL BOTTOM LINE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[12%]
                  right-[12%]
                  z-[51]
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/30
                  to-transparent
                  opacity-60
                  transition-all
                  duration-700
                  group-hover:left-[6%]
                  group-hover:right-[6%]
                  group-hover:opacity-100
                "
              />
            </article>
          ))}

          {/* =====================================================
              LOCKED WORLDS
              CLEAN / NO BLUR / NO SHADOW
          ===================================================== */}

          {Array.from({ length: lockedWorldCount }).map((_, index) => (
            <article
              key={`locked-world-${index}`}
              className="
                locked-world-card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.055]
                bg-[#080e0b]
                transition-transform
                duration-700
                ease-out
                hover:-translate-y-[3px]
              "
            >
              {/* OUTER BORDER */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-50
                  rounded-3xl
                  border
                  border-white/[0.045]
                  transition-colors
                  duration-700
                  group-hover:border-[#d9b35f]/30
                "
              />

              {/* INNER BORDER */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[6px]
                  z-50
                  rounded-[20px]
                  border
                  border-white/[0.018]
                  transition-all
                  duration-700
                  group-hover:inset-[5px]
                  group-hover:border-[#42b883]/20
                "
              />

              {/* TOP GOLD ACCENT */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[18%]
                  right-[18%]
                  top-0
                  z-[55]
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/25
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[8%]
                  group-hover:right-[8%]
                  group-hover:via-[#d9b35f]/70
                "
              />

              {/* MOVING TOP LINE */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[-35%]
                  top-0
                  z-[60]
                  h-px
                  w-[35%]
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[1600ms]
                  ease-out
                  group-hover:left-[100%]
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  LOCKED IMAGE AREA
              ================================================= */}

              <div
                className="
                  relative
                  m-[1px]
                  flex
                  h-56
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[23px]
                  border
                  border-white/[0.035]
                  bg-[#080e0b]
                  sm:h-64
                "
              >
                {/* DARK BACKGROUND */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[#080e0b]
                  "
                />

                {/* VERY SUBTLE ATMOSPHERE */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-52
                    w-52
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#1f6b45]/[0.02]
                    transition-colors
                    duration-700
                    group-hover:bg-[#1f6b45]/[0.035]
                  "
                />

                {/* INNER FRAME */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[8px]
                    z-20
                    rounded-[16px]
                    border
                    border-white/[0.035]
                    transition-all
                    duration-700
                    group-hover:inset-[6px]
                    group-hover:border-[#42b883]/20
                  "
                />

                {/* GOLD FRAME */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[12px]
                    z-20
                    rounded-[12px]
                    border
                    border-[#d9b35f]/[0.07]
                    transition-all
                    duration-700
                    group-hover:inset-[10px]
                    group-hover:border-[#d9b35f]/25
                  "
                />

                {/* LOCK ICON */}

                <div
                  className="
                    relative
                    z-30
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-[#07110d]
                    text-3xl
                    transition-all
                    duration-700
                    group-hover:scale-[1.04]
                    group-hover:border-[#d9b35f]/30
                  "
                >
                  🔒
                </div>

                {/* LOCK ICON UNDERLINE */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[calc(50%+53px)]
                    z-30
                    h-px
                    w-10
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#d9b35f]/25
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:w-16
                    group-hover:via-[#d9b35f]/50
                  "
                />

                {/* CORNERS */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-5
                    z-30
                    h-7
                    w-7
                    border-l
                    border-t
                    border-[#42b883]/15
                    transition-all
                    duration-700
                    group-hover:left-4
                    group-hover:top-4
                    group-hover:h-9
                    group-hover:w-9
                    group-hover:border-[#42b883]/40
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-5
                    z-30
                    h-7
                    w-7
                    border-r
                    border-t
                    border-[#d9b35f]/15
                    transition-all
                    duration-700
                    group-hover:right-4
                    group-hover:top-4
                    group-hover:h-9
                    group-hover:w-9
                    group-hover:border-[#d9b35f]/40
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-5
                    left-5
                    z-30
                    h-7
                    w-7
                    border-b
                    border-l
                    border-[#42b883]/10
                    transition-all
                    duration-700
                    group-hover:bottom-4
                    group-hover:left-4
                    group-hover:h-9
                    group-hover:w-9
                    group-hover:border-[#42b883]/30
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-5
                    right-5
                    z-30
                    h-8
                    w-8
                    border-b
                    border-r
                    border-white/[0.07]
                    transition-all
                    duration-700
                    group-hover:bottom-4
                    group-hover:right-4
                    group-hover:h-10
                    group-hover:w-10
                    group-hover:border-[#d9b35f]/35
                  "
                />
              </div>

              {/* =================================================
                  LOCKED CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-30
                  flex
                  min-h-[310px]
                  flex-col
                  bg-[#080e0b]
                  p-6
                  sm:min-h-[330px]
                  sm:p-8
                "
              >
                {/* CONTENT TOP LINE */}

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
                    via-[#d9b35f]/15
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[5%]
                    group-hover:right-[5%]
                    group-hover:via-[#d9b35f]/45
                  "
                />

                {/* LOCKED BADGE */}

                <div
                  className="
                    inline-flex
                    w-fit
                    items-center
                    rounded-full
                    border
                    border-white/[0.065]
                    bg-[#0a1510]
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                    transition-all
                    duration-500
                    group-hover:border-[#d9b35f]/20
                    group-hover:text-gray-400
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
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-white/80
                    sm:text-3xl
                  "
                >
                  Hidden World
                </h3>

                {/* TITLE ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    mt-4
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-[#d9b35f]/30
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:w-16
                    group-hover:from-[#d9b35f]/60
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
                  This world remains hidden within the BlobVerse. Its identity,
                  story and discoveries will be revealed to future explorers.
                </p>

                {/* NFT COUNT */}

                <div
                  className="
                    mt-5
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-white/[0.05]
                    bg-[#0a1510]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-gray-600
                    transition-all
                    duration-500
                    group-hover:border-[#d9b35f]/15
                    group-hover:text-gray-500
                    sm:text-sm
                  "
                >
                  {collection.nftsPerWorld} Handcrafted NFTs
                </div>

                {/* DISCOVERY LOCKED */}

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
                    transition-colors
                    duration-500
                    group-hover:text-gray-500
                    sm:pt-10
                  "
                >
                  <span>🔒</span>
                  <span>Discovery Locked</span>
                </div>

                {/* CONTENT CORNER */}

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
                    border-white/[0.05]
                    transition-all
                    duration-700
                    group-hover:h-7
                    group-hover:w-7
                    group-hover:border-[#d9b35f]/25
                  "
                />
              </div>

              {/* FINAL BOTTOM LINE */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[18%]
                  right-[18%]
                  z-50
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/15
                  to-transparent
                  opacity-70
                  transition-all
                  duration-700
                  group-hover:left-[7%]
                  group-hover:right-[7%]
                  group-hover:via-[#d9b35f]/55
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
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