export type Belt = {
  slug: string;
  order: number;
  grade: string;
  name: string;
  level: "kup" | "dan";
  color: string;
  textColor: string;
  minMonths: number;
  summary: string;
  requirements: string[];
};

export const belts: Belt[] = [
  {
    slug: "white",
    order: 1,
    grade: "10급",
    name: "흰띠",
    level: "kup",
    color: "bg-white border border-zinc-300",
    textColor: "text-zinc-700",
    minMonths: 2,
    summary: "태권도를 처음 시작하는 단계. 기본자세와 예절을 익힌다.",
    requirements: ["기본 서기·주먹 지르기", "품새: 태극 1장 기초 동작", "도장 예절 및 용어 숙지"],
  },
  {
    slug: "yellow-stripe",
    order: 2,
    grade: "9급",
    name: "노란띠 (흰띠 줄)",
    level: "kup",
    color: "bg-yellow-300",
    textColor: "text-yellow-950",
    minMonths: 2,
    summary: "기본 발차기를 배우기 시작하는 단계.",
    requirements: ["앞차기, 옆차기 기초", "품새: 태극 1장", "겨루기 기본 거리 감각"],
  },
  {
    slug: "yellow",
    order: 3,
    grade: "8급",
    name: "노란띠",
    level: "kup",
    color: "bg-yellow-400",
    textColor: "text-yellow-950",
    minMonths: 2,
    summary: "품새 동작이 정교해지고 기본 겨루기를 시작한다.",
    requirements: ["품새: 태극 2장", "발차기 콤비네이션", "기본 겨루기 1회전"],
  },
  {
    slug: "green-stripe",
    order: 4,
    grade: "7급",
    name: "초록띠 (노란띠 줄)",
    level: "kup",
    color: "bg-green-400",
    textColor: "text-green-950",
    minMonths: 3,
    summary: "체력과 균형감각이 요구되는 동작이 늘어난다.",
    requirements: ["품새: 태극 3장", "돌려차기 기초", "낙법 기초"],
  },
  {
    slug: "green",
    order: 5,
    grade: "6급",
    name: "초록띠",
    level: "kup",
    color: "bg-green-500",
    textColor: "text-white",
    minMonths: 3,
    summary: "품새의 완성도와 파워를 함께 평가받는 단계.",
    requirements: ["품새: 태극 4장", "격파 기초(송판)", "겨루기 2회전"],
  },
  {
    slug: "blue-stripe",
    order: 6,
    grade: "5급",
    name: "파란띠 (초록띠 줄)",
    level: "kup",
    color: "bg-blue-400",
    textColor: "text-white",
    minMonths: 3,
    summary: "고급 발차기 콤비네이션을 연습한다.",
    requirements: ["품새: 태극 5장", "540도 발차기 기초", "겨루기 전술 이해"],
  },
  {
    slug: "blue",
    order: 7,
    grade: "4급",
    name: "파란띠",
    level: "kup",
    color: "bg-blue-600",
    textColor: "text-white",
    minMonths: 3,
    summary: "실전 겨루기 비중이 늘어나는 단계.",
    requirements: ["품새: 태극 6장", "겨루기 3회전", "체력 테스트"],
  },
  {
    slug: "red-stripe",
    order: 8,
    grade: "3급",
    name: "빨간띠 (파란띠 줄)",
    level: "kup",
    color: "bg-red-500",
    textColor: "text-white",
    minMonths: 4,
    summary: "품새 8장을 준비하며 유단자 심사를 대비한다.",
    requirements: ["품새: 태극 7장", "고급 격파", "심판 규정 기초 이해"],
  },
  {
    slug: "red",
    order: 9,
    grade: "2급",
    name: "빨간띠",
    level: "kup",
    color: "bg-red-600",
    textColor: "text-white",
    minMonths: 4,
    summary: "품새 8장을 완성하고 검은띠 심사를 준비한다.",
    requirements: ["품새: 태극 8장", "겨루기 실전 평가", "품새 전체 복습"],
  },
  {
    slug: "red-black",
    order: 10,
    grade: "1급",
    name: "빨간띠 (검은띠 줄)",
    level: "kup",
    color: "bg-red-700",
    textColor: "text-white",
    minMonths: 6,
    summary: "검은띠 승단 심사 직전 단계. 태극 품새 전체를 완성한다.",
    requirements: ["태극 1~8장 전체 시연", "격파 심화", "면접(태권도 정신·역사)"],
  },
  {
    slug: "black-1dan",
    order: 11,
    grade: "1단",
    name: "검은띠 1단",
    level: "dan",
    color: "bg-black",
    textColor: "text-white",
    minMonths: 12,
    summary: "유단자의 시작. 고려 품새를 시작으로 지도자의 기초를 다진다.",
    requirements: ["품새: 고려", "겨루기 유단자 평가", "체력·정신력 종합 심사"],
  },
  {
    slug: "black-2dan",
    order: 12,
    grade: "2단",
    name: "검은띠 2단",
    level: "dan",
    color: "bg-black",
    textColor: "text-white",
    minMonths: 18,
    summary: "품새의 완성도를 높이고 후배 지도 역할을 시작한다.",
    requirements: ["품새: 금강", "겨루기 심화 평가", "지도 실습"],
  },
  {
    slug: "black-3dan",
    order: 13,
    grade: "3단",
    name: "검은띠 3단",
    level: "dan",
    color: "bg-black",
    textColor: "text-white",
    minMonths: 24,
    summary: "사범 자격을 준비하는 단계.",
    requirements: ["품새: 태백", "관 운영/지도 이론", "종합 심사"],
  },
];

export function getBeltBySlug(slug: string): Belt | undefined {
  return belts.find((belt) => belt.slug === slug);
}

export function getAdjacentBelts(order: number): { prev?: Belt; next?: Belt } {
  return {
    prev: belts.find((belt) => belt.order === order - 1),
    next: belts.find((belt) => belt.order === order + 1),
  };
}
