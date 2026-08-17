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
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.02] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8 md:p-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            BlobVerse Discovery
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            The Journey Has Just Begun
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            {revealedWorlds} worlds have been discovered, while {hiddenWorlds}{" "}
            remain hidden, waiting for future explorers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5 text-center transition duration-300 hover:border-emerald-400/40 sm:p-6">
            <p className="text-4xl font-black text-emerald-400 sm:text-5xl">
              {revealedWorlds}
            </p>

            <p className="mt-3 text-sm font-semibold text-gray-300 sm:text-base">
              Worlds Revealed
            </p>
          </div>

          <div className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.06] p-5 text-center transition duration-300 hover:border-violet-400/40 sm:p-6">
            <p className="text-4xl font-black text-violet-300 sm:text-5xl">
              {hiddenWorlds}
            </p>

            <p className="mt-3 text-sm font-semibold text-gray-300 sm:text-base">
              Hidden Worlds
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5 text-center transition duration-300 hover:border-yellow-400/40 sm:p-6">
            <p className="text-4xl font-black text-yellow-400 sm:text-5xl">
              {collection.totalWorlds}
            </p>

            <p className="mt-3 text-sm font-semibold text-gray-300 sm:text-base">
              Total Worlds
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="flex items-center justify-between gap-4 text-xs font-bold sm:text-sm">
            <span className="text-gray-400">World Discovery</span>

            <span className="shrink-0 text-emerald-400">
              {revealedWorlds} / {collection.totalWorlds}
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full border border-white/10 bg-black/30 sm:h-4">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-gray-500 sm:mt-6 sm:text-sm sm:leading-7">
            {revealedWorlds} worlds have been discovered. {hiddenWorlds} remain
            hidden, waiting for future explorers.
          </p>
        </div>
      </div>
    </section>
  );
}