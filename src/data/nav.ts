export type Tab = {
  href: string;
  label: string;
  icon: string;
};

// 하단 탭바 고정 항목. 새 핵심 기능이 생기면 여기 추가 (4~5개 이내 권장, 그 이상은 더보기로).
export const tabs: Tab[] = [
  { href: "/", label: "홈", icon: "🏠" },
  { href: "/belts", label: "띠 정보", icon: "🥋" },
  { href: "/history", label: "역사", icon: "📜" },
  { href: "/more", label: "더보기", icon: "☰" },
];

export type MoreItem = {
  label: string;
  href?: string; // 없으면 "준비중"으로 표시
};

export type MoreCategory = {
  title: string;
  items: MoreItem[];
};

// "더보기" 페이지의 카테고리별 아코디언 데이터.
// 새 기능은 카테고리에 항목만 추가하거나, 새 카테고리를 배열에 추가하면 됨 (UI 변경 불필요).
export const moreCategories: MoreCategory[] = [
  {
    title: "정보",
    items: [
      { label: "띠 정보", href: "/belts" },
      { label: "태권도 역사", href: "/history" },
    ],
  },
  {
    title: "도장 찾기",
    items: [{ label: "전국 태권도장 연결" }],
  },
  {
    title: "커뮤니티",
    items: [{ label: "게시판" }, { label: "질문답변" }],
  },
];
