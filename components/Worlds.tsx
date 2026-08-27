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

  const hiddenWorldCount = Math.max(
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
          description={`Explore ${revealedWorlds.length} discovered worlds, while ${hiddenWorldCount} hidden worlds remain waiting to be discovered.`}
        />

        {/* =====================================================
            REVEALED WORLDS
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
                  border-white/[0.08]
                  transition-colors
                  duration-700
                  group-hover:border-[#d9b35f]/30
                "
              />

              {/* TOP ACCENT */}

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

              {/* IMAGE FRAME */}

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
                  {/* WORLD IMAGE */}

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

                  {/* CINEMATIC OVERLAY */}

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

                  {/* IMAGE BORDER */}

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

                  {/* INNER ACCENT */}

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

                  {/* PREMIUM SWEEP */}

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

              {/* CONTENT */}

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
                  className="
                    mt-4
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-[#d9b35f]/60
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:w-20
                  "
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

                {/* DISCOVER */}

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

                {/* CORNER */}

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

              {/* BOTTOM LINE */}

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
        </div>

        {/* =====================================================
            AWAITING REVEAL — PREMIUM COMPACT SECTION
        ===================================================== */}

        <div 
  className=" 
    group/reveal 
    relative 
    mx-auto 
    mt-16 
    max-w-6xl 
    overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#0a1510]
            sm:mt-20
          "
        >
          {/* OUTER FRAME */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-40
              rounded-3xl
              border
              border-[#d9b35f]/[0.12]
              transition-colors
              duration-700
              group-hover/reveal:border-[#d9b35f]/25
            "
          />

          {/* TOP GOLD LINE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[18%]
              right-[18%]
              top-0
              z-50
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#d9b35f]/55
              to-transparent
              transition-all
              duration-700
              group-hover/reveal:left-[8%]
              group-hover/reveal:right-[8%]
              group-hover/reveal:via-[#d9b35f]/80
            "
          />

          {/* GREEN CENTER DETAIL */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-[51]
              h-px
              w-24
              -translate-x-1/2
              bg-[#42b883]/60
              transition-all
              duration-700
              group-hover/reveal:w-40
            "
          />

          {/* INNER FRAME */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[6px]
              z-40
              rounded-[22px]
              border
              border-white/[0.035]
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[330px]
              flex-col
              items-center
              justify-center
              px-6
              py-12
              text-center
              sm:min-h-[350px]
              sm:px-10
              sm:py-14
              md:px-16
              md:py-16
            "
          >
            {/* LOCK ICON */}

            <div
              aria-hidden="true"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#d9b35f]/25
                bg-[#07110d]
                text-xl
                transition-all
                duration-700
                group-hover/reveal:scale-105
                group-hover/reveal:border-[#d9b35f]/45
              "
            >
              🔒
            </div>

            {/* EYEBROW */}

            <p
              className="
                mt-5
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-[#d9b35f]
                sm:text-sm
                sm:tracking-[0.38em]
              "
            >
              Awaiting Reveal
            </p>

            {/* MAIN TITLE */}

            <h3
              className="
                mt-3
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              {hiddenWorldCount} Hidden Worlds
            </h3>

            {/* TITLE ACCENT */}

            <div
              aria-hidden="true"
              className="
                mt-5
                h-px
                w-14
                bg-gradient-to-r
                from-transparent
                via-[#d9b35f]/60
                to-transparent
                transition-all
                duration-700
                group-hover/reveal:w-24
              "
            />

            {/* TAGLINE */}

            <p
              className="
                mt-5
                text-lg
                font-semibold
                italic
                text-[#e7dcae]
                sm:text-xl
                md:text-2xl
              "
            >
              Their stories are waiting to be revealed.
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
              "
            >
              {hiddenWorldCount} worlds remain undiscovered within the
              BlobVerse — waiting for the full collection reveal.
            </p>

            {/* FULL REVEAL BADGE */}

            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d9b35f]/20
                bg-[#07110d]
                px-5
                py-2.5
                text-xs
                font-black
                uppercase
                tracking-[0.14em]
                text-[#d9b35f]
                transition-all
                duration-700
                group-hover/reveal:border-[#d9b35f]/40
                group-hover/reveal:text-[#f0d889]
                sm:text-sm
              "
            >
              <span aria-hidden="true">🔒</span>
              <span>Full Reveal at Launch</span>
            </div>
          </div>

          {/* BOTTOM GOLD LINE */}

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
              via-[#d9b35f]/30
              to-transparent
              transition-all
              duration-700
              group-hover/reveal:left-[8%]
              group-hover/reveal:right-[8%]
              group-hover/reveal:via-[#d9b35f]/55
            "
          />

          {/* CORNER DETAILS */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-6
              left-6
              z-50
              h-7
              w-7
              border-b
              border-l
              border-[#42b883]/15
              transition-all
              duration-700
              group-hover/reveal:h-9
              group-hover/reveal:w-9
              group-hover/reveal:border-[#42b883]/35
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-6
              right-6
              z-50
              h-7
              w-7
              border-b
              border-r
              border-[#d9b35f]/15
              transition-all
              duration-700
              group-hover/reveal:h-9
              group-hover/reveal:w-9
              group-hover/reveal:border-[#d9b35f]/40
            "
          />
        </div>
      </div>
    </section>
  );
}