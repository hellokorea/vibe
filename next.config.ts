import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 호스팅을 위한 Next.js 설정
  output: "export",
  // GitHub Pages 프로젝트 사이트(hellokorea.github.io/vibe)용 경로 설정
  basePath: "/vibe",
  trailingSlash: true,
};

export default nextConfig;
