const roadmapItems = [
  {
    phase: "Phase 01",
    title: "Genesis Worlds",
    status: "In Progress",
    description:
      "Introduce the first six discovered worlds and begin the Blob Explorers journey with the community.",
  },
  {
    phase: "Phase 02",
    title: "OpenSea Launch",
    status: "Upcoming",
    description:
      "Launch the official Blob Explorers collection on OpenSea and open the door to the BlobVerse.",
  },
  {
    phase: "Phase 03",
    title: "World Reveals",
    status: "Planned",
    description:
      "Reveal additional worlds through new artwork, stories, community experiences and ongoing BlobVerse discoveries.",
  },
  {
    phase: "Phase 04",
    title: "BlobVerse Expansion",
    status: "Future",
    description:
      "Expand the universe through deeper lore, interactive experiences, collaborations and new ways to explore the BlobVerse.",
  },
  {
    phase: "Phase 05",
    title: "Creator World",
    status: "Final Destination",
    description:
      "Reveal the final Creator World and complete the journey across all 78 worlds of the BlobVerse.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="
        relative
        overflow-hidden
        bg-[#07110d]
        px-5
        py-20
        sm:px-8
        md:px-12
        md:py-24
        lg:px-20
      "
    >
      {/* ===================================================== */}
      {/* LIGHTWEIGHT ATMOSPHERE */}
      {/* ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/3
          h-80
          w-80
          rounded-full
          bg-yellow-400/[0.018]
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.24em]
              text-yellow-400
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            The Journey Ahead
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            BlobVerse
            <span className="text-emerald-400"> Roadmap</span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-gray-300
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            From the first discovered worlds to the final Creator World,
            each phase expands the story and universe of Blob Explorers.
          </p>
        </div>

        {/* ===================================================== */}
        {/* ROADMAP */}
        {/* ===================================================== */}

        <div className="relative mt-12 sm:mt-16">
          {/* DESKTOP JOURNEY LINE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-8
              left-[84px]
              top-8
              hidden
              w-px
              bg-gradient-to-b
              from-[#d9b35f]/60
              via-[#42b883]/35
              to-[#d9b35f]/15
              md:block
            "
          />

          <div className="space-y-5 sm:space-y-6">
            {roadmapItems.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === roadmapItems.length - 1;

              return (
                <article
                  key={item.phase}
                  className="
                    roadmap-card
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-[#0a1510]
                    transition-transform
                    duration-500
                    ease-out
                    hover:-translate-y-1
                    md:grid
                    md:grid-cols-[170px_1fr_190px]
                    md:items-center
                  "
                >
                  {/* ================================================= */}
                  {/* TOP PREMIUM LINE */}
                  {/* ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[12%]
                      right-[12%]
                      top-0
                      z-20
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d9b35f]/35
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:left-[5%]
                      group-hover:right-[5%]
                      group-hover:via-[#d9b35f]/75
                    "
                  />

                  {/* ================================================= */}
                  {/* INNER FRAME */}
                  {/* ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      z-20
                      rounded-[22px]
                      border
                      border-white/[0.025]
                      transition-colors
                      duration-500
                      group-hover:border-white/[0.07]
                    "
                  />

                  {/* ================================================= */}
                  {/* PHASE COLUMN */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      z-30
                      flex
                      items-center
                      gap-5
                      border-b
                      border-white/[0.06]
                      px-5
                      py-6
                      sm:px-7
                      sm:py-7
                      md:border-b-0
                      md:px-6
                      md:py-8
                    "
                  >
                    {/* NUMBER NODE */}

                    <div
                      className="
                        relative
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d9b35f]/30
                        bg-[#07110d]
                        transition-all
                        duration-500
                        group-hover:scale-[1.05]
                        group-hover:border-[#d9b35f]/70
                        sm:h-16
                        sm:w-16
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-black
                          text-yellow-400
                          sm:text-xl
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* NODE CENTER */}

                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          right-[-3px]
                          top-1/2
                          h-2
                          w-2
                          -translate-y-1/2
                          rotate-45
                          border
                          border-emerald-400/60
                          bg-[#07110d]
                        "
                      />
                    </div>

                    <div className="md:text-center">
                      <p
                        className="
                          whitespace-nowrap
                          text-xs
                          font-black
                          uppercase
                          tracking-[0.2em]
                          text-emerald-400
                          sm:text-sm
                          sm:tracking-[0.25em]
                        "
                      >
                        {item.phase}
                      </p>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* MAIN CONTENT */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      z-30
                      px-5
                      py-6
                      sm:px-7
                      sm:py-7
                      md:px-6
                      md:py-8
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-black
                        leading-tight
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-[#f7f0d5]
                        sm:text-3xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* TITLE ACCENT */}

                    <div
                      aria-hidden="true"
                      className="
                        mt-4
                        h-px
                        w-10
                        bg-gradient-to-r
                        from-[#d9b35f]/60
                        to-transparent
                        transition-all
                        duration-700
                        group-hover:w-20
                        group-hover:from-[#d9b35f]
                      "
                    />

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-gray-400
                        transition-colors
                        duration-500
                        group-hover:text-gray-300
                        sm:text-base
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* ================================================= */}
                  {/* STATUS */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      z-30
                      flex
                      items-center
                      px-5
                      pb-6
                      sm:px-7
                      sm:pb-7
                      md:justify-end
                      md:px-6
                      md:py-8
                    "
                  >
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/[0.09]
                        bg-[#07110d]
                        px-4
                        py-2.5
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-yellow-400
                        transition-all
                        duration-500
                        group-hover:border-[#d9b35f]/45
                        group-hover:bg-[#0c1912]
                        sm:text-sm
                      "
                    >
                      {/* STATUS DOT */}

                      <span
                        aria-hidden="true"
                        className={`
                          h-2
                          w-2
                          rounded-full
                          ${
                            isFirst
                              ? "bg-emerald-400"
                              : isLast
                                ? "bg-yellow-400"
                                : "bg-gray-500"
                          }
                        `}
                      />

                      {item.status}
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* BOTTOM LINE */}
                  {/* ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-[18%]
                      right-[18%]
                      z-20
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#42b883]/20
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:left-[8%]
                      group-hover:right-[8%]
                      group-hover:via-[#42b883]/55
                    "
                  />

                  {/* ================================================= */}
                  {/* CORNER DETAIL */}
                  {/* ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-5
                      right-5
                      z-30
                      h-5
                      w-5
                      border-b
                      border-r
                      border-white/[0.08]
                      transition-all
                      duration-500
                      group-hover:h-7
                      group-hover:w-7
                      group-hover:border-[#d9b35f]/45
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* ===================================================== */}
        {/* JOURNEY END */}
        {/* ===================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <div
            aria-hidden="true"
            className="
              mx-auto
              mb-5
              h-px
              w-16
              bg-gradient-to-r
              from-transparent
              via-[#d9b35f]/45
              to-transparent
            "
          />

          <p
            className="
              text-sm
              font-semibold
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            Five phases. One expanding universe. The journey continues across
            all 78 worlds of the BlobVerse.
          </p>
        </div>
      </div>
    </section>
  );
}