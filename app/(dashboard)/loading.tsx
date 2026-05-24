import { StatCardSkeleton, TableSkeleton } from '@/components/common/loading-spinner'
import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* 페이지 헤더 스켈레톤 */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-60" />
        </div>
        <Skeleton className="h-9 w-24" />
      </div>

      {/* 통계 카드 스켈레톤 */}
      <StatCardSkeleton />

      {/* 테이블 스켈레톤 */}
      <TableSkeleton rows={6} cols={5} />
    </div>
  )
}
