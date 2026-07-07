import Link from "next/link";

const features = [
  {
    href: "/belts",
    icon: "🥋",
    title: "띠 정보",
    desc: "흰띠부터 검은띠까지 승급 조건을 확인하세요",
  },
  {
    href: "/history",
    icon: "📜",
    title: "태권도 역사",
    desc: "국기원 자료로 보는 태권도의 발자취",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-col items-center gap-3 pt-4 text-center sm:items-start sm:pt-0 sm:text-left">
        <span className="text-5xl">🥋</span>
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
          태권도의 모든 것
        </h1>
        <p className="text-sm leading-6 text-zinc-500 sm:text-base dark:text-zinc-400">
          띠와 단, 승급 조건과 역사까지 캐주얼하게 정리했어요
        </p>
      </div>

      <div className="rounded-2xl bg-emerald-500 p-6 text-white shadow-sm">
        <p className="text-sm font-medium text-emerald-50">
          내 실력은 어디쯤일까?
        </p>
        <h2 className="mt-1 text-xl font-bold">지금 내 띠 확인하러 가기 🥋</h2>
        <Link
          href="/belts"
          className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
        >
          띠 정보 보기
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition active:scale-[0.98] sm:hover:-translate-y-0.5 sm:hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-3xl">{f.icon}</span>
            <div className="flex flex-col">
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                {f.title}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {f.desc}
              </span>
            </div>
            <span className="ml-auto text-zinc-300">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
