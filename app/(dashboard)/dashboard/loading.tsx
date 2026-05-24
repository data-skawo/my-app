import { StatCardSkeleton, TableSkeleton } from '@/components/common/loading-spinner'
import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-60" />
        </div>
        <Skeleton className="h-9 w-28" />
      </div>
      <StatCardSkeleton />
      <TableSkeleton rows={7} cols={5} />
    </div>
  )
}
