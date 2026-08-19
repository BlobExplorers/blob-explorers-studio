import { collection } from "@/config/collection";
import {
  getHiddenWorldCount,
  getRevealedWorldCount,
} from "@/lib/reveal";

export default function DiscoveryProgress() {
  const revealedWorlds = getRevealedWorldCount();
  const hiddenWorlds = getHiddenWorldCount();
  const progress = (revealedWorlds / collection.totalWorlds) * 100;

  return (
    <section
      id="discovery"
      className="
        relative
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
      {/* ===================================================== */}
      {/* LIGHTWEIGHT ATMOSPHERE */}
      {/* ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.018]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-1/3
          h-80
          w-80
          rounded-full
          bg-yellow-400/[0.012]
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ===================================================== */}
        {/* PREMIUM FRAME */}
        {/* ===================================================== */}

        <div
          className="
            discovery-frame
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.08]
            bg-[#0a1510]
            p-5
            sm:p-8
            md:p-12
          "
        >
          {/* ================================================= */}
          {/* OUTER FRAME */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[7px]
              z-20
              rounded-[27px]
              border
              border-white/[0.025]
              transition-colors
              duration-700
              group-hover:border-white/[0.055]
            "
          />

          {/* ================================================= */}
          {/* TOP PREMIUM LINE */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[18%]
              right-[18%]
              top-0
              z-30
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#d9b35f]/45
              to-transparent
              transition-all
              duration-700
              group-hover:left-[8%]
              group-hover:right-[8%]
              group-hover:via-[#d9b35f]/80
            "
          />

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <div className="relative z-30 mx-auto max-w-4xl text-center">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.28em]
                text-yellow-400
                sm:text-sm
                sm:tracking-[0.38em]
              "
            >
              The Journey Continues
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Every World Reveals
              <br className="hidden sm:block" />
              <span className="text-emerald-400">
                {" "}
                a New Chapter.
              </span>
            </h2>

            <p
              className="
                mt-5
                text-base
                font-semibold
                leading-7
                text-gray-400
                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              Every Explorer carries a new story.
            </p>

            {/* HEADER DIVIDER */}

            <div
              aria-hidden="true"
              className="
                mx-auto
                mt-7
                h-px
                w-20
                bg-gradient-to-r
                from-transparent
                via-[#d9b35f]/60
                to-transparent
                sm:mt-8
              "
            />
          </div>

          {/* ================================================= */}
          {/* DISCOVERY TITLE */}
          {/* ================================================= */}

          <div className="relative z-30 mt-12 text-center sm:mt-14">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.24em]
                text-emerald-400
                sm:text-sm
                sm:tracking-[0.32em]
              "
            >
              BlobVerse Discovery
            </p>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              The Journey Has Just Begun
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
              "
            >
              {revealedWorlds} worlds have been discovered, while{" "}
              {hiddenWorlds} remain hidden, waiting for future explorers.
            </p>
          </div>

          {/* ================================================= */}
          {/* STAT CARDS */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-30
              mt-10
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.055]
              sm:mt-12
              sm:grid-cols-3
            "
          >
            {/* =============================================== */}
            {/* REVEALED */}
            {/* =============================================== */}

            <article
              className="
                discovery-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0b1711]
                px-5
                py-8
                text-center
                transition-transform
                duration-500
                hover:-translate-y-1
                sm:px-6
                sm:py-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#42b883]/45
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-[#42b883]/85
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.22em]
                  text-white/[0.18]
                "
              >
                01
              </span>

              <p
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-none
                  text-emerald-400
                  transition-transform
                  duration-500
                  group-hover/stat:scale-[1.04]
                  sm:text-5xl
                "
              >
                {revealedWorlds}
              </p>

              <p
                className="
                  mt-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                  sm:text-sm
                "
              >
                Worlds Revealed
              </p>
            </article>

            {/* =============================================== */}
            {/* HIDDEN */}
            {/* =============================================== */}

            <article
              className="
                discovery-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0b1711]
                px-5
                py-8
                text-center
                transition-transform
                duration-500
                hover:-translate-y-1
                sm:px-6
                sm:py-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/35
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-[#d9b35f]/75
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.22em]
                  text-white/[0.18]
                "
              >
                02
              </span>

              <p
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-none
                  text-yellow-400
                  transition-transform
                  duration-500
                  group-hover/stat:scale-[1.04]
                  sm:text-5xl
                "
              >
                {hiddenWorlds}
              </p>

              <p
                className="
                  mt-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                  sm:text-sm
                "
              >
                Hidden Worlds
              </p>
            </article>

            {/* =============================================== */}
            {/* TOTAL */}
            {/* =============================================== */}

            <article
              className="
                discovery-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0b1711]
                px-5
                py-8
                text-center
                transition-transform
                duration-500
                hover:-translate-y-1
                sm:px-6
                sm:py-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/45
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-[#d9b35f]/85
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.22em]
                  text-white/[0.18]
                "
              >
                03
              </span>

              <p
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-none
                  text-[#f0d889]
                  transition-transform
                  duration-500
                  group-hover/stat:scale-[1.04]
                  sm:text-5xl
                "
              >
                {collection.totalWorlds}
              </p>

              <p
                className="
                  mt-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                  sm:text-sm
                "
              >
                Total Worlds
              </p>
            </article>
          </div>

          {/* ================================================= */}
          {/* DISCOVERY PROGRESS */}
          {/* ================================================= */}

          <div className="relative z-30 mt-10 sm:mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-gray-400
                    sm:text-sm
                  "
                >
                  World Discovery
                </p>

                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  The BlobVerse is unfolding.
                </p>
              </div>

              <span
                className="
                  shrink-0
                  text-sm
                  font-black
                  tracking-wide
                  text-emerald-400
                  sm:text-base
                "
              >
                {revealedWorlds} / {collection.totalWorlds}
              </span>
            </div>

            {/* PROGRESS FRAME */}

            <div
              className="
                relative
                mt-5
                h-4
                overflow-hidden
                rounded-full
                border
                border-white/[0.08]
                bg-[#07110d]
                sm:h-5
              "
            >
              {/* PROGRESS */}

              <div
                className="
                  relative
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#1f6b45]
                  via-[#42b883]
                  to-[#d9b35f]
                  transition-[width]
                  duration-1000
                  ease-out
                "
                style={{ width: `${progress}%` }}
              >
                {/* MOVING HIGHLIGHT */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    w-16
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.20]
                    to-transparent
                  "
                />
              </div>
            </div>

            {/* PROGRESS LABEL */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                gap-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-gray-600
                sm:text-xs
                sm:tracking-[0.16em]
              "
            >
              <span>Genesis</span>
              <span>Discovery</span>
              <span>Creator World</span>
            </div>
          </div>

          {/* ================================================= */}
          {/* FINAL MESSAGE */}
          {/* ================================================= */}

          <div className="relative z-30 mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-5
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                via-[#d9b35f]/45
                to-transparent
              "
            />

            <p
              className="
                text-sm
                font-semibold
                leading-7
                text-gray-300
                sm:text-base
                sm:leading-8
              "
            >
              {revealedWorlds} worlds have been discovered.
            </p>

            <p
              className="
                mt-1
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              {hiddenWorlds} remain hidden, waiting for future explorers.
            </p>
          </div>

          {/* ================================================= */}
          {/* CORNER DETAILS */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-6
              left-6
              z-30
              h-6
              w-6
              border-b
              border-l
              border-emerald-400/20
              transition-all
              duration-700
              group-hover:h-8
              group-hover:w-8
              group-hover:border-emerald-400/40
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-6
              top-6
              z-30
              h-6
              w-6
              border-r
              border-t
              border-[#d9b35f]/20
              transition-all
              duration-700
              group-hover:h-8
              group-hover:w-8
              group-hover:border-[#d9b35f]/40
            "
          />

          {/* ================================================= */}
          {/* BOTTOM PREMIUM LINE */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[15%]
              right-[15%]
              z-30
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#42b883]/25
              to-transparent
              transition-all
              duration-700
              group-hover:left-[7%]
              group-hover:right-[7%]
              group-hover:via-[#42b883]/55
            "
          />
        </div>
      </div>
    </section>
  );
}