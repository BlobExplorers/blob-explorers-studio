export default function CreatorWorld() {
  return (
    <section
      id="creator-world"
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[160px]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-950/70 via-black/70 to-emerald-950/60 p-5 text-center shadow-2xl sm:p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.16),transparent_45%)]" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            The Final World
          </p>

          <div className="mx-auto mt-7 flex h-20 w-20 items-center justify-center rounded-full border border-violet-300/30 bg-violet-400/10 text-3xl shadow-[0_0_50px_rgba(167,139,250,0.25)] sm:mt-8 sm:h-24 sm:w-24 sm:text-4xl">
            🔒
          </div>

          <h2 className="mt-7 text-4xl font-black leading-tight text-white sm:mt-8 sm:text-5xl md:text-6xl">
            Creator World
          </h2>

          <p className="mt-4 text-lg font-bold text-violet-300 sm:mt-5 sm:text-xl">
            World 78 · Classified
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:mt-7 sm:text-lg sm:leading-8">
            At the end of the BlobVerse lies a world unlike any other. Its
            identity, explorers and purpose remain hidden, waiting for the
            final chapter of the journey.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:mt-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                NFT Range
              </p>

              <p className="mt-2 break-words text-sm font-black text-white sm:text-base">
                #07701–#07777
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                Explorers
              </p>

              <p className="mt-2 font-black text-white">
                77
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-sm sm:tracking-[0.2em]">
                Status
              </p>

              <p className="mt-2 font-black text-violet-300">
                Locked
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-violet-300/10 bg-violet-400/[0.06] px-5 py-4 text-sm leading-7 text-gray-400 sm:mt-10 sm:px-6 sm:text-base">
            The final world remains hidden until the BlobVerse reaches its
            ultimate chapter.
          </div>
        </div>
      </div>
    </section>
  );
}