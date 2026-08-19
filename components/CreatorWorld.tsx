export default function CreatorWorld() {
  return (
    <section
      id="creator-world"
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
      {/* No blur / filter / heavy shadow */}
      {/* ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.018]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-120px]
          h-72
          w-72
          rounded-full
          bg-emerald-500/[0.015]
        "
      />

      {/* ===================================================== */}
      {/* MAIN FRAME */}
      {/* ===================================================== */}

      <div
        className="
          creator-world-card
          group
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[2rem]
          border
          border-white/[0.08]
          bg-[#0a1510]
          px-5
          py-8
          sm:p-10
          md:p-14
          lg:p-16
        "
      >
        {/* =================================================== */}
        {/* OUTER PREMIUM BORDER */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-40
            rounded-[2rem]
            border
            border-white/[0.045]
            transition-colors
            duration-700
            group-hover:border-[#d9b35f]/25
          "
        />

        {/* =================================================== */}
        {/* INNER FRAME */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-2
            z-40
            rounded-[1.75rem]
            border
            border-white/[0.025]
            transition-colors
            duration-700
            group-hover:border-violet-300/[0.08]
          "
        />

        {/* =================================================== */}
        {/* TOP GOLD ACCENT */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[18%]
            right-[18%]
            top-0
            z-50
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#d9b35f]/45
            to-transparent
            transition-all
            duration-700
            group-hover:left-[8%]
            group-hover:right-[8%]
            group-hover:via-[#d9b35f]/80
          "
        />

        {/* =================================================== */}
        {/* TOP CLASSIFIED LINE */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-6
            h-px
            w-16
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-violet-300/40
            to-transparent
            transition-all
            duration-700
            group-hover:w-28
            group-hover:via-violet-300/70
          "
        />

        <div className="relative z-30 text-center">
          {/* ================================================= */}
          {/* EYEBROW */}
          {/* ================================================= */}

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.28em]
              text-yellow-400
              sm:text-sm
              sm:tracking-[0.4em]
            "
          >
            The Final World
          </p>

          {/* ================================================= */}
          {/* LOCK ICON */}
          {/* ================================================= */}

          <div className="mx-auto mt-8 flex justify-center">
            <div
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-violet-300/25
                bg-[#07110d]
                transition-all
                duration-700
                group-hover:scale-[1.04]
                group-hover:border-[#d9b35f]/45
                sm:h-28
                sm:w-28
              "
            >
              {/* INNER RING */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-full
                  border
                  border-white/[0.04]
                  transition-colors
                  duration-700
                  group-hover:border-violet-300/15
                "
              />

              <span
                className="
                  relative
                  z-10
                  text-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  sm:text-4xl
                "
              >
                🔒
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              transition-colors
              duration-500
              group-hover:text-[#f7f0d5]
              sm:mt-8
              sm:text-5xl
              md:text-6xl
            "
          >
            Creator World
          </h2>

          {/* ================================================= */}
          {/* WORLD NUMBER */}
          {/* ================================================= */}

          <div
            className="
              mx-auto
              mt-5
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-violet-300/15
              bg-violet-400/[0.04]
              px-4
              py-2
              text-sm
              font-black
              uppercase
              tracking-[0.14em]
              text-violet-300
              transition-all
              duration-500
              group-hover:border-[#d9b35f]/30
              group-hover:text-[#d9b35f]
              sm:text-base
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-violet-300
                transition-colors
                duration-500
                group-hover:bg-[#d9b35f]
              "
            />

            World 78 · Classified
          </div>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-gray-300
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            At the end of the BlobVerse lies a world unlike any other. Its
            identity, explorers and purpose remain hidden, waiting for the
            final chapter of the journey.
          </p>

          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-9
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              via-[#d9b35f]/40
              to-transparent
              transition-all
              duration-700
              group-hover:w-32
              group-hover:via-[#d9b35f]/70
              sm:mt-10
            "
          />

          {/* ================================================= */}
          {/* STATS */}
          {/* ================================================= */}

          <div
            className="
              mx-auto
              mt-9
              grid
              max-w-4xl
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.05]
              sm:mt-11
              sm:grid-cols-3
            "
          >
            {/* NFT RANGE */}

            <div
              className="
                creator-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0a1510]
                px-5
                py-7
                transition-colors
                duration-500
                hover:bg-[#0c1912]
                sm:px-6
                sm:py-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/30
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-[#d9b35f]/70
                "
              />

              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  sm:text-xs
                "
              >
                NFT Range
              </p>

              <p
                className="
                  mt-3
                  text-base
                  font-black
                  tracking-tight
                  text-white
                  sm:text-lg
                "
              >
                #07701–#07777
              </p>
            </div>

            {/* EXPLORERS */}

            <div
              className="
                creator-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0a1510]
                px-5
                py-7
                transition-colors
                duration-500
                hover:bg-[#0c1912]
                sm:px-6
                sm:py-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-400/25
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-emerald-400/65
                "
              />

              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  sm:text-xs
                "
              >
                Explorers
              </p>

              <p
                className="
                  mt-3
                  text-3xl
                  font-black
                  leading-none
                  text-emerald-400
                  sm:text-4xl
                "
              >
                77
              </p>
            </div>

            {/* STATUS */}

            <div
              className="
                creator-stat
                group/stat
                relative
                overflow-hidden
                bg-[#0a1510]
                px-5
                py-7
                transition-colors
                duration-500
                hover:bg-[#0c1912]
                sm:px-6
                sm:py-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[25%]
                  right-[25%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-violet-300/25
                  to-transparent
                  transition-all
                  duration-700
                  group-hover/stat:left-[10%]
                  group-hover/stat:right-[10%]
                  group-hover/stat:via-violet-300/65
                "
              />

              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  sm:text-xs
                "
              >
                Status
              </p>

              <div className="mt-3 inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-violet-300
                    transition-colors
                    duration-500
                    group-hover/stat:bg-[#d9b35f]
                  "
                />

                <p className="text-lg font-black text-violet-300 sm:text-xl">
                  Locked
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* FINAL MESSAGE */}
          {/* ================================================= */}

          <div
            className="
              mx-auto
              mt-9
              max-w-3xl
              rounded-3xl
              border
              border-white/[0.07]
              bg-[#07110d]
              px-5
              py-5
              transition-colors
              duration-500
              group-hover:border-[#d9b35f]/20
              sm:mt-11
              sm:px-7
              sm:py-6
            "
          >
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-4
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                via-[#d9b35f]/40
                to-transparent
                transition-all
                duration-700
                group-hover:w-20
                group-hover:via-[#d9b35f]/65
              "
            />

            <p
              className="
                text-sm
                font-semibold
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
              "
            >
              The final world remains hidden until the BlobVerse reaches its
              ultimate chapter.
            </p>
          </div>
        </div>

        {/* =================================================== */}
        {/* CORNER DETAILS */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-6
            top-6
            z-50
            h-8
            w-8
            border-l
            border-t
            border-violet-300/15
            transition-all
            duration-700
            group-hover:left-5
            group-hover:top-5
            group-hover:h-10
            group-hover:w-10
            group-hover:border-[#d9b35f]/40
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-6
            top-6
            z-50
            h-8
            w-8
            border-r
            border-t
            border-[#d9b35f]/15
            transition-all
            duration-700
            group-hover:right-5
            group-hover:top-5
            group-hover:h-10
            group-hover:w-10
            group-hover:border-[#d9b35f]/40
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-6
            left-6
            z-50
            h-8
            w-8
            border-b
            border-l
            border-emerald-400/10
            transition-all
            duration-700
            group-hover:bottom-5
            group-hover:left-5
            group-hover:h-10
            group-hover:w-10
            group-hover:border-emerald-400/30
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-6
            right-6
            z-50
            h-8
            w-8
            border-b
            border-r
            border-white/[0.07]
            transition-all
            duration-700
            group-hover:bottom-5
            group-hover:right-5
            group-hover:h-10
            group-hover:w-10
            group-hover:border-[#d9b35f]/35
          "
        />

        {/* =================================================== */}
        {/* BOTTOM PREMIUM LINE */}
        {/* =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-[18%]
            right-[18%]
            z-50
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#42b883]/25
            to-transparent
            transition-all
            duration-700
            group-hover:left-[8%]
            group-hover:right-[8%]
            group-hover:via-[#42b883]/55
          "
        />
      </div>
    </section>
  );
}