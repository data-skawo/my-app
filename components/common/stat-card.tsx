import { TrendingDown, TrendingUp } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { StatCardData, WithClassName } from '@/types'

interface StatCardProps extends StatCardData, WithClassName {}

/**
 * 통계 수치를 표시하는 카드 컴포넌트 (Card 기반)
 * @example
 * <StatCard
 *   title="총 사용자"
 *   value="1,234"
 *   trend={{ value: 12.5, isPositive: true }}
 *   description="지난 달 대비"
 *   icon={Users}
 * />
 */
export function StatCard({ title, value, description, trend, icon: Icon, className }: StatCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="text-muted-foreground h-4 w-4" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1 flex items-center gap-1.5">
          {trend && (
            <span
              className={cn(
                'flex items-center gap-0.5 text-xs font-medium',
                trend.isPositive ? 'text-emerald-500' : 'text-red-500'
              )}
            >
              {trend.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {trend.isPositive ? '+' : ''}
              {trend.value}%
            </span>
          )}
          {description && <p className="text-muted-foreground text-xs">{description}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
