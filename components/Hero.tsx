import Image from "next/image";
import Button from "@/components/ui/Button";
import { collection } from "@/config/collection";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07110d] py-16 sm:py-20 lg:py-0">
      {/* ========================================================= */}
      {/* LIGHTWEIGHT BACKGROUND ATMOSPHERE                         */}
      {/* ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-1/3
          h-[320px]
          w-[320px]
          rounded-full
          bg-yellow-400/[0.018]
        "
      />

      {/* ========================================================= */}
      {/* MAIN HERO CONTAINER                                       */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          px-5
          sm:px-8
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* ========================================================= */}
        {/* HERO TEXT                                                 */}
        {/* ========================================================= */}

        <div className="text-center lg:text-left">
          {/* EYEBROW */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/[0.035]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-yellow-400
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
              "
            />

            {collection.blockchain} NFT Collection
          </div>

          {/* MAIN TITLE */}

          <h1
            className="
              mt-6
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              sm:text-6xl
              lg:mt-7
              lg:text-7xl
            "
          >
            {siteConfig.name}
          </h1>

          {/* TAGLINE */}

          <h2
            className="
              mt-6
              max-w-2xl
              text-2xl
              font-bold
              leading-tight
              text-emerald-400
              sm:text-3xl
              lg:mt-7
              lg:text-4xl
            "
          >
            {siteConfig.tagline}
          </h2>

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
              lg:mt-8
              lg:text-xl
              lg:leading-9
            "
          >
            Explore{" "}
            <span className="font-bold text-white">
              {collection.totalSupply.toLocaleString()}
            </span>{" "}
            handcrafted Explorers, each created with a unique profession,
            outfit, hero prop and story across the ever-expanding BlobVerse.
          </p>

          {/* WORLD STATUS */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
              lg:mx-0
            "
          >
            <span className="font-semibold text-emerald-400">
              {collection.revealedWorlds} worlds discovered
            </span>{" "}
            <span className="text-gray-500">•</span>{" "}
            {collection.hiddenWorlds} remain hidden, waiting for future
            explorers.
          </p>

          {/* ========================================================= */}
          {/* HERO BUTTONS                                              */}
          {/* ========================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
              sm:justify-center
              lg:mt-10
              lg:justify-start
            "
          >
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button href="#worlds">Explore Worlds</Button>
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button href="#collection" variant="secondary">
                View Collection
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HERO CHARACTER                                             */}
        {/* ========================================================= */}

        <div className="relative flex justify-center">
          {/* EXISTING FLOATING MOTION — PRESERVED */}

          <div
            className="
              hero-character-motion
              relative
              z-10
              w-full
              max-w-[420px]
              sm:max-w-[520px]
              lg:max-w-[650px]
            "
          >
            {/* ===================================================== */}
            {/* PREMIUM IMAGE STAGE                                    */}
            {/* ===================================================== */}

            <div
              className="
                hero-image-stage
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.06]
                bg-[#07110d]
              "
            >
              {/* =================================================== */}
              {/* SUBTLE INNER FRAME                                   */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[5px]
                  z-30
                  rounded-[calc(2rem-5px)]
                  border
                  border-emerald-400/[0.10]
                  transition-colors
                  duration-700
                  group-hover:border-emerald-400/[0.22]
                "
              />

              {/* =================================================== */}
              {/* SECOND INNER GOLD FRAME                              */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[9px]
                  z-30
                  rounded-[calc(2rem-9px)]
                  border
                  border-yellow-300/[0.06]
                  transition-colors
                  duration-700
                  group-hover:border-yellow-300/[0.20]
                "
              />

              {/* =================================================== */}
              {/* HERO IMAGE — SIZE / POSITION PRESERVED              */}
              {/* =================================================== */}

              <Image
                src="/images/hero/first-blob-explorer-v2.png"
                alt="Blob Explorers flagship character"
                width={650}
                height={650}
                priority
                quality={85}
                sizes="
                  (max-width: 640px) 90vw,
                  (max-width: 1024px) 520px,
                  650px
                "
                className="
                  relative
                  z-10
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />

              {/* =================================================== */}
              {/* CLEAN BASE BORDER                                    */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-40
                  rounded-[2rem]
                  border
                  border-white/[0.08]
                "
              />

              {/* =================================================== */}
              {/* PREMIUM MOVING BORDER                                 */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-50
                  rounded-[2rem]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                {/* TOP */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-[28%]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-emerald-400
                    to-[#f1d98a]
                    animate-border-top
                  "
                />

                {/* RIGHT */}

                <span
                  className="
                    absolute
                    right-0
                    top-0
                    h-[28%]
                    w-[2px]
                    rounded-full
                    bg-gradient-to-b
                    from-[#f1d98a]
                    via-emerald-400
                    to-transparent
                    animate-border-right
                  "
                />

                {/* BOTTOM */}

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-[2px]
                    w-[28%]
                    rounded-full
                    bg-gradient-to-l
                    from-transparent
                    via-emerald-400
                    to-[#f1d98a]
                    animate-border-bottom
                  "
                />

                {/* LEFT */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[28%]
                    w-[2px]
                    rounded-full
                    bg-gradient-to-t
                    from-[#f1d98a]
                    via-emerald-400
                    to-transparent
                    animate-border-left
                  "
                />
              </div>

              {/* =================================================== */}
              {/* PREMIUM DIAGONAL SHINE                               */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-[-20%]
                  left-[-45%]
                  z-50
                  w-[22%]
                  rotate-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.16]
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[1100ms]
                  ease-out
                  group-hover:left-[125%]
                  group-hover:opacity-100
                "
              />

              {/* =================================================== */}
              {/* TOP GOLD DETAIL                                      */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[15%]
                  right-[15%]
                  top-[5px]
                  z-50
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

              {/* =================================================== */}
              {/* BOTTOM GOLD DETAIL                                   */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-[5px]
                  left-[18%]
                  right-[18%]
                  z-50
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/20
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[10%]
                  group-hover:right-[10%]
                  group-hover:via-[#d9b35f]/55
                "
              />

              {/* =================================================== */}
              {/* CORNER DETAILS                                       */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-4
                  z-50
                  h-7
                  w-7
                  border-l
                  border-t
                  border-[#d9b35f]/35
                  transition-all
                  duration-700
                  group-hover:left-3
                  group-hover:top-3
                  group-hover:h-9
                  group-hover:w-9
                  group-hover:border-[#d9b35f]/75
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-4
                  z-50
                  h-7
                  w-7
                  border-r
                  border-t
                  border-[#42b883]/30
                  transition-all
                  duration-700
                  group-hover:right-3
                  group-hover:top-3
                  group-hover:h-9
                  group-hover:w-9
                  group-hover:border-[#42b883]/70
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  left-4
                  z-50
                  h-7
                  w-7
                  border-b
                  border-l
                  border-[#42b883]/25
                  transition-all
                  duration-700
                  group-hover:bottom-3
                  group-hover:left-3
                  group-hover:h-9
                  group-hover:w-9
                  group-hover:border-[#42b883]/65
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  right-4
                  z-50
                  h-7
                  w-7
                  border-b
                  border-r
                  border-[#d9b35f]/30
                  transition-all
                  duration-700
                  group-hover:bottom-3
                  group-hover:right-3
                  group-hover:h-9
                  group-hover:w-9
                  group-hover:border-[#d9b35f]/70
                "
              />

              {/* =================================================== */}
              {/* VERY SUBTLE PREMIUM OVERLAY                          */}
              {/* =================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  rounded-[2rem]
                  bg-gradient-to-t
                  from-[#07110d]/10
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}