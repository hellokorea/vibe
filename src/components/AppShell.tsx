import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex shrink-0 items-center justify-center border-b border-zinc-200 bg-white/90 py-3.5 backdrop-blur dark:border-zinc-800 dark:bg-black/90 sm:hidden">
          <span className="text-base font-bold text-zinc-900 dark:text-zinc-50">
            🥋 태권도의 모든 것
          </span>
        </header>
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
      </div>
      <BottomNav className="fixed inset-x-0 bottom-0 z-10 sm:hidden" />
    </div>
  );
}
