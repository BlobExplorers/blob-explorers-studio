import { collection } from "@/config/collection";
import {
  getHiddenWorldCount,
  getRevealedWorldCount,
} from "@/lib/reveal";

export default function Stats() {
  const revealedWorlds = getRevealedWorldCount();
  const hiddenWorlds = getHiddenWorldCount();

  return (
    <section
      id="stats"
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.02] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl">
        <div
  className="
    stats-grid
    grid
    grid-cols-2
            gap-3
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
            sm:gap-5
            sm:p-7
            md:grid-cols-4
            md:p-10
          "
        >
          {/* TOTAL NFTs */}

          <div className="min-w-0 rounded-2xl border border-white/[0.06] bg-black/10 px-3 py-6 text-center sm:px-5 sm:py-7">
            <h3 className="text-3xl font-black leading-none text-yellow-400 sm:text-4xl md:text-5xl">
              {collection.totalSupply.toLocaleString()}
            </h3>

            <p className="mt-3 text-xs font-semibold leading-5 text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              Total NFTs
            </p>
          </div>

          {/* WORLDS REVEALED */}

          <div className="min-w-0 rounded-2xl border border-white/[0.06] bg-black/10 px-3 py-6 text-center sm:px-5 sm:py-7">
            <h3 className="text-3xl font-black leading-none text-yellow-400 sm:text-4xl md:text-5xl">
              {revealedWorlds} / {collection.totalWorlds}
            </h3>

            <p className="mt-3 text-xs font-semibold leading-5 text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              Worlds Revealed
            </p>
          </div>

          {/* HIDDEN WORLDS */}

          <div className="min-w-0 rounded-2xl border border-white/[0.06] bg-black/10 px-3 py-6 text-center sm:px-5 sm:py-7">
            <h3 className="text-3xl font-black leading-none text-yellow-400 sm:text-4xl md:text-5xl">
              {hiddenWorlds}
            </h3>

            <p className="mt-3 text-xs font-semibold leading-5 text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              Hidden Worlds
            </p>
          </div>

          {/* HANDCRAFTED */}

          <div className="block min-w-0 rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.04] px-3 py-6 text-center sm:px-5 sm:py-7">
            <h3 className="text-3xl font-black leading-none text-yellow-400 sm:text-4xl md:text-5xl">
              100%
            </h3>

            <p className="mt-3 text-xs font-semibold leading-5 text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              Handcrafted
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl px-2 text-center text-base leading-7 text-gray-400 sm:mt-10 sm:text-lg sm:leading-8">
          The BlobVerse is only beginning. {revealedWorlds} worlds have been
          discovered, while {hiddenWorlds} remain hidden, waiting for future
          explorers.
        </p>
      </div>
    </section>
  );
}