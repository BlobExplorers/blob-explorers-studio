const faqs = [
  {
    question: "What is Blob Explorers?",
    answer:
      "Blob Explorers is a premium handcrafted Ethereum NFT collection where every Explorer becomes a unique story through different worlds, professions, outfits and signature hero props while preserving the recognizable Blob Explorers identity.",
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
    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            FAQ
          </h2>
        </div>

        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="premium-card rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-emerald-400/30 sm:p-8"
            >
              <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                {faq.question}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}