import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const worlds = {
  forest: {
    number: "01",
    name: "Forest World",
    subtitle: "The Beginning of the BlobVerse",
    image: "/images/worlds/forest-cover.png",
    range: "#00001–#00100",
    genesisId: "00001",
    accent: "text-emerald-400",
    description:
      "Forest World is the first chapter of the Blob Explorers journey—an enchanted kingdom filled with ancient woodland paths, glowing lanterns, hidden waterfalls and emerald discoveries.",
  },
  river: {
    number: "02",
    name: "River World",
    subtitle: "Follow the Flow of Discovery",
    image: "/images/worlds/river-cover.png",
    range: "#00101–#00200",
    genesisId: "00101",
    accent: "text-cyan-400",
    description:
      "River World is a flowing kingdom of crystal waterways, hidden waterfalls, ancient bridges and legendary river passages.",
  },
  mountain: {
    number: "03",
    name: "Mountain World",
    subtitle: "Rise Above the Clouds",
    image: "/images/worlds/mountain-cover.png",
    range: "#00201–#00300",
    genesisId: "00201",
    accent: "text-slate-300",
    description:
      "Mountain World is a majestic realm of towering peaks, ancient bridges and daring expeditions high above the clouds.",
  },
  volcano: {
    number: "04",
    name: "Volcano World",
    subtitle: "Explore the Realm of Fire",
    image: "/images/worlds/volcano-cover.png",
    range: "#00301–#00400",
    genesisId: "00301",
    accent: "text-orange-400",
    description:
      "Volcano World is a blazing kingdom of lava rivers, volcanic forges and fearless expeditions through molten mountain passages.",
  },
  snow: {
    number: "05",
    name: "Snow World",
    subtitle: "Cross the Frozen Frontier",
    image: "/images/worlds/snow-cover.png",
    range: "#00401–#00500",
    genesisId: "00401",
    accent: "text-sky-300",
    description:
      "Snow World is a magical winter realm of frozen forests, snowy mountains and hidden frontier pathways.",
  },
  ice: {
    number: "06",
    name: "Ice World",
    subtitle: "Discover the Crystal Kingdom",
    image: "/images/worlds/ice-cover.png",
    range: "#00501–#00600",
    genesisId: "00501",
    accent: "text-cyan-300",
    description:
      "Ice World is a luminous realm of glowing glaciers, crystal caves and legendary frozen trails.",
  },
};

type WorldSlug = keyof typeof worlds;

export default async function WorldPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const world = worlds[slug as WorldSlug];

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

      <main className="min-h-screen px-5 pb-20 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pb-24 lg:px-20">
        <section className="mx-auto max-w-7xl">
          <Link
            href="/#worlds"
            className={`inline-flex items-center gap-2 text-sm font-bold transition sm:text-base ${world.accent}`}
          >
            ← Back to Worlds
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={world.image}
                alt={world.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
                World {world.number} · Revealed
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {world.name}
              </h1>

              <p
                className={`mt-5 text-xl font-bold leading-snug sm:mt-6 sm:text-2xl ${world.accent}`}
              >
                {world.subtitle}
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-7 sm:text-lg lg:mx-0">
                {world.description}
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                One hundred handcrafted explorers belong to this world, each
                featuring a unique profession and one dominant hero prop.
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                {worldDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center lg:text-left"
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

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link
                  href={`/explorer/${world.genesisId}`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-7 py-4 font-bold text-black transition hover:-translate-y-1"
                >
                  View Genesis Explorer
                </Link>

                <Link
                  href="/collection"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]"
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