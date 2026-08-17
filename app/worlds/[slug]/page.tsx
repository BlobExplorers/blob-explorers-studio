import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getWorldBySlug } from "@/config/worlds";

export default async function WorldPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const world = getWorldBySlug(slug);

  if (!world) {
    notFound();
  }

  const worldDetails = [
    {
      label: "NFT Range",
      value: world.range,
    },
    {
      label: "Total Explorers",
      value: "100 Handcrafted NFTs",
    },
    {
      label: "Genesis Explorer",
      value: `#${world.genesisId}`,
    },
  ];

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          overflow-hidden
          bg-[#07110d]
          px-5
          pb-20
          pt-10
          sm:px-8
          sm:pb-24
          sm:pt-14
          md:px-12
          lg:px-20
        "
      >
        <section className="mx-auto max-w-7xl">

          {/* =====================================================
              BACK TO WORLDS
          ===================================================== */}

          <Link
            href="/#worlds"
            className={`
              world-back-link
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              transition-transform
              duration-300
              hover:-translate-x-1
              sm:text-base
              ${world.accent}
            `}
          >
            <span
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            Back to Worlds
          </Link>

          {/* =====================================================
              MAIN WORLD AREA
          ===================================================== */}

          <div
            className="
              mt-8
              grid
              items-start
              gap-10
              lg:mt-10
              lg:grid-cols-2
              lg:items-center
              lg:gap-16
            "
          >

            {/* =================================================
                PREMIUM ANIMATED WORLD IMAGE
            ================================================= */}

            <div
              className="
                world-detail-image-card
                group
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
                bg-[#08130e]
              "
            >

              {/* =================================================
                  OUTER GOLD + GREEN GLOW
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -inset-[2px]
                  z-0
                  rounded-[26px]
                  opacity-60
                  blur-[1px]
                  transition-all
                  duration-700
                  group-hover:opacity-100
                  group-hover:blur-[2px]
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(217,179,95,.75), rgba(16,185,129,.75), rgba(217,179,95,.75), rgba(16,185,129,.75))",
                }}
              />

              {/* =================================================
                  MAIN GOLD FRAME
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-30
                  rounded-3xl
                  border
                  border-[#d9b35f]/35
                  transition-all
                  duration-700
                  group-hover:border-[#d9b35f]/80
                  group-hover:shadow-[0_0_35px_rgba(217,179,95,.18),inset_0_0_30px_rgba(16,185,129,.10)]
                "
              />

              {/* =================================================
                  INNER GREEN FRAME
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[4px]
                  z-30
                  rounded-[21px]
                  border
                  border-emerald-400/20
                  transition-all
                  duration-700
                  group-hover:inset-[5px]
                  group-hover:border-emerald-300/70
                "
              />

              {/* =================================================
                  INNER GOLD FRAME
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[9px]
                  z-30
                  rounded-[18px]
                  border
                  border-[#d9b35f]/15
                  transition-all
                  duration-700
                  group-hover:inset-[8px]
                  group-hover:border-[#f1d98a]/55
                "
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <Image
                src={world.image}
                alt={world.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  relative
                  z-10
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  group-hover:scale-[1.075]
                "
              />

              {/* =================================================
                  CINEMATIC IMAGE OVERLAY
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-t
                  from-[#07110d]/40
                  via-transparent
                  to-[#07110d]/10
                "
              />

              {/* =================================================
                  GOLD LIGHT SWEEP
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[70%]
                  z-40
                  w-[35%]
                  -skew-x-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-[#f1d98a]/35
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[1100ms]
                  ease-out
                  group-hover:left-[125%]
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  GREEN LIGHT SWEEP
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[75%]
                  z-40
                  w-[18%]
                  -skew-x-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-300/30
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[1250ms]
                  delay-75
                  ease-out
                  group-hover:left-[130%]
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP GOLD LINE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[16%]
                  right-[16%]
                  top-0
                  z-50
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#f1d98a]
                  to-transparent
                  opacity-70
                  transition-all
                  duration-700
                  group-hover:left-[5%]
                  group-hover:right-[5%]
                  group-hover:opacity-100
                  group-hover:shadow-[0_0_12px_rgba(241,217,138,.7)]
                "
              />

              {/* =================================================
                  TOP GREEN LINE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[28%]
                  right-[28%]
                  top-[4px]
                  z-50
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-300
                  to-transparent
                  opacity-30
                  transition-all
                  duration-700
                  group-hover:left-[12%]
                  group-hover:right-[12%]
                  group-hover:opacity-90
                "
              />

              {/* =================================================
                  BOTTOM GOLD LINE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[16%]
                  right-[16%]
                  z-50
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#f1d98a]
                  to-transparent
                  opacity-70
                  transition-all
                  duration-700
                  group-hover:left-[5%]
                  group-hover:right-[5%]
                  group-hover:opacity-100
                  group-hover:shadow-[0_0_12px_rgba(241,217,138,.7)]
                "
              />

              {/* =================================================
                  BOTTOM GREEN LINE
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-[4px]
                  left-[28%]
                  right-[28%]
                  z-50
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-300
                  to-transparent
                  opacity-30
                  transition-all
                  duration-700
                  group-hover:left-[12%]
                  group-hover:right-[12%]
                  group-hover:opacity-90
                "
              />

              {/* =================================================
                  TOP LEFT GOLD CORNER
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-5
                  z-50
                  h-12
                  w-12
                  border-l
                  border-t
                  border-[#d9b35f]/65
                  transition-all
                  duration-700
                  group-hover:left-4
                  group-hover:top-4
                  group-hover:h-16
                  group-hover:w-16
                  group-hover:border-[#f1d98a]
                  group-hover:shadow-[-4px_-4px_18px_rgba(217,179,95,.18)]
                "
              />

              {/* =================================================
                  TOP RIGHT GREEN CORNER
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  z-50
                  h-12
                  w-12
                  border-r
                  border-t
                  border-emerald-400/45
                  transition-all
                  duration-700
                  group-hover:right-4
                  group-hover:top-4
                  group-hover:h-16
                  group-hover:w-16
                  group-hover:border-emerald-300
                  group-hover:shadow-[4px_-4px_18px_rgba(52,211,153,.18)]
                "
              />

              {/* =================================================
                  BOTTOM LEFT GREEN CORNER
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  left-5
                  z-50
                  h-12
                  w-12
                  border-b
                  border-l
                  border-emerald-400/45
                  transition-all
                  duration-700
                  group-hover:bottom-4
                  group-hover:left-4
                  group-hover:h-16
                  group-hover:w-16
                  group-hover:border-emerald-300
                  group-hover:shadow-[-4px_4px_18px_rgba(52,211,153,.18)]
                "
              />

              {/* =================================================
                  BOTTOM RIGHT GOLD CORNER
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  right-5
                  z-50
                  h-12
                  w-12
                  border-b
                  border-r
                  border-[#d9b35f]/65
                  transition-all
                  duration-700
                  group-hover:bottom-4
                  group-hover:right-4
                  group-hover:h-16
                  group-hover:w-16
                  group-hover:border-[#f1d98a]
                  group-hover:shadow-[4px_4px_18px_rgba(217,179,95,.18)]
                "
              />

              {/* =================================================
                  CENTER TOP DIAMOND
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-4
                  z-50
                  h-2
                  w-2
                  -translate-x-1/2
                  rotate-45
                  border
                  border-[#d9b35f]/70
                  bg-[#07110d]/80
                  transition-all
                  duration-700
                  group-hover:scale-150
                  group-hover:border-[#f1d98a]
                  group-hover:shadow-[0_0_12px_rgba(217,179,95,.8)]
                "
              />

              {/* =================================================
                  FINAL INNER HOVER GLOW
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[2px]
                  z-40
                  rounded-[23px]
                  border
                  border-transparent
                  transition-all
                  duration-700
                  group-hover:border-emerald-300/20
                  group-hover:shadow-[inset_0_0_35px_rgba(16,185,129,.08)]
                "
              />

            </div>

            {/* =================================================
                WORLD INFORMATION
            ================================================= */}

            <div className="text-center lg:text-left">

              {/* PREMIUM WORLD LABEL */}

              <div
                className="
                  world-detail-label
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#d9b35f]/20
                  bg-[#d9b35f]/[0.035]
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.20em]
                  text-[#d9b35f]
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:border-[#d9b35f]/40
                  sm:text-sm
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#d9b35f]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                World {world.number}
              </div>

              {/* TITLE */}

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {world.name}
              </h1>

              {/* TITLE LINE */}

              <div
                aria-hidden="true"
                className="
                  world-title-line
                  mx-auto
                  mt-5
                  h-px
                  w-20
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/65
                  to-transparent
                  transition-all
                  duration-700
                  lg:mx-0
                "
              />

              {/* SUBTITLE */}

              <p
                className={`
                  mt-5
                  text-xl
                  font-bold
                  leading-snug
                  sm:text-2xl
                  ${world.accent}
                `}
              >
                {world.subtitle}
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-gray-300
                  sm:text-lg
                  lg:mx-0
                "
              >
                {world.description}
              </p>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-gray-400
                  sm:text-lg
                  lg:mx-0
                "
              >
                One hundred handcrafted explorers belong to this world, each
                featuring a unique profession and one dominant hero prop.
              </p>

              {/* =================================================
                  WORLD DETAILS
              ================================================= */}

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:mt-10
                  sm:grid-cols-2
                  sm:gap-4
                "
              >
                {worldDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="
                      world-detail-info-card
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.09]
                      bg-white/[0.025]
                      p-5
                      text-center
                      transition-[transform,border-color,background-color]
                      duration-500
                      hover:-translate-y-1.5
                      hover:border-[#d9b35f]/30
                      hover:bg-white/[0.04]
                      lg:text-left
                    "
                  >

                    {/* TOP LINE */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        left-[15%]
                        right-[15%]
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-[#d9b35f]/30
                        to-transparent
                        opacity-50
                        transition-all
                        duration-500
                        group-hover:left-[8%]
                        group-hover:right-[8%]
                        group-hover:opacity-90
                      "
                    />

                    {/* CORNER */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        bottom-3
                        right-3
                        h-4
                        w-4
                        border-b
                        border-r
                        border-white/[0.10]
                        transition-all
                        duration-500
                        group-hover:h-6
                        group-hover:w-6
                        group-hover:border-[#d9b35f]/45
                      "
                    />

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-gray-500
                        transition-colors
                        duration-500
                        group-hover:text-gray-400
                        sm:text-sm
                      "
                    >
                      {detail.label}
                    </p>

                    <p
                      className="
                        mt-2
                        break-words
                        text-sm
                        font-bold
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-0.5
                        sm:text-base
                      "
                    >
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* =================================================
                  PREMIUM ACTION BUTTONS
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:mt-10
                  sm:flex-row
                  sm:flex-nowrap
                  sm:items-center
                  sm:justify-start
                "
              >

                {/* =================================================
                    GENESIS BUTTON — PREMIUM GOLD
                ================================================= */}

                <Link
                  href={`/explorer/${world.genesisId}`}
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-[#d9b35f]/50
                    bg-gradient-to-r
                    from-[#8f6d24]
                    via-[#c59a3d]
                    to-[#8f6d24]
                    px-5
                    py-4
                    text-sm
                    font-black
                    tracking-wide
                    text-[#fff8df]
                    shadow-[0_6px_25px_rgba(217,179,95,.14)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#f1d98a]/80
                    hover:from-[#a77f2b]
                    hover:via-[#d9b35f]
                    hover:to-[#a77f2b]
                    hover:text-white
                    hover:shadow-[0_10px_35px_rgba(217,179,95,.25)]
                    sm:w-auto
                    sm:min-w-[205px]
                    sm:px-6
                    sm:text-base
                  "
                >

                  {/* GOLD LIGHT SWEEP */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-1/2
                      w-1/3
                      -skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.18]
                      to-transparent
                      transition-all
                      duration-[1100ms]
                      group-hover:left-[125%]
                    "
                  />

                  {/* TOP GOLD HIGHLIGHT */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[18%]
                      right-[18%]
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#fff0b0]/90
                      to-transparent
                    "
                  />

                  {/* GOLD DOT */}

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#fff0b0]
                      transition-all
                      duration-500
                      group-hover:scale-125
                    "
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    View Genesis Explorer
                  </span>

                  {/* GOLD ARROW */}

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      text-lg
                      text-[#fff0b0]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </Link>

                {/* =================================================
                    COLLECTION BUTTON — GREEN
                ================================================= */}

                <Link
                  href="/collection"
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-[#42b883]/35
                    bg-gradient-to-r
                    from-[#123d2a]
                    via-[#195338]
                    to-[#123d2a]
                    px-5
                    py-4
                    text-sm
                    font-black
                    tracking-wide
                    text-[#e8f2eb]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#42b883]/55
                    hover:from-[#174c32]
                    hover:via-[#216b45]
                    hover:to-[#174c32]
                    hover:text-white
                    sm:w-auto
                    sm:min-w-[190px]
                    sm:px-6
                    sm:text-base
                  "
                >

                  {/* GREEN LIGHT SWEEP */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-1/2
                      w-1/3
                      -skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.10]
                      to-transparent
                      transition-all
                      duration-[1100ms]
                      group-hover:left-[125%]
                    "
                  />

                  {/* TOP GREEN HIGHLIGHT */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[18%]
                      right-[18%]
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#8fd8b1]/40
                      to-transparent
                    "
                  />

                  {/* GREEN DOT */}

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#72c99a]/70
                      transition-all
                      duration-500
                      group-hover:scale-125
                      group-hover:bg-[#9be0ba]
                    "
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Explore Collection
                  </span>

                  {/* GREEN ARROW */}

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      text-lg
                      text-[#8fd8b1]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </Link>

              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM WORLD STATEMENT
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-16
              max-w-4xl
              text-center
              sm:mt-20
            "
          >
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-6
                h-px
                w-20
                bg-gradient-to-r
                from-transparent
                via-emerald-400/35
                to-transparent
                transition-all
                duration-700
                hover:w-32
              "
            />

            <p
              className="
                text-base
                font-semibold
                leading-8
                text-gray-300
                sm:text-lg
              "
            >
              Every explorer has a role. Every role has a story.
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
              Discover the characters, professions and handcrafted details
              hidden within {world.name}.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}