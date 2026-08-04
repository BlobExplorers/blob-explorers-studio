import { collection } from "@/config/collection";

const features = [
  {
    title: "Handcrafted",
    text: "Every Explorer is designed one by one with a unique profession, outfit and hero prop.",
  },
  {
    title: "78 Worlds",
    text: "The complete BlobVerse spans 78 planned worlds, with new realms revealed over time.",
  },
  {
    title: "Ethereum",
    text: "A premium 7,777-piece NFT collection created for the Ethereum blockchain.",
  },
  {
    title: "One Identity",
    text: "The same iconic Blob Explorer travels through every world while keeping one recognizable identity.",
  },
];

export default function About() {
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
              One Blob.
              <br />
              <span className="text-emerald-400">Infinite Worlds.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-7 sm:text-lg lg:mx-0">
              Blob Explorers follows one iconic character on a handcrafted
              journey across the BlobVerse. Every world introduces new
              professions, environments, armor and legendary hero props while
              preserving the same recognizable Blob identity.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              The adventure begins with {collection.revealedWorlds} revealed
              worlds. {collection.revealDelayHours} hours after the official
              OpenSea launch, all {collection.totalWorlds} worlds will be
              unlocked, revealing the complete BlobVerse.
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