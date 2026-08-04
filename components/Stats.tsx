import { siteConfig } from "@/config/site";
import {
  getHiddenWorldCount,
  getRevealedWorldCount,
} from "@/lib/reveal";

export default function Stats() {
  const revealedWorlds = getRevealedWorldCount();
  const hiddenWorlds = getHiddenWorldCount();

  const stats = [
    {
      number: siteConfig.totalNFTs.toLocaleString(),
      label: "Total NFTs",
    },
    {
      number: `${revealedWorlds} / ${siteConfig.totalWorlds}`,
      label: "Worlds Revealed",
    },
    {
      number: hiddenWorlds.toString(),
      label: "Hidden Worlds",
    },
    {
      number: "100%",
      label: "Handcrafted",
    },
  ];

  return (
    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:gap-5 sm:p-7 md:grid-cols-4 md:p-10">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.06] bg-black/10 px-3 py-6 text-center sm:px-5"
            >
              <h3 className="text-3xl font-black leading-none text-yellow-400 sm:text-4xl md:text-5xl">
                {item.number}
              </h3>

              <p className="mt-3 text-xs font-semibold leading-5 text-gray-300 sm:mt-4 sm:text-base md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl px-2 text-center text-base leading-7 text-gray-400 sm:mt-10 sm:text-lg sm:leading-8">
          The BlobVerse is only beginning. {revealedWorlds} worlds have been
          revealed, while {hiddenWorlds} remain hidden.
        </p>
      </div>
    </section>
  );
}