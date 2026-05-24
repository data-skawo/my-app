import Link from 'next/link'

import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  /** 'sm': 모바일용 소형, 'md': 데스크탑용 기본 */
  size?: 'sm' | 'md'
  className?: string
}

/** 인증 레이아웃에서 사용하는 브랜드 로고 — 크기별로 분기 */
function BrandLogo({ size = 'md', className }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'h-7 w-7 text-sm' : 'h-8 w-8'
  return (
    <Link href="/" className={cn('flex items-center gap-2 font-semibold', className)}>
      <div
        className={cn(
          'bg-primary text-primary-foreground flex items-center justify-center rounded-lg font-bold',
          iconSize
        )}
      >
        {siteConfig.name[0]}
      </div>
      {siteConfig.name}
    </Link>
  )
}

/** 인증 페이지 전용 레이아웃 — 중앙 정렬, 로고 포함 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* 좌측 브랜드 패널 (데스크탑) */}
      <div className="bg-muted hidden flex-col items-start justify-between p-10 lg:flex">
        <BrandLogo size="md" />
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
        <BrandLogo size="sm" className="mb-8 lg:hidden" />
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
