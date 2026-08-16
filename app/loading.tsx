export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07110d]">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-emerald-400" />

        <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-emerald-400">
          EXPLORING
        </p>
      </div>
    </main>
  );
}