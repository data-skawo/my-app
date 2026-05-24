import {
  BarChart3,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react'

import type { NavGroup } from '@/types'

// ─────────────────────────────────────────
// 사이트 설정
// ─────────────────────────────────────────

export const siteConfig = {
  name: 'My App',
  description: '모던 웹 스타터킷 — Next.js v16 + Shadcn/UI',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  links: {
    github: 'https://github.com',
  },
} as const

// ─────────────────────────────────────────
// 사이드바 내비게이션
// ─────────────────────────────────────────

export const navGroups: NavGroup[] = [
  {
    items: [
      {
        title: '홈',
        href: '/',
        icon: Home,
      },
      {
        title: '대시보드',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: '관리',
    items: [
      {
        title: '사용자',
        href: '/dashboard/users',
        icon: Users,
      },
      {
        title: '통계',
        href: '/dashboard/analytics',
        icon: BarChart3,
      },
    ],
  },
  {
    title: '설정',
    items: [
      {
        title: '설정',
        href: '/dashboard/settings',
        icon: Settings,
      },
    ],
  },
]

// ─────────────────────────────────────────
// 페이지네이션 기본값
// ─────────────────────────────────────────

export const DEFAULT_PAGE_SIZE = 10
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]
