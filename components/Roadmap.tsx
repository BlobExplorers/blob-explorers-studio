const roadmapItems = [
  {
    phase: "Phase 01",
    title: "Genesis Worlds",
    status: "In Progress",
    description:
      "Launch the first six revealed worlds and introduce the Blob Explorers journey to the community.",
  },
  {
    phase: "Phase 02",
    title: "OpenSea Launch",
    status: "Upcoming",
    description:
      "Publish the official collection on OpenSea and begin the public discovery of the BlobVerse.",
  },
  {
    phase: "Phase 03",
    title: "World Reveals",
    status: "Planned",
    description:
      "Reveal new worlds over time through stories, artwork, community events and website updates.",
  },
  {
    phase: "Phase 04",
    title: "BlobVerse Expansion",
    status: "Future",
    description:
      "Expand into deeper lore, interactive experiences, collaborations and new ways to explore the universe.",
  },
  {
    phase: "Phase 05",
    title: "Creator World",
    status: "Final Destination",
    description:
      "Unlock the final Creator World and complete the full journey across all 78 worlds.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            The Journey Ahead
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            BlobVerse Roadmap
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            From the first six discovered worlds to the final Creator World,
            every phase expands the story of Blob Explorers.
          </p>
        </div>

        <div className="mt-10 space-y-5 sm:mt-16 sm:space-y-6">
          {roadmapItems.map((item, index) => (
            <article
              key={item.phase}
              className="premium-card grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-yellow-400/40 sm:p-7 md:grid-cols-[140px_1fr_180px] md:items-center"
            >
              <div className="text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
                  {item.phase}
                </p>

                <p className="mt-2 text-3xl font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="text-center md:text-right">
                <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-bold text-yellow-400">
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}