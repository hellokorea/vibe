# 0001. Next.js 16 + TypeScript로 프론트엔드/백엔드 통합 스택 선택

Status: Accepted

## Context

1인 개발로 부업 서비스를 빠르게 만들고 배포까지 가야 한다. 프론트엔드와 백엔드를 따로 관리할 인력/시간이 없어, 별도 API 서버 없이 하나의 코드베이스로 UI와 서버 로직(라우트 핸들러 등)을 함께 다룰 수 있어야 한다.

## Decision

Next.js 16(App Router) + TypeScript를 기본 스택으로 채택한다. 스타일링은 Tailwind CSS, 패키지 매니저는 npm을 사용한다.

## Consequences

- 프론트/백엔드 배포 파이프라인이 하나로 통합되어 운영 부담이 줄어든다.
- Vercel 등 Next.js 친화적 호스팅에 바로 배포 가능해, 인프라를 직접 구성할 필요가 없다.
- 반대로 백엔드 로직이 복잡해지거나 별도 서비스로 분리해야 할 시점이 오면, Next.js의 API Route 구조를 벗어나는 마이그레이션 비용이 발생한다.
- TypeScript 도입으로 런타임 오류는 줄지만, 1인 개발 초기 속도는 순수 JS보다 약간 느려질 수 있다.
