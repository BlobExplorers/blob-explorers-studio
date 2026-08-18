"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { supabase } from "@/lib/supabase";

const TEST_MODE = true;

const tasks = [
  {
    id: "follow",
    title: "Follow Blob Explorers",
    description: "Follow the official Blob Explorers profile on X.",
  },
  {
    id: "like",
    title: "Like the featured post",
    description: "Like the official Blob Explorers post.",
  },
  {
    id: "repost",
    title: "Repost the featured post",
    description: "Repost the official Blob Explorers post.",
  },
  {
    id: "comment",
    title: "Comment on the post",
    description: "Leave a genuine comment on the official post.",
  },
] as const;

type TaskId = (typeof tasks)[number]["id"];

export default function ClaimSpot() {
  const [completed, setCompleted] = useState<Record<TaskId, boolean>>({
    follow: false,
    like: false,
    repost: false,
    comment: false,
  });

  const [wallet, setWallet] = useState("");
  const [shared, setShared] = useState(false);
  const [postLink, setPostLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const xLinkAvailable = siteConfig.social.x.trim() !== "";

  const allTasksCompleted = Object.values(completed).every(Boolean);

  const walletLooksValid = /^0x[a-fA-F0-9]{40}$/.test(wallet.trim());

  const postLinkLooksValid =
    postLink.trim().startsWith("https://x.com/") ||
    postLink.trim().startsWith("https://twitter.com/");

  const canShowExplorerCard =
    allTasksCompleted && walletLooksValid;

  const shareRequirementPassed = TEST_MODE ? true : shared;

  const postRequirementPassed = TEST_MODE
    ? true
    : postLinkLooksValid;

  const finalComplete =
    canShowExplorerCard &&
    shareRequirementPassed &&
    postRequirementPassed &&
    submitted;

  const toggleTask = (id: TaskId) => {
    setCompleted((current) => ({
      ...current,
      [id]: !current[id],
    }));

    setSubmitted(false);
    setError("");
  };

  const handleShare = () => {
    const shareText =
      "I just secured my Blob Explorers spot. 🌍✨ #BlobExplorers #BlobVerse";

    const shareUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(shareText);

    window.open(
      shareUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setShared(true);
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async () => {
    setError("");

    if (!walletLooksValid) {
      setError("Please enter a valid Ethereum wallet address.");
      return;
    }

    if (!allTasksCompleted) {
      setError("Please complete all X tasks first.");
      return;
    }

    if (!TEST_MODE && !shared) {
      setError("Please share your Explorer on X first.");
      return;
    }

    if (!TEST_MODE && !postLinkLooksValid) {
      setError("Please enter a valid X post link.");
      return;
    }

    if (saving) {
      return;
    }

    try {
      setSaving(true);

      const xPostValue = TEST_MODE
        ? null
        : postLink.trim();

      const { error: insertError } = await supabase
        .from("claim_submissions")
        .insert({
          wallet_address: wallet.trim(),
          follow_completed: completed.follow,
          like_completed: completed.like,
          repost_completed: completed.repost,
          comment_completed: completed.comment,
          x_post_url: xPostValue,
        });

      if (insertError) {
        console.error(
          "Supabase submission error:",
          insertError
        );

        setError(
          "We couldn't save your submission. Please try again."
        );

        return;
      }

      setSubmitted(true);

      console.log(
        "Claim submission saved successfully."
      );
    } catch (submissionError) {
      console.error(
        "Submission error:",
        submissionError
      );

      setError(
        "Something went wrong while submitting. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <section
      id="claim"
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
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.24em]
              text-emerald-400
              sm:text-sm
            "
          >
            Blob Explorer Access
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Claim Your Spot
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
            Complete the community tasks, enter your wallet address,
            share your Explorer card and confirm your spot.
          </p>

          {TEST_MODE && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400/80">
              Database Test Mode
            </p>
          )}
        </div>

        {/* MAIN CARD */}

        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0a1510]
          "
        >

          {/* STEP 01 */}

          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Step 01
                </p>

                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  Complete X Tasks
                </h3>
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-gray-400
                "
              >
                {Object.values(completed).filter(Boolean).length}/4
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {tasks.map((task) => {
                const isComplete = completed[task.id];

                return (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-colors
                      duration-300
                      ${
                        isComplete
                          ? "border-emerald-400/30 bg-emerald-400/[0.06]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-sm
                        font-black
                        ${
                          isComplete
                            ? "border-emerald-400 bg-emerald-400 text-[#07110d]"
                            : "border-white/15 text-gray-400"
                        }
                      `}
                    >
                      {isComplete ? "✓" : ""}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-white">
                        {task.title}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-gray-500 sm:text-sm">
                        {task.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {xLinkAvailable && (
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  hover:border-emerald-400/30
                  hover:text-emerald-400
                "
              >
                Open Blob Explorers on X →
              </a>
            )}
          </div>

          {/* STEP 02 */}

          <div className="border-t border-white/10 p-6 sm:p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Step 02
            </p>

            <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
              Enter Wallet Address
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              No wallet connection is required. Enter the Ethereum wallet
              address where your Explorer will be associated.
            </p>

            <input
              type="text"
              value={wallet}
              onChange={(event) => {
                setWallet(event.target.value);
                setSubmitted(false);
                setError("");
              }}
              placeholder="0x..."
              autoComplete="off"
              spellCheck={false}
              className="
                mt-6
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

            {wallet.length > 0 && !walletLooksValid && (
              <p className="mt-3 text-xs text-yellow-400">
                Please enter a valid Ethereum wallet address.
              </p>
            )}

            {walletLooksValid && (
              <p className="mt-3 text-xs text-emerald-400">
                Wallet address accepted ✓
              </p>
            )}
          </div>

          {/* =====================================================
              STEP 03 — PREMIUM GENESIS EXPLORER CARD
              ===================================================== */}

          {canShowExplorerCard && (
            <div className="border-t border-white/10 p-6 sm:p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Step 03
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Genesis Explorer Card
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your community tasks are complete. Your Genesis Explorer
                identity is ready to share.
              </p>

              {/* PREMIUM GENESIS CARD */}

              <div
                className="
                  relative
                  mt-8
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-yellow-400/20
                  bg-[#07110d]
                "
              >

                {/* OUTER FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[2rem]
                    border
                    border-white/[0.06]
                  "
                />

                {/* PREMIUM TOP LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-10
                    right-10
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-yellow-300/70
                    to-transparent
                  "
                />

                {/* SECOND ACCENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-16
                    right-16
                    top-3
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-emerald-400/25
                    to-transparent
                  "
                />

                {/* CARD CONTENT */}

                <div className="relative p-6 sm:p-8 md:p-10">

                  {/* HEADER */}

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.34em]
                          text-yellow-400
                        "
                      >
                        Blob Explorers
                      </p>

                      <p
                        className="
                          mt-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.24em]
                          text-white/35
                        "
                      >
                        Genesis Collection
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-yellow-400/25
                        bg-yellow-400/[0.06]
                        text-xl
                      "
                    >
                      <img
  src="/images/hero/bloblogo.png"
  alt="Blob Explorers"
  className="h-12 w-12 object-contain"
/>
                    </div>
                  </div>

                  {/* MAIN GENESIS IDENTITY */}

                  <div className="mt-10 text-center">

                    {/* ORBIT RING */}

                    <div
                      className="
                        relative
                        mx-auto
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-yellow-300/30
                        bg-gradient-to-br
                        from-yellow-300/[0.14]
                        via-white/[0.035]
                        to-emerald-400/[0.08]
                      "
                    >

                      <div
                        className="
                          absolute
                          inset-2
                          rounded-full
                          border
                          border-white/[0.06]
                        "
                      />

                      <img
  src="/images/hero/bloblogo.png"
  alt="Blob Explorers"
  className="relative h-24 w-24 object-contain"
/>
                    </div>

                    <p
                      className="
                        mt-7
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.38em]
                        text-yellow-400
                      "
                    >
                      Blob Explorers
                    </p>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                        uppercase
                        tracking-tight
                        text-white
                        sm:text-4xl
                        md:text-5xl
                      "
                    >
                      GENESIS EXPLORER
                    </h3>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">

                      <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/50" />

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.3em]
                          text-white/35
                        "
                      >
                        The BlobVerse
                      </span>

                      <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/50" />

                    </div>

                    <p
                      className="
                        mx-auto
                        mt-5
                        max-w-md
                        text-sm
                        leading-6
                        text-gray-400
                      "
                    >
                      Your place in the BlobVerse is secured. The journey begins here.
                    </p>
                  </div>

                  {/* GENESIS STATUS */}

                  <div
                    className="
                      mt-8
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >

                    <div
                      className="
                        rounded-2xl
                        border
                        border-yellow-400/[0.12]
                        bg-yellow-400/[0.025]
                        p-5
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-gray-500
                        "
                      >
                        Explorer Status
                      </p>

                      <p className="mt-2 text-sm font-bold text-yellow-300">
                        Genesis Access
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-emerald-400/[0.12]
                        bg-emerald-400/[0.025]
                        p-5
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-gray-500
                        "
                      >
                        Collection
                      </p>

                      <p className="mt-2 text-sm font-bold text-emerald-300">
                        BlobVerse
                      </p>
                    </div>

                  </div>

                  {/* WALLET PANEL */}

                  <div
                    className="
                      relative
                      mt-5
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                    "
                  >

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-yellow-400/30
                        to-transparent
                      "
                    />

                    <div className="p-5 sm:p-6">

                      <div className="flex items-center justify-between gap-4">

                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-gray-500
                          "
                        >
                          Explorer Wallet
                        </p>

                        <span
                          className="
                            rounded-full
                            border
                            border-emerald-400/15
                            bg-emerald-400/[0.04]
                            px-3
                            py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-emerald-400
                          "
                        >
                          Verified
                        </span>

                      </div>

                      <p
                        className="
                          mt-3
                          break-all
                          font-mono
                          text-xs
                          leading-6
                          text-gray-300
                        "
                      >
                        {wallet}
                      </p>

                    </div>
                  </div>

                  {/* CARD FOOTER */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-col
                      gap-3
                      border-t
                      border-white/[0.06]
                      pt-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      Every Blob Has a Story
                    </p>

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-yellow-400/55
                      "
                    >
                    </p>

                  </div>

                </div>
              </div>
            </div>
          )}

          {/* STEP 04 */}

          {canShowExplorerCard && (
            <div className="border-t border-white/10 p-6 sm:p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Step 04
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Share Your Explorer
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {TEST_MODE
                  ? "Database test mode is active. You do not need to publish a real X post."
                  : "Share your completed Explorer card on X, then return here and submit the link to your post."}
              </p>

              {TEST_MODE ? (
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border
                    border-yellow-400/20
                    bg-yellow-400/[0.04]
                    p-5
                  "
                >
                  <p className="text-sm font-semibold text-yellow-300">
                    Test Mode Active
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    No public X post is required for this database test.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleShare}
                  className="
                    mt-6
                    inline-flex
                    w-full
                    items-center
                    justify-center
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
                    sm:w-auto
                  "
                >
                  {shared
                    ? "Shared on X ✓"
                    : "Share Your Explorer on X"}
                </button>
              )}
            </div>
          )}

          {/* STEP 05 */}

          {canShowExplorerCard && (
            <div className="border-t border-white/10 p-6 sm:p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Step 05
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                {TEST_MODE
                  ? "Confirm Database Test"
                  : "Submit Your X Post"}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {TEST_MODE
                  ? "You can now test whether your submission is correctly saved to Supabase."
                  : "Paste the X post link you just shared."}
              </p>

              {!TEST_MODE && (
                <>
                  <input
                    type="url"
                    value={postLink}
                    onChange={(event) => {
                      setPostLink(event.target.value);
                      setSubmitted(false);
                      setError("");
                    }}
                    placeholder="https://x.com/username/status/..."
                    className="
                      mt-6
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

                  {postLink.length > 0 && !postLinkLooksValid && (
                    <p className="mt-3 text-xs text-yellow-400">
                      Please enter a valid X post link.
                    </p>
                  )}
                </>
              )}

              {TEST_MODE && (
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#07110d]
                    p-5
                  "
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                    X Post
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Not required during database testing.
                  </p>
                </div>
              )}

              {error && (
                <div
                  className="
                    mt-4
                    rounded-2xl
                    border
                    border-red-400/20
                    bg-red-400/[0.05]
                    p-4
                    text-center
                    text-sm
                    text-red-300
                  "
                >
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={
                  saving ||
                  submitted ||
                  !walletLooksValid ||
                  !allTasksCompleted ||
                  (!TEST_MODE && !postRequirementPassed) ||
                  (!TEST_MODE && !shared)
                }
                className="
                  mt-4
                  w-full
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-emerald-500
                  px-6
                  py-4
                  text-sm
                  font-black
                  text-[#07110d]
                  transition-opacity
                  duration-300
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                {saving
                  ? "Submitting..."
                  : submitted
                    ? "Submitted ✓"
                    : TEST_MODE
                      ? "Test Database Submission"
                      : "Submit & Confirm Spot"}
              </button>

              {/* SUCCESS */}

              {submitted && (
                <div
                  className="
                    mt-6
                    rounded-3xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/[0.06]
                    p-6
                    text-center
                    sm:p-8
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-emerald-400/30
                      bg-emerald-400/[0.08]
                      text-2xl
                    "
                  >
                    ✓
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">
                    Blob Explorers
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    {TEST_MODE
                      ? "Database Submission Saved"
                      : "Spot Confirmed"}
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
                    🎉 Your submission has been received successfully.
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#07110d] p-4">

                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                      Submitted Wallet
                    </p>

                    <p className="mt-2 break-all font-mono text-xs text-gray-300">
                      {wallet}
                    </p>

                  </div>

                  {!TEST_MODE && (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-[#07110d] p-4">

                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                        X Post
                      </p>

                      <p className="mt-2 break-all text-xs text-gray-400">
                        {postLink}
                      </p>

                    </div>
                  )}

                  {TEST_MODE && (
                    <div className="mt-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.04] p-4">

                      <p className="text-xs uppercase tracking-[0.15em] text-yellow-400">
                        Test Mode
                      </p>

                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        No public X post was submitted.
                      </p>

                    </div>
                  )}

                </div>
              )}

            </div>
          )}

          {/* FINAL STATUS */}

          {finalComplete && (
            <div className="border-t border-white/10 px-6 py-5 sm:px-8 md:px-10">

              <div className="flex items-center justify-center gap-3 text-center">

                <span className="text-emerald-400">
                  ✓
                </span>

                <p className="text-sm font-bold text-emerald-400">
                  Your Blob Explorer spot is confirmed.
                </p>

              </div>

            </div>
          )}

        </div>

        {/* NOTE */}

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-gray-600">
          Your wallet address is entered manually. No wallet connection or
          transaction is required.
        </p>

      </div>
    </section>
  );
}