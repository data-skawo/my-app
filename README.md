# 모던 웹 스타터킷

Next.js v16 App Router 기반의 프로덕션 수준 스타터킷입니다.

## 기술 스택

| 카테고리 | 기술 |
|----------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript 5 |
| 스타일링 | TailwindCSS v4 |
| UI 컴포넌트 | Shadcn/UI v4 (radix-sera) |
| 아이콘 | Lucide React |
| 폼 관리 | React Hook Form v7 + Zod v4 |
| 데이터 테이블 | TanStack Table v8 |
| 테마 | next-themes (다크/라이트/시스템) |
| 토스트 | Sonner |
| 애니메이션 | Framer Motion |
| 날짜 처리 | date-fns |

## 프로젝트 구조

```
app/
├── (auth)/                   # 인증 레이아웃 그룹
│   ├── layout.tsx            # 2컬럼 인증 레이아웃
│   ├── login/page.tsx        # 로그인 폼
│   └── register/page.tsx     # 회원가입 폼
├── (dashboard)/              # 대시보드 레이아웃 그룹
│   ├── layout.tsx            # 사이드바 + 헤더 레이아웃
│   └── dashboard/
│       ├── page.tsx          # 대시보드 홈
│       ├── loading.tsx       # 스켈레톤 로딩
│       └── error.tsx         # 에러 경계 (unstable_retry)
├── layout.tsx                # 루트 레이아웃 (ThemeProvider, Toaster)
├── page.tsx                  # 랜딩 페이지
├── not-found.tsx             # 404 페이지
└── global-error.tsx          # 전역 에러 경계

components/
├── ui/                       # Shadcn/UI 기본 컴포넌트 (수정 금지)
├── layout/                   # 구조형 컴포넌트
│   ├── app-sidebar.tsx       # 사이드바 (아이콘 모드 지원)
│   ├── app-header.tsx        # 헤더 (브레드크럼, 테마, 유저)
│   ├── theme-toggle.tsx      # 테마 토글
│   └── user-nav.tsx          # 유저 드롭다운 메뉴
└── common/                   # 조합형 재사용 컴포넌트
    ├── page-header.tsx       # 페이지 제목+설명+액션
    ├── stat-card.tsx         # 통계 카드
    ├── data-table.tsx        # 데이터 테이블 (TanStack Table)
    ├── data-list.tsx         # 범용 리스트
    ├── empty-state.tsx       # 빈 상태 UI
    └── loading-spinner.tsx   # 스켈레톤 로딩

lib/
├── utils.ts                  # cn() 유틸리티
├── constants.ts              # 사이트 설정, 내비게이션 항목
└── format.ts                 # 숫자/날짜/통화 포맷팅 (date-fns)

hooks/
├── use-mobile.ts             # 모바일 감지 (matchMedia)
└── use-debounce.ts           # 디바운스

types/
└── index.ts                  # 공통 TypeScript 타입

actions/
└── example.ts                # Server Action 예제 ('use server')
```

## 시작하기

```bash
# 환경변수 설정
cp .env.example .env.local

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 스크립트

```bash
npm run dev           # 개발 서버
npm run build         # 프로덕션 빌드
npm run start         # 프로덕션 서버
npm run lint          # ESLint 검사
npm run format        # Prettier 포맷 적용
npm run format:check  # Prettier 포맷 확인
```

## 컴포넌트 계층 원칙

```
ui/      Shadcn 기본 — 직접 수정하지 않음
  ↓
common/  Shadcn 조합 — 재사용 가능한 비즈니스 컴포넌트
  ↓
layout/  구조형 — 페이지 레이아웃 담당
  ↓
page     페이지에서 common/layout 컴포넌트를 조합해 사용
```

## 주요 패턴

### 폼 (react-hook-form + zod)
```tsx
const schema = z.object({ email: z.string().email() })
const form = useForm({ resolver: zodResolver(schema) })
```

### Server Action
```ts
'use server'
export async function createItem(_prev: ActionState, formData: FormData): Promise<ActionState> {
  revalidatePath('/dashboard')
  return { success: true, message: '저장되었습니다.' }
}
```

### 토스트
```ts
import { toast } from 'sonner'
toast.success('저장되었습니다!')
toast.error('오류가 발생했습니다.')
```

### 포맷팅 유틸리티
```ts
import { formatDate, formatCurrency, formatNumber } from '@/lib/format'
formatDate('2025-01-01')    // '2025년 1월 1일'
formatCurrency(50000)       // '₩50,000'
formatNumber(1234567)       // '1,234,567'
```
