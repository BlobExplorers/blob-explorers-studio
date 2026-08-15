import { collection } from "@/config/collection";

const features = [
  {
    title: "Handcrafted",
    text: "Every Explorer is designed one by one with a unique profession, outfit, signature hero prop and story.",
  },
  {
    title: "78 Worlds",
    text: "The complete BlobVerse spans 78 worlds, each offering a distinct environment, theme and chapter of the journey.",
  },
  {
    title: "Ethereum",
    text: "A premium 7,777-piece NFT collection created for the Ethereum blockchain using the ERC-721 standard.",
  },
  {
    title: "One Recognizable Identity",
    text: "Every Explorer carries the recognizable Blob Explorers identity while becoming unique through its world, profession, outfit, hero prop and story.",
  },
];

export default function About() {
  const revealedWorlds = collection.revealedWorlds;
  const hiddenWorlds = collection.totalWorlds - revealedWorlds;

  return (
    <section
      id="story"
      className="relative scroll-mt-28 overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-[110px] sm:h-80 sm:w-80 sm:blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
              The Blob Explorers Story
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              One Explorer.
              <br />
              <span className="text-emerald-400">Infinite Stories.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-7 sm:text-lg lg:mx-0">
              Blob Explorers follows one recognizable Explorer identity across
              the BlobVerse, where every NFT becomes a unique handcrafted
              story through a different world, profession, outfit, signature
              hero prop and adventure.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              {revealedWorlds} worlds have been discovered. {hiddenWorlds}{" "}
              remain hidden, waiting for future explorers to uncover their
              stories.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="premium-card rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 sm:p-7"
              >
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}