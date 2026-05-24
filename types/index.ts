// ─────────────────────────────────────────
// 공통 유틸리티 타입
// ─────────────────────────────────────────

/** 자식 컴포넌트를 받는 공통 Props */
export interface WithChildren {
  children: React.ReactNode
}

/** className을 받는 공통 Props */
export interface WithClassName {
  className?: string
}

/** 페이지네이션 파라미터 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/** 페이지네이션된 응답 */
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/** API 공통 응답 래퍼 */
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/** Server Action 상태 */
export interface ActionState<T = unknown> {
  success?: boolean
  message?: string
  data?: T
  errors?: Record<string, string[]>
}

// ─────────────────────────────────────────
// 내비게이션 타입
// ─────────────────────────────────────────

export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string | number
  disabled?: boolean
  external?: boolean
  children?: NavItem[]
}

export interface NavGroup {
  title?: string
  items: NavItem[]
}

// ─────────────────────────────────────────
// 통계 카드 타입
// ─────────────────────────────────────────

export interface StatCardData {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  icon?: React.ComponentType<{ className?: string }>
}

// ─────────────────────────────────────────
// 데이터 테이블 타입
// ─────────────────────────────────────────

export interface DataTableSearchParams {
  query?: string
  sort?: string
  order?: 'asc' | 'desc'
  page?: string
  pageSize?: string
}
