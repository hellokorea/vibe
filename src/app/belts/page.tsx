import type { Metadata } from "next";
import { belts } from "@/data/belts";
import BeltCard from "@/components/BeltCard";

export const metadata: Metadata = {
  title: "띠 정보 | 태권도의 모든 것",
  description: "흰띠부터 검은띠까지, 태권도 급수와 단 정보를 모아봤어요.",
};

export default function BeltsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          띠 정보
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          낮은 급수부터 순서대로 정리했어요. 카드를 눌러 승급 조건을 확인하세요.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {belts.map((belt) => (
          <BeltCard key={belt.slug} belt={belt} />
        ))}
      </div>
    </main>
  );
}
