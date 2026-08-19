import { collection } from "@/config/collection";
import {
  getHiddenWorldCount,
  getRevealedWorldCount,
} from "@/lib/reveal";

type StatItem = {
  key: string;
  label: string;
  getValue: (revealedWorlds?: number, hiddenWorlds?: number) => string;
  accent: "gold" | "green";
};

const statItems: StatItem[] = [
  {
    key: "total",
    label: "Total NFTs",
    getValue: () => collection.totalSupply.toLocaleString(),
    accent: "gold",
  },
  {
    key: "revealed",
    label: "Worlds Revealed",
    getValue: (revealedWorlds = 0) =>
      `${revealedWorlds} / ${collection.totalWorlds}`,
    accent: "green",
  },
  {
    key: "hidden",
    label: "Hidden Worlds",
    getValue: (_revealedWorlds = 0, hiddenWorlds = 0) =>
      hiddenWorlds.toString(),
    accent: "gold",
  },
  {
    key: "handcrafted",
    label: "Handcrafted",
    getValue: () => "100%",
    accent: "green",
  },
];

export default function Stats() {
  const revealedWorlds = getRevealedWorldCount();
  const hiddenWorlds = getHiddenWorldCount();

  return (
    <section
      id="stats"
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
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-500/[0.018]
          sm:h-96
          sm:w-96
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
            The BlobVerse
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
            The Collection
            <span className="text-emerald-400"> at a Glance</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-400
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            A handcrafted universe of explorers, worlds and stories — built
            one character at a time.
          </p>
        </div>

        {/* ===================================================== */}
        {/* STATS FRAME */}
        {/* ===================================================== */}

        <div
          className="
            stats-grid
            relative
            mt-10
            grid
            grid-cols-2
            gap-px
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.09]
            bg-white/[0.06]
            sm:mt-14
            md:grid-cols-4
          "
        >
          {/* TOP GOLD LINE */}

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
              via-[#d9b35f]/55
              to-transparent
            "
          />

          {/* BOTTOM GOLD LINE */}

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
              via-[#d9b35f]/30
              to-transparent
            "
          />

          {statItems.map((stat, index) => {
            const value =
              stat.key === "revealed"
                ? stat.getValue(revealedWorlds)
                : stat.key === "hidden"
                  ? stat.getValue(revealedWorlds, hiddenWorlds)
                  : stat.getValue();

            const isGold = stat.accent === "gold";

            return (
              <article
                key={stat.key}
                className="
                  stats-card
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  bg-[#0a1510]
                  px-4
                  py-8
                  text-center
                  transition-transform
                  duration-500
                  ease-out
                  hover:-translate-y-1
                  sm:px-6
                  sm:py-10
                  md:px-7
                  md:py-11
                "
              >
                {/* INNER FRAME */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-2
                    rounded-2xl
                    border
                    border-white/[0.035]
                    transition-colors
                    duration-500
                    group-hover:border-white/[0.08]
                  "
                />

                {/* TOP ACCENT */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    left-[25%]
                    right-[25%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    ${
                      isGold
                        ? "via-[#d9b35f]/40"
                        : "via-[#42b883]/40"
                    }
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[12%]
                    group-hover:right-[12%]
                    ${
                      isGold
                        ? "group-hover:via-[#d9b35f]/80"
                        : "group-hover:via-[#42b883]/80"
                    }
                  `}
                />

                {/* NUMBER */}

                <div
                  className={`
                    relative
                    z-10
                    text-3xl
                    font-black
                    leading-none
                    tracking-tight
                    transition-transform
                    duration-500
                    group-hover:scale-[1.035]
                    sm:text-4xl
                    md:text-5xl
                    ${
                      isGold
                        ? "text-yellow-400"
                        : "text-emerald-400"
                    }
                  `}
                >
                  {value}
                </div>

                {/* SMALL ACCENT */}

                <div
                  aria-hidden="true"
                  className={`
                    mx-auto
                    mt-5
                    h-px
                    w-8
                    transition-all
                    duration-500
                    group-hover:w-14
                    ${
                      isGold
                        ? "bg-[#d9b35f]/50 group-hover:bg-[#d9b35f]/80"
                        : "bg-[#42b883]/50 group-hover:bg-[#42b883]/80"
                    }
                  `}
                />

                {/* LABEL */}

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-xs
                    font-bold
                    uppercase
                    leading-5
                    tracking-[0.12em]
                    text-gray-300
                    transition-colors
                    duration-500
                    group-hover:text-white
                    sm:text-sm
                    md:text-base
                  "
                >
                  {stat.label}
                </p>

                {/* CORNER DETAIL */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    bottom-4
                    right-4
                    h-4
                    w-4
                    border-b
                    border-r
                    transition-all
                    duration-500
                    group-hover:h-6
                    group-hover:w-6
                    ${
                      isGold
                        ? "border-[#d9b35f]/20 group-hover:border-[#d9b35f]/50"
                        : "border-[#42b883]/20 group-hover:border-[#42b883]/50"
                    }
                  `}
                />

                {/* INDEX */}

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-[9px]
                    font-black
                    tracking-[0.18em]
                    text-white/[0.18]
                    transition-colors
                    duration-500
                    group-hover:text-white/[0.35]
                  "
                >
                  0{index + 1}
                </span>
              </article>
            );
          })}
        </div>

        {/* ===================================================== */}
        {/* BOTTOM MESSAGE */}
        {/* ===================================================== */}

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
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
              text-base
              font-semibold
              leading-7
              text-gray-300
              sm:text-lg
              sm:leading-8
            "
          >
            The BlobVerse is only beginning.
          </p>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            {revealedWorlds} worlds have been discovered, while {hiddenWorlds}{" "}
            remain hidden, waiting for future explorers.
          </p>
        </div>
      </div>
    </section>
  );
}