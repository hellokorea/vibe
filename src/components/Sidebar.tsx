"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/data/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-zinc-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-black sm:flex">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 px-2 text-lg font-bold text-zinc-900 dark:text-zinc-50"
      >
        🥋 태권도의 모든 것
      </Link>
      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
