"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/data/nav";

export default function BottomNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={`flex shrink-0 border-t border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95 ${className}`}
    >
      {tabs.map((tab) => {
        const active =
          tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${
              active
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-400 dark:text-zinc-600"
            }`}
          >
            <span className="text-xl leading-none">{tab.icon}</span>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
