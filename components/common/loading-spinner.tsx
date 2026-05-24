import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { WithClassName } from '@/types'

interface LoadingSpinnerProps extends WithClassName {
  /** 스켈레톤 행 수 */
  rows?: number
}

/** 일반 목록/콘텐츠 로딩용 스켈레톤 */
export function LoadingSpinner({ rows = 5, className }: LoadingSpinnerProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-md" />
      ))}
    </div>
  )
}

/** 대시보드 통계 카드 4개용 스켈레톤 */
export function StatCardSkeleton({ className }: WithClassName) {
  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-xl border p-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4 rounded" />
          </div>
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      ))}
    </div>
  )
}

/** 테이블 로딩용 스켈레톤 */
export function TableSkeleton({ rows = 5, cols = 4, className }: LoadingSpinnerProps & { cols?: number }) {
  return (
    <div className={cn('rounded-lg border', className)}>
      {/* 헤더 */}
      <div className="flex gap-4 border-b p-4">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* 바디 */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 border-b p-4 last:border-0">
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  )
}
