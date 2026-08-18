"use client";

import { useState } from "react";

export default function GTDSpot() {
  const [wallet, setWallet] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!wallet.trim()) return;

    setSubmitted(true);
  };

  return (
    <section
      id="gtd-spot"
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
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}

        <div className="text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-emerald-400
              sm:text-sm
            "
          >
            BlobVerse Access
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Confirm Your Spot
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
            "
          >
            Complete the tasks below and enter your wallet address to
            confirm your place among the Blob Explorers.
          </p>
        </div>

        {/* TASK CARD */}

        <div
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
          <div className="grid gap-3 sm:grid-cols-2">
            {/* FOLLOW */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                Step 01
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                Follow on X
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Follow Blob Explorers on X.
              </p>
            </div>

            {/* LIKE */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                Step 02
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                Like the Post
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Like the official Blob Explorers post.
              </p>
            </div>

            {/* REPOST */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                Step 03
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                Repost
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Repost the official Blob Explorers post.
              </p>
            </div>

            {/* COMMENT */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07110d]
                p-5
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                Step 04
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                Comment
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Leave a comment on the official post.
              </p>
            </div>
          </div>

          {/* WALLET */}

          <form onSubmit={handleSubmit} className="mt-8">
            <label
              htmlFor="wallet"
              className="
                block
                text-sm
                font-bold
                text-white
              "
            >
              Enter Wallet Address
            </label>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              No wallet connection required. Enter your Ethereum wallet
              address manually.
            </p>

            <input
              id="wallet"
              type="text"
              value={wallet}
              onChange={(event) => {
                setWallet(event.target.value);
                setSubmitted(false);
              }}
              placeholder="0x..."
              autoComplete="off"
              spellCheck={false}
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
                placeholder:text-gray-600
                focus:border-emerald-400/40
              "
            />

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={!wallet.trim()}
              className="
                mt-5
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
                transition-transform
                duration-300
                hover:-translate-y-0.5
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Confirm Spot
            </button>
          </form>

          {/* TEMP SUCCESS STATE */}

          {submitted && (
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-emerald-400/20
                bg-emerald-400/[0.06]
                p-5
                text-center
              "
            >
              <p className="text-lg font-black text-emerald-400">
                Spot Confirmed
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Your wallet address has been entered successfully.
                The remaining verification and Blob card sharing system
                will be connected in the next step.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}