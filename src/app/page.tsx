import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <span className="text-5xl">🥋</span>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        태권도의 모든 것
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        띠와 단, 승급까지 걸리는 시간과 조건을 한눈에. 흰띠부터 검은띠까지,
        태권도 여정을 캐주얼하게 정리했어요.
      </p>
      <Link
        href="/belts"
        className="rounded-full bg-zinc-900 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        띠 정보 보러가기
      </Link>
    </main>
  );
}
