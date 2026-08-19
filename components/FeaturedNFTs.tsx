import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { explorers } from "@/data/explorers";

export default function FeaturedNFTs() {
  const genesisExplorers = explorers.filter(
    (explorer) => explorer.rarity === "Genesis"
  );

  return (
    <section
      id="collection"
      className="
        relative
        overflow-hidden
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
          SUBTLE SECTION DETAILS
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[18%]
          h-72
          w-72
          rounded-full
          bg-emerald-500/[0.018]
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          left-[-140px]
          h-80
          w-80
          rounded-full
          bg-yellow-400/[0.012]
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

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            SECTION HEADER
            ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <SectionHeading
            eyebrow="The Genesis Explorers"
            title="Featured Explorers"
            description="Meet six featured Explorers from the first six discovered worlds of the BlobVerse."
            center={false}
          />

          <Link
            href="/collection"
            className="
              group
              relative
              inline-flex
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-yellow-300/20
              bg-white/[0.025]
              px-6
              py-3.5
              font-bold
              text-white
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:border-yellow-400/45
              hover:text-yellow-300
              sm:w-fit
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                left-[-80%]
                w-[55%]
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/[0.08]
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-[330%]
              "
            />

            <span className="relative">
              View Revealed Collection
            </span>

            <span
              aria-hidden="true"
              className="
                relative
                ml-2
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* =======================================================
            FEATURED EXPLORERS
            ======================================================= */}

        <div
          className="
            mt-12
            grid
            gap-6
            sm:mt-14
            md:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {genesisExplorers.map((explorer, index) => (
            <article
              key={explorer.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-[#0a1510]
                transition-transform
                duration-700
                ease-out
                hover:-translate-y-2
              "
            >
              {/* =================================================
                  PREMIUM OUTER BORDER
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
                  border-white/[0.035]
                  transition-colors
                  duration-500
                  group-hover:border-yellow-400/25
                "
              />

              {/* =================================================
                  TOP ARCHITECTURAL LINE
                  ================================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[14%]
                  right-[14%]
                  top-0
                  z-40
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-yellow-400/50
                  to-transparent
                  opacity-60
                  transition-all
                  duration-700
                  group-hover:left-[7%]
                  group-hover:right-[7%]
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  NFT IMAGE
                  ================================================= */}

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-[#07110d]
                "
              >
                <Image
                  src={explorer.image}
                  alt={`#${explorer.id} ${explorer.name}`}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* IMAGE EDGE */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    border
                    border-white/[0.04]
                  "
                />

                {/* BOTTOM IMAGE GRADIENT */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    h-24
                    bg-gradient-to-t
                    from-[#0a1510]
                    via-[#0a1510]/25
                    to-transparent
                    opacity-70
                  "
                />

                {/* PREMIUM SWEEP */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    -translate-x-[120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.07]
                    to-transparent
                    skew-x-[-14deg]
                    transition-transform
                    duration-[1100ms]
                    ease-out
                    group-hover:translate-x-[120%]
                  "
                />

                {/* IMAGE CORNER */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-5
                    right-5
                    z-20
                    h-8
                    w-8
                    border-b
                    border-r
                    border-yellow-400/30
                    transition-all
                    duration-500
                    group-hover:h-11
                    group-hover:w-11
                    group-hover:border-yellow-400/65
                  "
                />

                {/* CARD INDEX */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    flex
                    h-8
                    min-w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#07110d]/75
                    px-2
                    text-[10px]
                    font-black
                    tracking-[0.15em]
                    text-white/70
                    backdrop-blur-[2px]
                  "
                >
                  0{index + 1}
                </div>
              </div>

              {/* =================================================
                  CARD CONTENT
                  ================================================= */}

              <div className="relative bg-[#0a1510] p-6 sm:p-7">

                {/* CONTENT TOP LINE */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-[8%]
                    right-[8%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-yellow-400/25
                    to-transparent
                  "
                />

                {/* WORLD */}

                <div className="flex items-center justify-between gap-4">
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-emerald-400
                      transition-colors
                      duration-300
                      group-hover:text-emerald-300
                      sm:text-sm
                      sm:tracking-[0.2em]
                    "
                  >
                    {explorer.worldName}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-8
                      shrink-0
                      bg-yellow-400/30
                      transition-all
                      duration-500
                      group-hover:w-12
                      group-hover:bg-yellow-400/60
                    "
                  />
                </div>

                {/* EXPLORER NAME */}

                <h3
                  className="
                    mt-3
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
                  {explorer.name}
                </h3>

                {/* NFT NUMBER */}

                <p
                  className="
                    mt-3
                    text-sm
                    font-bold
                    tracking-wide
                    text-yellow-400
                  "
                >
                  #{explorer.id}
                </p>

                {/* TITLE ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-yellow-400/45
                    transition-all
                    duration-500
                    group-hover:w-20
                    group-hover:bg-yellow-400
                  "
                />

                {/* VIEW EXPLORER */}

                <Link
                  href={`/explorer/${explorer.id}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-yellow-400
                    transition-colors
                    duration-300
                    hover:text-yellow-300
                    sm:mt-7
                  "
                >
                  <span>View Explorer</span>

                  <span
                    aria-hidden="true"
                    className="
                      inline-block
                      transition-transform
                      duration-500
                      group-hover:translate-x-1.5
                    "
                  >
                    →
                  </span>
                </Link>

                {/* BOTTOM DETAIL */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    right-7
                    h-px
                    w-7
                    bg-emerald-400/20
                    transition-all
                    duration-500
                    group-hover:w-12
                    group-hover:bg-emerald-400/45
                  "
                />
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            COLLECTION CLOSING LINE
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
              via-white/[0.07]
              to-transparent
            "
          />

          <div className="mx-auto mt-9 max-w-2xl text-center sm:mt-11">
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
              Six worlds discovered
            </p>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-gray-400
                sm:text-lg
              "
            >
              Six Genesis Explorers.
              <br className="sm:hidden" />{" "}
              A glimpse into the worlds waiting to be discovered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}