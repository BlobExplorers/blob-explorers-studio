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
      label: "World Status",
      value: "Revealed",
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
          pt-12
          sm:px-8
          sm:pt-16
          md:px-12
          md:pb-24
          lg:px-20
        "
      >
        <section className="mx-auto max-w-7xl">

          {/* BACK LINK */}

          <Link
            href="/#worlds"
            className={`
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              sm:text-base
              ${world.accent}
            `}
          >
            ← Back to Worlds
          </Link>

          {/* MAIN WORLD AREA */}

          <div
            className="
              mt-8
              grid
              items-start
              gap-10
              lg:mt-10
              lg:grid-cols-2
              lg:items-center
              lg:gap-14
            "
          >

            {/* WORLD IMAGE */}

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.10]
                bg-[#0a1510]
              "
            >
              <Image
                src={world.image}
                alt={world.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* WORLD NUMBER */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  z-20
                  rounded-full
                  border
                  border-white/[0.16]
                  bg-black/60
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-yellow-400
                  sm:text-sm
                "
              >
                World {world.number}
              </div>
            </div>

            {/* WORLD INFORMATION */}

            <div className="text-center lg:text-left">

              {/* EYEBROW */}

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
                World {world.number} · Revealed
              </p>

              {/* TITLE */}

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {world.name}
              </h1>

              {/* SUBTITLE */}

              <p
                className={`
                  mt-5
                  text-xl
                  font-bold
                  leading-snug
                  sm:mt-6
                  sm:text-2xl
                  ${world.accent}
                `}
              >
                {world.subtitle}
              </p>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-7 sm:text-lg lg:mx-0">
                {world.description}
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                One hundred handcrafted explorers belong to this world, each
                featuring a unique profession and one dominant hero prop.
              </p>

              {/* WORLD DETAILS */}

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                {worldDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.10]
                      bg-white/[0.035]
                      p-5
                      text-center
                      lg:text-left
                    "
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                      {detail.label}
                    </p>

                    <p className="mt-2 break-words font-bold text-white">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* ACTION BUTTONS */}

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

                <Link
                  href={`/explorer/${world.genesisId}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-yellow-400
                    to-yellow-600
                    px-7
                    py-4
                    font-bold
                    text-black
                  "
                >
                  View Genesis Explorer
                  <span>→</span>
                </Link>

                <Link
                  href="/collection"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.16]
                    bg-white/[0.04]
                    px-7
                    py-4
                    font-bold
                    text-white
                  "
                >
                  Explore Collection
                </Link>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}