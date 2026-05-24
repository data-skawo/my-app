# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Next.js 버전 주의사항

이 프로젝트는 **Next.js 16.2.6 + React 19**를 사용합니다. 학습 데이터와 API·컨벤션·파일 구조가 다를 수 있습니다. Next.js 관련 코드를 작성하기 전에 반드시 `node_modules/next/dist/docs/`를 먼저 참고하고, deprecation 경고를 따르세요.

## 명령어

```bash
npm run dev           # 개발 서버 시작 (localhost:3000)
npm run build         # 프로덕션 빌드
npm run start         # 프로덕션 서버 실행
npm run lint          # ESLint 검사
npm run format        # Prettier 자동 수정
npm run format:check  # Prettier 검사만 (수정 없음)
```

## 아키텍처

### 라우트 구조

Next.js App Router 기반이며, 두 개의 라우트 그룹으로 분리됩니다:

- **`app/(auth)/`** — 로그인·회원가입 페이지. 사이드바 없음. 좌측 브랜드 패널(데스크탑) + 우측 폼 영역의 2컬럼 레이아웃.
- **`app/(dashboard)/`** — 인증된 사용자 전용 페이지. `SidebarProvider` → `AppSidebar` + `SidebarInset` → `AppHeader` 구조.
- **`app/layout.tsx`** — 루트 레이아웃. `ThemeProvider`(다크모드), `TooltipProvider`, 전역 `Toaster`(sonner) 포함.

각 라우트 세그먼트에는 `loading.tsx`·`error.tsx` 파일이 함께 배치되어 있습니다.

> **⚠️ 라우트 그룹 경로 주의:** `(auth)`, `(dashboard)` 같은 그룹 폴더는 URL에 반영되지 않습니다. `/dashboard/users` 경로를 만들려면 `app/(dashboard)/users/page.tsx`가 아닌 **`app/(dashboard)/dashboard/users/page.tsx`** 에 파일을 생성해야 합니다.

### 컴포넌트 구조

```
components/
  ui/       # Shadcn/UI 원시 컴포넌트 — 직접 수정하지 말 것
  layout/   # 앱 전체 레이아웃 (AppSidebar, AppHeader, ThemeToggle, UserNav)
  common/   # 재사용 기능 컴포넌트 (DataTable, StatCard, PageHeader, EmptyState 등)
```

### 사이드바 내비게이션

내비게이션은 **데이터 주도** 방식입니다. `lib/constants.ts`의 `navGroups` 배열을 수정해서 메뉴를 추가·제거·순서 변경합니다. 타입은 `types/index.ts`의 `NavGroup` / `NavItem`을 참고하세요. 사이드바는 아이콘 전용 접힘 모드(`collapsible="icon"`)를 지원합니다.

### 스타일링

- **Tailwind CSS v4** — `tailwind.config.*` 파일 없음. `app/globals.css`에서 `@import "tailwindcss"` 방식 사용.
- **Shadcn/UI** — `shadcn` npm 패키지로 설치됨. `@import "shadcn/tailwind.css"`로 임포트.
- 디자인 토큰은 OKLCH CSS 변수로 정의. 색상 변경 시 `globals.css`의 `:root` / `.dark` 블록 수정.
- 폰트 변수: `--font-heading`(Playfair Display), `--font-sans`(Noto Sans), `--font-geist-mono`(Geist Mono).
- 조건부 클래스 병합은 항상 `lib/utils.ts`의 `cn()`(clsx + tailwind-merge) 사용.

### 폼 패턴

모든 폼은 **react-hook-form + zod** 조합을 사용합니다:
1. zod 스키마 정의 → `z.infer<typeof schema>`로 타입 추론.
2. `useForm({ resolver: zodResolver(schema) })`.
3. Shadcn `<Form>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormControl>`, `<FormMessage>` 컴포넌트 사용.
4. 결과 피드백은 sonner의 `toast.success()` / `toast.error()` 사용.

### 데이터 테이블

`components/common/DataTable`은 **TanStack Table v8**을 감싸며, 정렬·필터·페이지네이션·컬럼 토글이 내장되어 있습니다. `columns: ColumnDef<T>[]`와 `data: T[]`를 전달하고, `searchKey`를 지정하면 컬럼 필터링이 활성화됩니다.

> **⚠️ RSC 제약:** `DataTable`은 Client Component(`'use client'`)입니다. `cell` 렌더 함수가 포함된 `columns` 배열을 Server Component에서 props로 넘기면 `"Functions cannot be passed directly to Client Components"` 오류가 발생합니다. `columns`를 정의하는 페이지는 반드시 `'use client'`를 선언하거나, 별도의 Client Component 파일로 분리해야 합니다.

### 유틸리티 및 타입

- **`lib/format.ts`** — 날짜(`formatDate`, `formatDateTime`, `formatRelativeTime`)·숫자(`formatNumber`, `formatCurrency`, `formatPercent`, `formatBytes`) 포맷터. 모두 한국 로케일 기준.
- **`lib/constants.ts`** — `siteConfig`, `navGroups`, 페이지네이션 기본값(`DEFAULT_PAGE_SIZE`, `PAGE_SIZE_OPTIONS`).
- **`types/index.ts`** — 공유 타입: `ApiResponse<T>`, `ActionState<T>`, `PaginatedResponse<T>`, `NavGroup`, `StatCardData`, `DataTableSearchParams`.

### 경로 별칭

`@/`는 프로젝트 루트를 가리킵니다 (예: `@/components/ui/button`, `@/lib/utils`).

## 코드 스타일

- **임포트 순서** (ESLint 강제): builtin → external → internal(`@/`) → parent → sibling. 그룹 간 빈 줄 삽입. external 내에서 react·next가 먼저.
- 주석·커밋 메시지·문서는 **한국어**로 작성.
- 변수명·함수명은 **영어**.
- 들여쓰기 2칸.
