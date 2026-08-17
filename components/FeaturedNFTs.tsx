import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { explorers } from "@/data/explorers";

export default function FeaturedNFTs() {
  const genesisExplorers = explorers.filter(
    (explorer) => explorer.rarity === "Genesis"
  );

  return (
    <section
      id="collection"
      className="
        relative
        px-5
        py-20
        sm:px-8
        md:px-12
        md:py-24
        lg:px-20
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <SectionHeading
            eyebrow="The Genesis Explorers"
            title="Featured Explorers"
            description="Meet six featured Explorers from the first six discovered worlds of the BlobVerse."
            center={false}
          />

          <Link
            href="/collection"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-transparent
              px-6
              py-3
              font-bold
              text-white
              transition-colors
              duration-300
              hover:border-yellow-400/40
              hover:text-yellow-300
              sm:w-fit
            "
          >
            View Revealed Collection
          </Link>
        </div>

        {/* FEATURED EXPLORERS */}

        <div
          className="
            mt-10
            grid
            gap-6
            sm:mt-12
            md:grid-cols-2
            lg:mt-14
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {genesisExplorers.map((explorer) => (
            <article
              key={explorer.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0a1510]
                transition-colors
                duration-300
                hover:border-emerald-400/35
              "
            >
              {/* NFT IMAGE */}

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-[#07110d]
                "
              >
                <Image
                  src={explorer.image}
                  alt={`#${explorer.id} ${explorer.name}`}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                {/* CLEAN IMAGE EDGE */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    border
                    border-white/[0.04]
                  "
                />
              </div>

              {/* CARD CONTENT */}

              <div className="bg-[#0a1510] p-6 sm:p-7">
                {/* WORLD */}

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-emerald-400
                    sm:text-sm
                    sm:tracking-[0.2em]
                  "
                >
                  {explorer.worldName}
                </p>

                {/* EXPLORER NAME */}

                <h3
                  className="
                    mt-3
                    text-xl
                    font-black
                    text-white
                    sm:text-2xl
                  "
                >
                  {explorer.name}
                </h3>

                {/* NFT NUMBER */}

                <p
                  className="
                    mt-3
                    text-sm
                    font-bold
                    text-yellow-400
                  "
                >
                  #{explorer.id}
                </p>

                {/* VIEW EXPLORER */}

                <Link
                  href={`/explorer/${explorer.id}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-yellow-400
                    transition-colors
                    duration-300
                    hover:text-yellow-300
                    sm:mt-7
                  "
                >
                  View Explorer

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}