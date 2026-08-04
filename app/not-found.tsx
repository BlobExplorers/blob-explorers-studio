import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
          Error 404
        </p>

        <h1 className="mt-6 text-6xl font-black text-white">
          Explorer Not Found
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          The path you're looking for doesn't exist in the BlobVerse.
          Return to the known worlds and continue your adventure.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 font-bold text-black transition hover:-translate-y-1"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}