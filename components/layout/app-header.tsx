'use client'

import { usePathname } from 'next/navigation'

import { ThemeToggle } from '@/components/layout/theme-toggle'
import { UserNav } from '@/components/layout/user-nav'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

/** URL 세그먼트 → 한국어 레이블 매핑 테이블 */
const SEGMENT_LABELS: Record<string, string> = {
  dashboard: '대시보드',
  users: '사용자',
  analytics: '통계',
  settings: '설정',
  login: '로그인',
  register: '회원가입',
}

/** pathname을 분석해 브레드크럼 데이터 배열을 생성 */
function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  return segments.map((seg, idx) => ({
    // SEGMENT_LABELS에 없는 경우 URL 디코딩 후 하이픈을 공백으로 치환
    label: SEGMENT_LABELS[seg] ?? decodeURIComponent(seg).replace(/-/g, ' '),
    href: '/' + segments.slice(0, idx + 1).join('/'),
    isLast: idx === segments.length - 1,
  }))
}

/** 대시보드 상단 헤더 — 사이드바 트리거 + 브레드크럼 + 테마/유저 메뉴 */
export function AppHeader() {
  const pathname = usePathname()
  const crumbs = buildBreadcrumbs(pathname)

  // TODO: 실제 세션 데이터로 교체하세요.
  // 예) NextAuth.js: const { data: session } = useSession()
  //     Lucia / 자체 JWT: useContext(AuthContext) 또는 Server Component에서 props로 전달
  const mockUser = { name: '홍길동', email: 'user@example.com' }

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      {/* 사이드바 토글 버튼 */}
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />

      {/* 경로 브레드크럼 */}
      <Breadcrumb className="flex-1">
        <BreadcrumbList>
          {crumbs.map((crumb, idx) => (
            <BreadcrumbItem key={crumb.href}>
              {crumb.isLast ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                  {idx < crumbs.length - 1 && <BreadcrumbSeparator />}
                </>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* 우측 액션 영역 */}
      <div className="ml-auto flex items-center gap-1">
        <ThemeToggle />
        <UserNav user={mockUser} />
      </div>
    </header>
  )
}
