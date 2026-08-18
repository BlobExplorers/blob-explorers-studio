"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { supabase } from "@/lib/supabase";

/*
  =========================================================
  TEMPORARY DATABASE TEST MODE
  =========================================================

  true  = Real X post is NOT required.
  false = Normal live X-post requirement is enabled.

  IMPORTANT:
  Set this back to false before the real public launch.
*/
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

  /*
    In TEST_MODE:
    - shared is not required
    - post link is not required
  */
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

    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}`;

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

    /*
      Only require X sharing in live mode.
    */
    if (!TEST_MODE && !shared) {
      setError("Please share your Explorer on X first.");
      return;
    }

    /*
      Only require X post URL in live mode.
    */
    if (!TEST_MODE && !postLinkLooksValid) {
      setError("Please enter a valid X post link.");
      return;
    }

    if (saving) return;

    try {
      setSaving(true);

      /*
        In TEST_MODE we store NULL for x_post_url.
        This avoids inserting a fake X URL.

        IMPORTANT:
        The x_post_url column must allow NULL.
      */
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

          {/* STEP 03 */}

          {canShowExplorerCard && (
            <div className="border-t border-white/10 p-6 sm:p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Step 03
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Your Explorer Card
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your community tasks are complete. Your Explorer card is now
                ready to share.
              </p>

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-3xl
                  border
                  border-yellow-400/20
                  bg-[#07110d]
                "
              >
                <div className="p-7 text-center sm:p-9">

                  <div
                    className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-yellow-400/30
                      bg-yellow-400/[0.06]
                      text-2xl
                    "
                  >
                    🌍
                  </div>

                  <p
                    className="
                      mt-5
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-yellow-400
                    "
                  >
                    Blob Explorers
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Explorer Spot
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
                    Your Explorer card is ready to share with the BlobVerse
                    community.
                  </p>

                  <div
                    className="
                      mt-6
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-4
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                      Wallet
                    </p>

                    <p className="mt-2 break-all font-mono text-xs text-gray-300">
                      {wallet}
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

              {/* FINAL SUCCESS */}

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
                <span className="text-emerald-400">✓</span>

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