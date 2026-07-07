import Link from "next/link";
import type { Belt } from "@/data/belts";
import BeltBadge from "@/components/BeltBadge";

export default function BeltCard({ belt }: { belt: Belt }) {
  return (
    <Link
      href={`/belts/${belt.slug}`}
      className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <BeltBadge belt={belt} />
      <div className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          {belt.level === "dan" ? "유단자" : "급수"} · {belt.grade}
        </span>
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {belt.name}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {belt.summary}
        </span>
      </div>
    </Link>
  );
}
