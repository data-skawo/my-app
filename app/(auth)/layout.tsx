import Link from 'next/link'

import { siteConfig } from '@/lib/constants'

/** 인증 페이지 전용 레이아웃 — 중앙 정렬, 로고 포함 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* 좌측 브랜드 패널 (데스크탑) */}
      <div className="bg-muted hidden flex-col items-start justify-between p-10 lg:flex">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg font-bold">
            {siteConfig.name[0]}
          </div>
          {siteConfig.name}
        </Link>
        <blockquote className="space-y-2">
          <p className="text-lg italic">
            &ldquo;빠르고 안정적인 스타터킷으로 개발 생산성을 높이세요.&rdquo;
          </p>
          <footer className="text-muted-foreground text-sm">— {siteConfig.name} Team</footer>
        </blockquote>
      </div>

      {/* 우측 폼 영역 */}
      <div className="flex flex-col items-center justify-center p-6">
        {/* 모바일 로고 */}
        <Link href="/" className="mb-8 flex items-center gap-2 font-semibold lg:hidden">
          <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold">
            {siteConfig.name[0]}
          </div>
          {siteConfig.name}
        </Link>
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
