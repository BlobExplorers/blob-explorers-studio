import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  explorers,
  getExplorerById,
} from "@/components/data/explorers";

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

      <main className="min-h-screen px-5 pb-20 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pb-24 lg:px-20">
        <section className="mx-auto max-w-7xl">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 transition hover:text-emerald-300 sm:text-base"
          >
            ← Back to Collection
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
              <Image
                src={explorer.image}
                alt={`#${explorer.id} ${explorer.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

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

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                {details.map((detail) => (
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
                  href="/collection"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-7 py-4 font-bold text-black transition hover:-translate-y-1"
                >
                  Explore Collection
                </Link>

                <Link
                  href={`/worlds/${explorer.world}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  Discover {explorer.worldName}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-5 sm:pt-10">
            {previousExplorer ? (
              <Link
                href={`/explorer/${previousExplorer.id}`}
                className="premium-card group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:-translate-y-1 hover:border-emerald-400/40 sm:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
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
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 text-left opacity-40 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                  ← Previous Explorer
                </p>

                <p className="mt-3 text-sm text-gray-500 sm:text-base">
                  This is the first revealed explorer.
                </p>
              </div>
            )}

            {nextExplorer ? (
              <Link
                href={`/explorer/${nextExplorer.id}`}
                className="premium-card group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:-translate-y-1 hover:border-yellow-400/40 sm:p-6 sm:text-right"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
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
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 text-left opacity-40 sm:p-6 sm:text-right">
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