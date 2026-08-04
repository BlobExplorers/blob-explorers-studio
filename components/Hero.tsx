"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Fireflies from "@/components/Fireflies";
import { collection } from "@/config/collection";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-16 sm:py-20 lg:py-0">
      <Fireflies />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]"
          >
            {collection.blockchain} NFT Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-5xl font-black leading-none text-white sm:text-6xl lg:mt-6 lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-2xl font-bold leading-tight text-green-400 sm:text-3xl lg:mt-8 lg:text-4xl"
          >
            {siteConfig.tagline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0 lg:mt-8 lg:text-xl lg:leading-9"
          >
            Discover {collection.totalSupply.toLocaleString()} handcrafted Blob
            Explorers travelling across magical worlds filled with adventure,
            discovery and unforgettable stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-10 lg:justify-start"
          >
            <Button href="#worlds">Explore Worlds</Button>

            <Button href="#collection" variant="secondary">
              View Collection
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full bg-emerald-500/20 blur-[100px] sm:h-[450px] sm:w-[450px] lg:h-[650px] lg:w-[650px] lg:blur-[140px]" />

          <div className="absolute h-[240px] w-[240px] rounded-full bg-green-300/10 blur-[70px] sm:h-[340px] sm:w-[340px] lg:h-[450px] lg:w-[450px] lg:blur-[80px]" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none"
          >
            <Image
              src="/images/hero/first-blob-explorer.png"
              alt="First Blob Explorer"
              width={650}
              height={650}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 520px, 650px"
              className="h-auto w-full drop-shadow-[0_20px_60px_rgba(16,185,129,0.35)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}