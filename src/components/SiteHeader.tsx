import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          🥋 태권도의 모든 것
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/history"
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            역사
          </Link>
          <Link
            href="/belts"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            띠 정보
          </Link>
        </nav>
      </div>
    </header>
  );
}
