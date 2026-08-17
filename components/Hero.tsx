import Image from "next/image";
import Button from "@/components/ui/Button";
import { collection } from "@/config/collection";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07110d] py-16 sm:py-20 lg:py-0">
      {/* ========================================= */}
      {/* LIGHTWEIGHT BACKGROUND ATMOSPHERE */}
      {/* ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-1/3
          h-[320px]
          w-[320px]
          rounded-full
          bg-yellow-400/[0.018]
        "
      />

      {/* ========================================= */}
      {/* MAIN HERO CONTAINER */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          px-5
          sm:px-8
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* ========================================= */}
        {/* HERO TEXT */}
        {/* ========================================= */}

        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            {collection.blockchain} NFT Collection
          </p>

          <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-6xl lg:mt-6 lg:text-7xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-green-400 sm:text-3xl lg:mt-8 lg:text-4xl">
            {siteConfig.tagline}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0 lg:mt-8 lg:text-xl lg:leading-9">
            Explore {collection.totalSupply.toLocaleString()} handcrafted
            Explorers, each created with a unique profession, outfit, hero prop
            and story across the ever-expanding BlobVerse.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
            {collection.revealedWorlds} worlds have been discovered.{" "}
            {collection.hiddenWorlds} remain hidden, waiting for future
            explorers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-10 lg:justify-start">
            <Button href="#worlds">Explore Worlds</Button>

            <Button href="#collection" variant="secondary">
              View Collection
            </Button>
          </div>
        </div>

        {/* ========================================= */}
        {/* HERO CHARACTER */}
        {/* ========================================= */}

        <div className="relative flex justify-center">
          <div
            className="
              hero-character-motion
              relative
              z-10
              w-full
              max-w-[420px]
              sm:max-w-[520px]
              lg:max-w-[650px]
            "
          >
            {/* ========================================= */}
            {/* IMAGE STAGE */}
            {/* ========================================= */}

            <div
              className="
                hero-image-stage
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#07110d]
                sm:rounded-[2rem]
              "
            >
              {/* ========================================= */}
              {/* HOVER SHINE */}
              {/* ========================================= */}

              <div
                aria-hidden="true"
                className="
                  hero-shine-line
                  pointer-events-none
                  absolute
                  inset-x-0
                  -top-[20%]
                  z-20
                  h-[20%]
                "
              />

              {/* ========================================= */}
              {/* HERO IMAGE */}
              {/* ========================================= */}

              <Image
                src="/images/hero/first-blob-explorer-v2.png"
                alt="Blob Explorers flagship character"
                width={650}
                height={650}
                priority
                quality={85}
                sizes="
                  (max-width: 640px) 90vw,
                  (max-width: 1024px) 520px,
                  650px
                "
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />

              {/* ========================================= */}
              {/* SIMPLE STATIC EDGE */}
              {/* ========================================= */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-30
                  rounded-[2rem]
                  border
                  border-white/[0.05]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}