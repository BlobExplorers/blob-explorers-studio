"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { explorers } from "@/data/explorers";
import { worlds } from "@/config/worlds";
import { getRevealedWorldCount } from "@/lib/reveal";

const filters = [
  { label: "All", value: "all" },
  { label: "Forest", value: "forest" },
  { label: "River", value: "river" },
  { label: "Mountain", value: "mountain" },
  { label: "Volcano", value: "volcano" },
  { label: "Snow", value: "snow" },
  { label: "Ice", value: "ice" },
];

export default function CollectionPage() {
  const [selectedWorld, setSelectedWorld] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const revealedWorldCount = getRevealedWorldCount();

  const revealedWorldSlugs = new Set(
    worlds
      .slice(0, revealedWorldCount)
      .map((world) => world.slug)
  );

  const revealedExplorers = explorers.filter((explorer) =>
    revealedWorldSlugs.has(explorer.world)
  );

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredExplorers = revealedExplorers.filter((explorer) => {
    const matchesWorld =
      selectedWorld === "all" || explorer.world === selectedWorld;

    const normalizedId = normalizedSearch.replace("#", "");

    const matchesSearch =
      normalizedSearch === "" ||
      explorer.id.toLowerCase().includes(normalizedId) ||
      explorer.name.toLowerCase().includes(normalizedSearch) ||
      explorer.worldName.toLowerCase().includes(normalizedSearch);

    return matchesWorld && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-5 pb-20 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pb-24 lg:px-20">
        <section className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
              The Revealed Collection
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Explore the Genesis NFTs
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
              Search and explore the currently revealed Blob Explorers from
              the opening worlds of the BlobVerse.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
            <label htmlFor="explorer-search" className="sr-only">
              Search Explorers
            </label>

            <div className="relative">
              <input
                id="explorer-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by NFT ID, explorer name, or world..."
                className="w-full rounded-full border border-white/10 bg-white/[0.05] px-5 py-4 pr-12 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400/60 focus:bg-white/[0.08] sm:px-6 sm:pr-14 sm:text-base"
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 sm:right-5 sm:text-xl">
                ⌕
              </span>
            </div>
          </div>

          <div className="mt-7 flex gap-3 overflow-x-auto pb-2 sm:mt-8 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {filters.map((filter) => {
              const isActive = selectedWorld === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedWorld(filter.value)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition duration-300 sm:px-5 sm:py-3 ${
                    isActive
                      ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_8px_30px_rgba(250,204,21,0.25)]"
                      : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-emerald-400/40 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-2 border-b border-white/10 pb-5 text-center sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm font-semibold text-gray-400">
              Showing{" "}
              <span className="font-black text-white">
                {filteredExplorers.length}
              </span>{" "}
              {filteredExplorers.length === 1 ? "Explorer" : "Explorers"}
            </p>

            <p className="text-sm font-semibold text-emerald-400">
              {revealedWorldCount} Worlds Revealed
            </p>
          </div>

          {filteredExplorers.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredExplorers.map((explorer) => (
                <article
                  key={explorer.id}
                  className="premium-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={explorer.image}
                      alt={`#${explorer.id} ${explorer.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <p className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs font-bold text-yellow-400 backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:text-sm">
                      #{explorer.id}
                    </p>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 sm:text-sm sm:tracking-[0.2em]">
                      {explorer.worldName}
                    </p>

                    <h2 className="mt-3 text-xl font-black text-white sm:text-2xl">
                      {explorer.name}
                    </h2>

                    <Link
                      href={`/explorer/${explorer.id}`}
                      className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-400 sm:mt-7"
                    >
                      View Explorer

                      <span className="transition group-hover:translate-x-2">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-12 text-center sm:mt-12 sm:px-6 sm:py-16">
              <h2 className="text-2xl font-black text-white">
                No Explorer Found
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Try another NFT ID, explorer name, world, or filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedWorld("all");
                }}
                className="mt-7 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:-translate-y-1"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}