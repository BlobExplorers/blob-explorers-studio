const faqs = [
  {
    question: "What is Blob Explorers?",
    answer:
      "Blob Explorers is a premium handcrafted Ethereum NFT collection where every Explorer becomes a distinct character through different worlds, professions, outfits, environments and signature hero props — each with a story of its own.",
  },
  {
    question: "How many NFTs are in the collection?",
    answer:
      "The collection contains exactly 7,777 handcrafted NFTs, created one by one with individually designed professions, outfits, environments and hero props.",
  },
  {
    question: "Why are only six worlds visible?",
    answer:
      "Six worlds are revealed at launch. The remaining seventy-two worlds will unlock within 24 hours after launch.",
  },
  {
    question: "Is every NFT handcrafted?",
    answer:
      "Yes. Every NFT is individually designed rather than randomly generated, with a unique profession, outfit, environment and signature hero prop.",
  },
  {
    question: "Which blockchain does Blob Explorers use?",
    answer:
      "Blob Explorers is built for the Ethereum blockchain using the ERC-721 standard.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        px-5
        py-20
        sm:px-8
        md:px-12
        md:py-24
        lg:px-20
      "
    >
      {/* LIGHTWEIGHT ATMOSPHERE */}
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

      <div className="relative mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="
              mx-auto
              mb-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d9b35f]/50 sm:w-16" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#d9b35f]/70" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d9b35f]/50 sm:w-16" />
          </div>

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
            Frequently Asked Questions
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Everything You
            <span className="text-emerald-400"> Need to Know</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
              sm:leading-8
            "
          >
            A closer look at the collection, its worlds, handcrafted
            philosophy and the journey ahead.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.09]
                bg-[#0a1510]
                p-5
                transition-colors
                duration-500
                hover:border-emerald-400/25
                sm:p-7
                md:p-8
              "
            >
              {/* TOP PREMIUM LINE */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[18%]
                  right-[18%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d9b35f]/35
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:left-[8%]
                  group-hover:right-[8%]
                  group-hover:via-[#d9b35f]/65
                "
              />

              {/* CORNER DETAIL */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  h-4
                  w-4
                  border-r
                  border-t
                  border-[#d9b35f]/20
                  transition-all
                  duration-500
                  group-hover:h-6
                  group-hover:w-6
                  group-hover:border-[#d9b35f]/45
                  sm:right-7
                  sm:top-7
                "
              />

              <div className="relative">

                {/* INDEX + QUESTION */}

                <div className="flex items-start gap-4 sm:gap-5">
                  <span
                    className="
                      mt-0.5
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.09]
                      bg-white/[0.025]
                      text-[10px]
                      font-black
                      tracking-[0.12em]
                      text-[#d9b35f]/70
                      transition-colors
                      duration-500
                      group-hover:border-[#d9b35f]/25
                      group-hover:text-[#d9b35f]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        pr-6
                        text-lg
                        font-black
                        leading-snug
                        text-white
                        transition-colors
                        duration-500
                        group-hover:text-emerald-300
                        sm:text-xl
                        md:text-2xl
                      "
                    >
                      {faq.question}
                    </h3>

                    <div
                      aria-hidden="true"
                      className="
                        mt-4
                        h-px
                        w-10
                        bg-emerald-400/30
                        transition-all
                        duration-500
                        group-hover:w-16
                        group-hover:bg-emerald-400/60
                      "
                    />

                    <p
                      className="
                        mt-4
                        max-w-3xl
                        text-sm
                        leading-7
                        text-gray-400
                        transition-colors
                        duration-500
                        group-hover:text-gray-300
                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
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
              text-gray-400
              sm:text-base
              sm:leading-8
            "
          >
            Every Explorer has a story.
          </p>

          <p
            className="
              mt-1
              text-xs
              uppercase
              tracking-[0.18em]
              text-gray-600
            "
          >
            Every world reveals another chapter.
          </p>
        </div>

      </div>
    </section>
  );
}