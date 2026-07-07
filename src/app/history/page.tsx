import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "태권도 역사 | 태권도의 모든 것",
  description: "국기원 공식 자료를 바탕으로 정리한 태권도의 역사.",
};

const timeline = [
  {
    year: "20세기 초",
    title: "형성 배경",
    body: "일제강점기, 만주 지역의 중국무술과 오키나와테가 국내에 도입되었고, 한국 고유의 전통무예 택견의 발차기 기술이 결부되며 현대 태권도의 토대가 만들어졌다.",
  },
  {
    year: "1944~1946",
    title: "5대관(기간도장) 설립",
    body: "광복 전후로 청도관(1944)을 시작으로 송무관, 무덕관, 조선연무관 권법부, YMCA 권법부 등 5개 도장이 설립되었다. 이 5대관이 현대 태권도의 근간이 되었다.",
  },
  {
    year: "1963",
    title: "전국체전 정식종목",
    body: "태권도 겨루기가 전국체육대회의 정식 종목으로 채택되며 국내 스포츠로 자리잡기 시작했다.",
  },
  {
    year: "1971~1972",
    title: "국기원 설립",
    body: "1971년 착공, 1972년 준공된 국기원은 이후 단증 발급을 전담하고 품새·기술·경기 규칙을 총괄하는 태권도 중앙도장이 되었다.",
  },
  {
    year: "1986",
    title: "서울 아시안게임 정식종목",
  body: "아시안게임 정식 종목으로 채택되며 국제 스포츠 무대 진출이 본격화됐다.",
  },
  {
    year: "1988",
    title: "서울 올림픽 시범종목",
    body: "서울 올림픽에서 시범 종목으로 채택되어 전 세계에 태권도를 알리는 계기가 됐다.",
  },
  {
    year: "1994",
    title: "올림픽 정식종목 확정",
    body: "IOC 총회에서 시드니 올림픽(2000년)부터 정식 종목으로 채택이 확정됐다.",
  },
  {
    year: "2000년대",
    title: "국기(國技) 법제화 및 세계화",
    body: "법적으로 대한민국의 국기(國技)로 확정되었고, 세계 각국의 공교육 과정에 태권도가 도입되는 등 세계화가 가속됐다.",
  },
];

export default function HistoryPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        태권도 역사
      </h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        국기원 공식 자료를 바탕으로 정리했어요.
      </p>

      <ol className="mt-10 flex flex-col gap-6 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
        {timeline.map((item) => (
          <li key={item.year} className="relative">
            <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-50" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {item.year}
            </span>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-xs text-zinc-400">
        출처:{" "}
        <a
          href="https://www.kukkiwon.or.kr/base/contents/view?contentsNo=51&menuLevel=2&menuNo=64"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          국기원 공식 홈페이지
        </a>
      </p>
    </main>
  );
}
