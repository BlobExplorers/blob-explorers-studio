import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  explorers,
  getExplorerById,
} from "@/data/explorers";

export default async function ExplorerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const explorer = getExplorerById(id);

  if (!explorer) {
    notFound();
  }

  const currentIndex = explorers.findIndex(
    (item) => item.id === explorer.id
  );

  const previousExplorer =
    currentIndex > 0 ? explorers[currentIndex - 1] : null;

  const nextExplorer =
    currentIndex < explorers.length - 1
      ? explorers[currentIndex + 1]
      : null;

  const details = [
    {
      label: "NFT Number",
      value: `#${explorer.id}`,
    },
    {
      label: "World",
      value: explorer.worldName,
    },
    {
      label: "Profession",
      value: explorer.name,
    },
    {
      label: "Hero Prop",
      value: explorer.heroProp,
    },
    {
      label: "Blockchain",
      value: "Ethereum",
    },
    {
      label: "Collection",
      value: "7,777 Handcrafted NFTs",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07110d] px-5 pb-20 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pb-24 lg:px-20">
        <section className="mx-auto max-w-7xl">

          {/* =============================== */}
          {/* BACK LINK */}
          {/* =============================== */}

          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 transition-colors duration-300 hover:text-emerald-300 sm:text-base"
          >
            ← Back to Collection
          </Link>

          {/* =============================== */}
          {/* MAIN EXPLORER */}
          {/* =============================== */}

          <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-14">

            {/* =============================== */}
            {/* EXPLORER IMAGE */}
            {/* =============================== */}

            <div
              className="
                explorer-art
                group
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0a1510]
                shadow-2xl
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:scale-[1.008]
                hover:border-emerald-400/30
              "
            >

              {/* ================================= */}
              {/* DIAGONAL MOVING SHINE */}
              {/* ================================= */}

              <div
                aria-hidden="true"
                className="
                  explorer-shine
                  pointer-events-none
                  absolute
                  -inset-y-[40%]
                  -left-[75%]
                  z-30
                  w-[24%]
                  rotate-[25deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent
                  opacity-0
                  blur-[1px]
                "
              />

              {/* ================================= */}
              {/* PREMIUM BORDER GLOW */}
              {/* ================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  rounded-3xl
                  border
                  border-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(120deg, rgba(52,211,153,0.85), rgba(250,204,21,0.95), rgba(52,211,153,0.85)) border-box",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <Image
                src={explorer.image}
                alt={`#${explorer.id} ${explorer.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
              />

              {/* ================================= */}
              {/* IMAGE OVERLAY */}
              {/* ================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  opacity-60
                  transition-opacity
                  duration-500
                  group-hover:opacity-40
                "
              />

              {/* ================================= */}
              {/* CORNER LIGHT */}
              {/* ================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-6
                  top-6
                  z-40
                  h-1
                  w-16
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-400
                  to-yellow-400
                  opacity-0
                  shadow-[0_0_14px_rgba(52,211,153,0.8)]
                  transition-all
                  duration-500
                  group-hover:w-24
                  group-hover:opacity-100
                "
              />
            </div>

            {/* =============================== */}
            {/* EXPLORER INFO */}
            {/* =============================== */}

            <div className="text-center lg:text-left">

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
                Genesis Explorer
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {explorer.name}
              </h1>

              <p className="mt-5 break-words text-xl font-bold leading-snug text-emerald-400 sm:text-2xl">
                #{explorer.id} · {explorer.worldName}
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-7 sm:text-lg lg:mx-0">
                {explorer.description}
              </p>

              {/* =============================== */}
              {/* DETAILS */}
              {/* =============================== */}

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0a1510]
                      p-5
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-emerald-400/30
                      hover:bg-[#0b1711]
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

              {/* =============================== */}
              {/* ACTION BUTTONS */}
              {/* =============================== */}

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

                <Link
                  href="/collection"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-yellow-400
                    to-yellow-600
                    px-7
                    py-4
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_8px_30px_rgba(250,204,21,0.18)]
                  "
                >
                  Explore Collection
                </Link>

                <Link
                  href={`/worlds/${explorer.world}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-[#0a1510]
                    px-7
                    py-4
                    text-center
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-400/40
                    hover:text-emerald-300
                  "
                >
                  Discover {explorer.worldName}
                </Link>

              </div>
            </div>
          </div>

          {/* =============================== */}
          {/* PREVIOUS / NEXT */}
          {/* =============================== */}

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-5 sm:pt-10">

            {/* PREVIOUS */}

            {previousExplorer ? (
              <Link
                href={`/explorer/${previousExplorer.id}`}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0a1510]
                  p-5
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/40
                  hover:bg-[#0b1711]
                  sm:p-6
                "
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 transition-colors duration-300 group-hover:text-emerald-400 sm:text-sm sm:tracking-[0.2em]">
                  ← Previous Explorer
                </p>

                <p className="mt-3 text-lg font-black text-white sm:text-xl">
                  #{previousExplorer.id}
                </p>

                <p className="mt-1 break-words text-sm text-gray-400 sm:text-base">
                  {previousExplorer.name}
                </p>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/5 bg-[#0a1510] p-5 text-left opacity-40 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                  ← Previous Explorer
                </p>

                <p className="mt-3 text-sm text-gray-500 sm:text-base">
                  This is the first revealed explorer.
                </p>
              </div>
            )}

            {/* NEXT */}

            {nextExplorer ? (
              <Link
                href={`/explorer/${nextExplorer.id}`}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0a1510]
                  p-5
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/40
                  hover:bg-[#0b1711]
                  sm:p-6
                  sm:text-right
                "
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 transition-colors duration-300 group-hover:text-yellow-400 sm:text-sm sm:tracking-[0.2em]">
                  Next Explorer →
                </p>

                <p className="mt-3 text-lg font-black text-white sm:text-xl">
                  #{nextExplorer.id}
                </p>

                <p className="mt-1 break-words text-sm text-gray-400 sm:text-base">
                  {nextExplorer.name}
                </p>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/5 bg-[#0a1510] p-5 text-left opacity-40 sm:p-6 sm:text-right">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                  Next Explorer →
                </p>

                <p className="mt-3 text-sm text-gray-500 sm:text-base">
                  This is the last revealed explorer.
                </p>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}