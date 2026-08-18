"use client";

import { useState } from "react";

export default function SpotConfirm() {
  const [wallet, setWallet] = useState("");
  const [xPostLink, setXPostLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!wallet.trim() || !xPostLink.trim()) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="spot-confirm"
        className="relative px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <div
            className="
              rounded-3xl
              border
              border-emerald-400/20
              bg-[#0a1510]
              p-8
              text-center
              sm:p-10
              md:p-12
            "
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-3xl">
              ✓
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">
              Blob Explorers
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Spot Confirmed
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Your details have been submitted successfully. Keep your wallet
              address safe for the next step of the BlobVerse journey.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#07110d] p-5 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                Wallet Address
              </p>

              <p className="mt-2 break-all font-mono text-sm text-white">
                {wallet}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="
                mt-7
                rounded-full
                border
                border-white/10
                px-6
                py-3
                text-sm
                font-bold
                text-gray-300
                transition-colors
                duration-300
                hover:border-emerald-400/30
                hover:text-white
              "
            >
              Back
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="spot-confirm"
      className="relative px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 sm:text-sm">
            Blob Explorers
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Confirm Your Spot
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Complete the steps below, enter your wallet address, share your
            Explorer card and submit your details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-[#0a1510]
            p-6
            sm:p-8
            md:p-10
          "
        >
          {/* TASKS */}

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://x.com/BlobExplorers"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
                transition-colors
                duration-300
                hover:border-emerald-400/30
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Step 01
              </p>

              <h3 className="mt-2 font-black text-white">
                Follow Blob Explorers
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Follow @BlobExplorers on X.
              </p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
                transition-colors
                duration-300
                hover:border-emerald-400/30
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Step 02
              </p>

              <h3 className="mt-2 font-black text-white">
                Like the Post
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Like the official Blob Explorers post.
              </p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
                transition-colors
                duration-300
                hover:border-emerald-400/30
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Step 03
              </p>

              <h3 className="mt-2 font-black text-white">
                Repost the Post
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Repost the official post on X.
              </p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
                transition-colors
                duration-300
                hover:border-emerald-400/30
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Step 04
              </p>

              <h3 className="mt-2 font-black text-white">
                Comment on the Post
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Leave a comment on the official post.
              </p>
            </a>
          </div>

          {/* WALLET */}

          <div className="mt-8">
            <label
              htmlFor="wallet"
              className="text-sm font-bold text-white"
            >
              Wallet Address
            </label>

            <p className="mt-1 text-sm text-gray-500">
              No wallet connection required.
            </p>

            <input
              id="wallet"
              type="text"
              value={wallet}
              onChange={(event) => setWallet(event.target.value)}
              placeholder="Enter your Ethereum wallet address"
              className="
                mt-3
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                px-5
                py-4
                font-mono
                text-sm
                text-white
                outline-none
                transition-colors
                duration-300
                placeholder:text-gray-600
                focus:border-emerald-400/40
              "
            />
          </div>

          {/* SHARE */}

          <div className="mt-8">
            <p className="text-sm font-bold text-white">
              Share Your Blob Explorer Card
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Share your card on X, then paste the X post link below.
            </p>

            <button
              type="button"
              className="
                mt-4
                rounded-full
                border
                border-yellow-300/20
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
                px-6
                py-3
                text-sm
                font-black
                text-black
                transition-transform
                duration-300
                hover:-translate-y-0.5
              "
            >
              Share on X
            </button>

            <input
              type="url"
              value={xPostLink}
              onChange={(event) => setXPostLink(event.target.value)}
              placeholder="Paste your X post link"
              className="
                mt-4
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                px-5
                py-4
                text-sm
                text-white
                outline-none
                transition-colors
                duration-300
                placeholder:text-gray-600
                focus:border-emerald-400/40
              "
            />
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={!wallet.trim() || !xPostLink.trim()}
            className="
              mt-8
              w-full
              rounded-full
              border
              border-yellow-300/20
              bg-gradient-to-r
              from-yellow-400
              to-yellow-600
              px-6
              py-4
              text-sm
              font-black
              text-black
              transition-opacity
              duration-300
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Submit & Confirm Spot
          </button>
        </form>
      </div>
    </section>
  );
}