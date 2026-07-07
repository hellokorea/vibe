import type { Belt } from "@/data/belts";

export default function BeltBadge({
  belt,
  size = "md",
}: {
  belt: Belt;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses =
    size === "lg"
      ? "h-20 w-20 text-sm"
      : size === "sm"
        ? "h-10 w-10 text-[10px]"
        : "h-14 w-14 text-xs";

  return (
    <div
      className={`flex ${sizeClasses} shrink-0 items-center justify-center rounded-full font-bold shadow-sm ${belt.color} ${belt.textColor}`}
    >
      {belt.grade}
    </div>
  );
}
