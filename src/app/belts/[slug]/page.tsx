import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { belts, getBeltBySlug, getAdjacentBelts } from "@/data/belts";
import BeltBadge from "@/components/BeltBadge";

export function generateStaticParams() {
  return belts.map((belt) => ({ slug: belt.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const belt = getBeltBySlug(slug);
  return {
    title: belt ? `${belt.name} | 태권도의 모든 것` : "띠 정보",
    description: belt?.summary,
  };
}

export default async function BeltDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const belt = getBeltBySlug(slug);

  if (!belt) {
    notFound();
  }

  const { prev, next } = getAdjacentBelts(belt.order);

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-6 sm:px-8 sm:py-10">
      <Link
        href="/belts"
        className="mb-6 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← 띠 목록으로
      </Link>

      <div className="flex items-center gap-4">
        <BeltBadge belt={belt} size="lg" />
        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            {belt.level === "dan" ? "유단자" : "급수"} · {belt.grade}
          </span>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {belt.name}
          </h1>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {belt.summary}
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          승급 조건 (참고용)
        </h2>
        <ul className="flex flex-col gap-2">
          {belt.requirements.map((req) => (
            <li
              key={req}
              className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-1 text-emerald-500">✓</span>
              {req}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-zinc-400">
          일반적인 커리큘럼 기준 예시이며, 실제 조건은 도장/단체마다 다를 수 있어요.
        </p>
      </div>

      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        다음 단계까지 평균 약 {belt.minMonths}개월
      </p>

      <div className="mt-10 flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/belts/${prev.slug}`}
            className="flex-1 rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/belts/${next.slug}`}
            className="flex-1 rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {next.name} →
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </main>
  );
}
