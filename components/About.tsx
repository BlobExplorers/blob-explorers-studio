import { collection } from "@/config/collection";

const features = [
  {
    number: "01",
    title: "Handcrafted",
    text: "Every Explorer is designed one by one with a unique profession, outfit, signature hero prop and story.",
  },
  {
    number: "02",
    title: "78 Worlds",
    text: "The complete BlobVerse spans 78 worlds, each offering a distinct environment, theme and chapter of the journey.",
  },
  {
    number: "03",
    title: "Ethereum",
    text: "A premium 7,777-piece NFT collection created for the Ethereum blockchain using the ERC-721 standard.",
  },
  {
    number: "04",
    title: "World of Unique Explorers",
    text: "Each Explorer is handcrafted to become a distinct character, shaped by its world, profession, outfit, hero prop and story.",
  },
];

export default function About() {
  const revealedWorlds = collection.revealedWorlds;
  const hiddenWorlds = collection.totalWorlds - revealedWorlds;

  return (
    <section
      id="story"
      className="
        relative
        overflow-hidden
        scroll-mt-28
        px-5
        py-24
        sm:px-8
        sm:py-28
        md:px-12
        md:py-32
        lg:px-20
        lg:py-36
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND DETAILS
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[18%]
          h-72
          w-72
          rounded-full
          bg-emerald-500/[0.025]
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[8%]
          right-[-140px]
          h-80
          w-80
          rounded-full
          bg-yellow-400/[0.018]
          sm:h-[28rem]
          sm:w-[28rem]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[78%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-yellow-400/20
          to-transparent
        "
      />

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            INTRODUCTION
            ======================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          <div className="text-center lg:sticky lg:top-32 lg:text-left">

            {/* EYEBROW */}

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  bg-gradient-to-r
                  from-transparent
                  to-yellow-400/70
                  sm:w-14
                "
              />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-yellow-400
                  sm:text-sm
                  sm:tracking-[0.35em]
                "
              >
                The Blob Explorers Story
              </p>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  bg-gradient-to-l
                  from-transparent
                  to-yellow-400/70
                  lg:hidden
                  sm:w-14
                "
              />
            </div>

            {/* MAIN TITLE */}

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.04]
                tracking-tight
                text-white
                sm:mt-7
                sm:text-5xl
                md:text-6xl
                lg:text-[4.25rem]
                xl:text-[4.75rem]
              "
            >
              Every World.
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-emerald-300
                  via-emerald-400
                  to-yellow-300
                  bg-clip-text
                  text-transparent
                "
              >
                A New Explorer.
              </span>
            </h2>

            {/* INTRO PARAGRAPH */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-gray-300
                sm:mt-8
                sm:text-lg
                lg:mx-0
              "
            >
              Each handcrafted Explorer is shaped by a different world,
              profession, outfit, signature hero prop and story — creating a
              new chapter in the ever-expanding BlobVerse.
            </p>

            {/* DISCOVERY STATUS */}

            <div
              className="
                mx-auto
                mt-8
                flex
                max-w-xl
                items-center
                justify-center
                gap-4
                border-y
                border-white/[0.07]
                py-5
                sm:mt-10
                sm:gap-6
                lg:mx-0
                lg:justify-start
              "
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {revealedWorlds}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-emerald-400/80
                    sm:text-xs
                  "
                >
                  Discovered
                </p>
              </div>

              <div
                aria-hidden="true"
                className="h-9 w-px bg-white/10"
              />

              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {hiddenWorlds}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-yellow-400/80
                    sm:text-xs
                  "
                >
                  Hidden
                </p>
              </div>
            </div>

            {/* DISCOVERY MESSAGE */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                lg:mx-0
              "
            >
              {revealedWorlds} worlds have been discovered. {hiddenWorlds}{" "}
              remain hidden, waiting for future explorers to uncover their
              stories.
            </p>
          </div>

          {/* =====================================================
              FEATURE GRID
              ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

            {features.map((feature) => (
              <article
                key={feature.title}
                className="
                  premium-card
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  transition-transform
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-emerald-400/30
                  sm:p-7
                  md:p-8
                "
              >
                {/* TOP ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-7
                    right-7
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-yellow-400/40
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* CORNER DETAIL */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    right-5
                    top-5
                    h-7
                    w-7
                    border-r
                    border-t
                    border-yellow-400/20
                    transition-all
                    duration-500
                    group-hover:h-10
                    group-hover:w-10
                    group-hover:border-yellow-400/50
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-xs
                      font-black
                      tracking-[0.25em]
                      text-yellow-400/60
                      transition-colors
                      duration-300
                      group-hover:text-yellow-400
                    "
                  >
                    {feature.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-8
                      bg-emerald-400/30
                      transition-all
                      duration-500
                      group-hover:w-14
                      group-hover:bg-emerald-400/60
                    "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    text-xl
                    font-black
                    leading-tight
                    text-white
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-1
                    sm:text-2xl
                  "
                >
                  {feature.title}
                </h3>

                {/* TITLE ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    mt-4
                    h-px
                    w-10
                    bg-yellow-400/50
                    transition-all
                    duration-500
                    group-hover:w-20
                    group-hover:bg-yellow-400
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-400
                    sm:text-base
                  "
                >
                  {feature.text}
                </p>

                {/* BOTTOM DETAIL */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    left-6
                    h-px
                    w-8
                    bg-emerald-400/20
                    transition-all
                    duration-500
                    group-hover:w-16
                    group-hover:bg-emerald-400/50
                    sm:left-8
                  "
                />
              </article>
            ))}
          </div>
        </div>

        {/* =======================================================
            STORY CLOSING LINE
            ======================================================= */}

        <div className="mt-20 sm:mt-24 md:mt-28">

          <div
            aria-hidden="true"
            className="
              mx-auto
              h-px
              w-full
              max-w-5xl
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
            "
          />

          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-emerald-400/70
                sm:text-sm
                sm:tracking-[0.4em]
              "
            >
              The journey continues
            </p>

            <p
              className="
                mt-4
                text-lg
                font-semibold
                leading-8
                text-gray-300
                sm:text-xl
              "
            >
              Every world reveals a new chapter.
              <br className="hidden sm:block" />
              Every Explorer carries a new story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}