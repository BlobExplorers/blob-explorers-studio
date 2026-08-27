import Image from "next/image";
import Button from "@/components/ui/Button";
import { collection } from "@/config/collection";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07110d] py-16 sm:py-20 lg:py-0">
      {/* ========================================================= */}
      {/* LIGHTWEIGHT BACKGROUND ATMOSPHERE                         */}
      {/* ========================================================= */}

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

      {/* ========================================================= */}
      {/* MAIN HERO CONTAINER                                       */}
      {/* ========================================================= */}

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
          lg:gap-12
        "
      >
        {/* ========================================================= */}
        {/* HERO TEXT                                                 */}
        {/* ========================================================= */}

        <div className="text-center lg:text-left">
          {/* EYEBROW */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/[0.035]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-yellow-400
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
              "
            />

            {collection.blockchain} NFT Collection
          </div>

          {/* MAIN TITLE */}

          <h1
            className="
              mt-6
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              sm:text-6xl
              lg:mt-7
              lg:text-7xl
            "
          >
            {siteConfig.name}
          </h1>

          {/* TAGLINE */}

          <h2
            className="
              mt-6
              max-w-2xl
              text-2xl
              font-bold
              leading-tight
              text-emerald-400
              sm:text-3xl
              lg:mt-7
              lg:text-4xl
            "
          >
            {siteConfig.tagline}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-300
              sm:text-lg
              lg:mx-0
              lg:mt-8
              lg:text-xl
              lg:leading-9
            "
          >
            Explore{" "}
            <span className="font-bold text-white">
              {collection.totalSupply.toLocaleString()}
            </span>{" "}
            handcrafted Explorers, each created with a unique profession,
            outfit, hero prop and story across the ever-expanding BlobVerse.
          </p>

          {/* WORLD STATUS */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
              lg:mx-0
            "
          >
            <span className="font-semibold text-emerald-400">
              {collection.revealedWorlds} worlds discovered
            </span>{" "}
            <span className="text-gray-500">•</span>{" "}
            {collection.hiddenWorlds} remain hidden, waiting for future
            explorers.
          </p>

          {/* ========================================================= */}
          {/* HERO BUTTONS                                              */}
          {/* ========================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
              sm:justify-center
              lg:mt-10
              lg:justify-start
            "
          >
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button href="#worlds">Explore Worlds</Button>
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button href="#collection" variant="secondary">
                View Collection
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FIVE IMAGE HERO WAVE                                      */}
        {/* ========================================================= */}

        <div className="hero-wave-stage">
          {/* ===================================================== */}
          {/* OUTER 3 — SNOW                                         */}
          {/* ===================================================== */}

          <div className="hero-wave-item hero-wave-snow">
            <Image
              src="/images/worlds/snow-cover.png"
              alt="Snow World"
              width={300}
              height={300}
              priority
              quality={90}
              sizes="150px"
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true" className="hero-image-shine" />
          </div>

          {/* ===================================================== */}
          {/* OUTER 1 — RIVER                                        */}
          {/* ===================================================== */}

          <div className="hero-wave-item hero-wave-river">
            <Image
              src="/images/worlds/river-cover.png"
              alt="River World"
              width={300}
              height={300}
              priority
              quality={90}
              sizes="150px"
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true" className="hero-image-shine" />
          </div>

          {/* ===================================================== */}
          {/* CENTER — FOREST                                        */}
          {/* ===================================================== */}

          <div className="hero-wave-center">
            <Image
              src="/images/worlds/forest-cover.png"
              alt="Enchanted Forest World"
              width={650}
              height={650}
              priority
              quality={90}
              sizes="
                (max-width: 480px) 62vw,
                (max-width: 768px) 58vw,
                (max-width: 1100px) 50vw,
                430px
              "
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true" className="hero-image-shine" />
          </div>

          {/* ===================================================== */}
          {/* OUTER 2 — VOLCANO                                      */}
          {/* ===================================================== */}

          <div className="hero-wave-item hero-wave-volcano">
            <Image
              src="/images/worlds/volcano-cover.png"
              alt="Volcano World"
              width={300}
              height={300}
              priority
              quality={90}
              sizes="150px"
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true" className="hero-image-shine" />
          </div>

          {/* ===================================================== */}
          {/* OUTER 4 — ICE                                          */}
          {/* ===================================================== */}

          <div className="hero-wave-item hero-wave-ice">
            <Image
              src="/images/worlds/ice-cover.png"
              alt="Ice World"
              width={300}
              height={300}
              priority
              quality={90}
              sizes="150px"
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true" className="hero-image-shine" />
          </div>
        </div>
      </div>
    </section>
  );
}