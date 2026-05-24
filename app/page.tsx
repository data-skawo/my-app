import { ArrowRight, BarChart3, Code2, Layers, Palette, Zap } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/constants'

const features = [
  {
    icon: Zap,
    title: 'Next.js v16',
    description: 'App Router, Server Actions, Streaming 등 최신 기능 완벽 지원',
  },
  {
    icon: Palette,
    title: 'Shadcn/UI + TailwindCSS',
    description: '접근성 높은 Radix 기반 컴포넌트와 유틸리티 CSS의 조합',
  },
  {
    icon: Layers,
    title: '계층화된 컴포넌트',
    description: 'ui → common → layout 3계층 설계로 재사용성과 유지보수성 극대화',
  },
  {
    icon: Code2,
    title: 'TypeScript + Zod',
    description: '엄격한 타입 안전성과 런타임 유효성 검사로 버그 사전 방지',
  },
  {
    icon: BarChart3,
    title: 'TanStack Table',
    description: '정렬·필터·페이지네이션이 내장된 고성능 데이터 테이블',
  },
  {
    icon: ArrowRight,
    title: 'DX 최적화',
    description: 'ESLint + Prettier + Path Alias로 일관된 코드 스타일 강제',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-semibold">{siteConfig.name}</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/login">로그인</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/dashboard">대시보드</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        <Badge variant="secondary" className="text-xs">
          Next.js v16 · TypeScript · TailwindCSS v4
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          모던 웹 스타터킷으로{' '}
          <span className="text-primary">빠르게 시작</span>하세요
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard">
              대시보드 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">로그인 페이지</Link>
          </Button>
        </div>

        {/* 기능 카드 */}
        <div className="mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardHeader className="pb-2">
                <feature.icon className="text-primary mb-1 h-5 w-5" />
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t py-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 {siteConfig.name} — Built with Next.js, Shadcn/UI, TailwindCSS
        </p>
      </footer>
    </div>
  )
}
