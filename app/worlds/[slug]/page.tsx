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
                WORLD IMAGE
            ================================================= */}

            <div
              className="
                group
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.10]
                bg-[#0a1510]
                transition-colors
                duration-300
                hover:border-white/[0.18]
              "
            >
              <Image
                src={world.image}
                alt={world.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  world-detail-image
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.035]
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
                  from-black/35
                  via-transparent
                  to-transparent
                "
              />

              {/* =================================================
                  PREMIUM CORNER LINES

                  Corner → Center → Corner

                  No shadow
                  No glow
                  No blur
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
                WORLD INFORMATION
            ================================================= */}

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
                  bg-yellow-400/[0.04]
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.20em]
                  text-yellow-400
                  sm:text-sm
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-yellow-400
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
                  mx-auto
                  mt-5
                  h-px
                  w-20
                  bg-emerald-400/40
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
                      group
                      rounded-2xl
                      border
                      border-white/[0.09]
                      bg-white/[0.025]
                      p-5
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-emerald-400/30
                      hover:bg-white/[0.04]
                      lg:text-left
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-gray-500
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
                        sm:text-base
                      "
                    >
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:mt-10
                  sm:flex-row
                  sm:flex-wrap
                  sm:justify-center
                  lg:justify-start
                "
              >

                {/* GENESIS BUTTON */}

                <Link
                  href={`/explorer/${world.genesisId}`}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-yellow-300/20
                    bg-gradient-to-r
                    from-yellow-400
                    to-yellow-600
                    px-7
                    py-4
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:from-yellow-300
                    hover:to-yellow-500
                  "
                >
                  View Genesis Explorer

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

                {/* COLLECTION BUTTON */}

                <Link
                  href="/collection"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.14]
                    bg-white/[0.035]
                    px-7
                    py-4
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/30
                    hover:bg-white/[0.06]
                  "
                >
                  Explore Collection

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
                bg-emerald-400/30
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