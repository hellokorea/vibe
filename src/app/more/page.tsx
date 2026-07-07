import Link from "next/link";
import type { Metadata } from "next";
import { moreCategories } from "@/data/nav";

export const metadata: Metadata = {
  title: "더보기 | 태권도의 모든 것",
};

export default function MorePage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-3 px-5 py-6 sm:px-8 sm:py-10">
      <h1 className="mb-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        더보기
      </h1>

      {moreCategories.map((category) => (
        <details
          key={category.title}
          open
          className="group rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-zinc-900 dark:text-zinc-50">
            {category.title}
            <span className="text-zinc-400 transition group-open:rotate-180">
              ⌄
            </span>
          </summary>
          <ul className="mt-3 flex flex-col gap-1">
            {category.items.map((item) =>
              item.href ? (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-zinc-400 dark:text-zinc-600"
                >
                  {item.label}
                  <span className="text-xs">준비중</span>
                </li>
              )
            )}
          </ul>
        </details>
      ))}
    </main>
  );
}
