import { type ColumnDef } from '@tanstack/react-table'
import { BarChart3, ShoppingCart, TrendingUp, Users } from 'lucide-react'

import { DataTable } from '@/components/common/data-table'
import { PageHeader } from '@/components/common/page-header'
import { StatCard } from '@/components/common/stat-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// ── 샘플 데이터 타입 ──────────────────────────────
interface Order {
  id: string
  customer: string
  status: '완료' | '처리중' | '취소'
  amount: number
  date: string
}

const orders: Order[] = [
  { id: 'ORD-001', customer: '김민준', status: '완료', amount: 128000, date: '2025-05-20' },
  { id: 'ORD-002', customer: '이서연', status: '처리중', amount: 75000, date: '2025-05-21' },
  { id: 'ORD-003', customer: '박지호', status: '완료', amount: 240000, date: '2025-05-22' },
  { id: 'ORD-004', customer: '최수아', status: '취소', amount: 55000, date: '2025-05-22' },
  { id: 'ORD-005', customer: '정현우', status: '처리중', amount: 185000, date: '2025-05-23' },
  { id: 'ORD-006', customer: '윤지아', status: '완료', amount: 320000, date: '2025-05-23' },
  { id: 'ORD-007', customer: '임도현', status: '완료', amount: 98000, date: '2025-05-24' },
]

const columns: ColumnDef<Order>[] = [
  { accessorKey: 'id', header: '주문 ID' },
  { accessorKey: 'customer', header: '고객명' },
  {
    accessorKey: 'status',
    header: '상태',
    cell: ({ row }) => {
      const status = row.getValue<Order['status']>('status')
      return (
        <Badge
          variant={
            status === '완료' ? 'default' : status === '처리중' ? 'secondary' : 'destructive'
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: '금액',
    cell: ({ row }) =>
      new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(
        row.getValue('amount')
      ),
  },
  { accessorKey: 'date', header: '날짜' },
]

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
