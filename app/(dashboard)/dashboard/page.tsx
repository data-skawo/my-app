import { BarChart3, ShoppingCart, TrendingUp, Users } from 'lucide-react'

import { DataTable } from '@/components/common/data-table'
import { PageHeader } from '@/components/common/page-header'
import { StatCard } from '@/components/common/stat-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// columns와 orders는 Client Component 파일에 정의 (RSC → Client Component 함수 전달 제약 해결)
import { columns, orders } from './columns'

const stats = [
  {
    title: '총 수익',
    value: '₩12,345,000',
    description: '지난 달 대비',
    trend: { value: 20.1, isPositive: true },
    icon: TrendingUp,
  },
  {
    title: '신규 사용자',
    value: '+2,350',
    description: '지난 달 대비',
    trend: { value: 180.1, isPositive: true },
    icon: Users,
  },
  {
    title: '총 주문',
    value: '+12,234',
    description: '지난 달 대비',
    trend: { value: 19, isPositive: true },
    icon: ShoppingCart,
  },
  {
    title: '활성 사용자',
    value: '+573',
    description: '지난 시간 대비',
    trend: { value: 2.1, isPositive: false },
    icon: BarChart3,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="대시보드"
        description="전체 현황을 한눈에 확인하세요."
        action={<Button size="sm">보고서 내보내기</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
          <CardDescription>최근 7건의 주문 내역입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={orders}
            searchKey="customer"
            searchPlaceholder="고객명으로 검색..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
