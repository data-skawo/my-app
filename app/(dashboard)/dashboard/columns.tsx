'use client'

import { type ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/format'

// ── 주문 데이터 타입 ──────────────────────────────
export interface Order {
  id: string
  customer: string
  status: '완료' | '처리중' | '취소'
  amount: number
  date: string
}

// ── 샘플 주문 데이터 ──────────────────────────────
// TODO: 실제 서버에서 데이터를 가져오도록 교체하세요.
export const orders: Order[] = [
  { id: 'ORD-001', customer: '김민준', status: '완료', amount: 128000, date: '2025-05-20' },
  { id: 'ORD-002', customer: '이서연', status: '처리중', amount: 75000, date: '2025-05-21' },
  { id: 'ORD-003', customer: '박지호', status: '완료', amount: 240000, date: '2025-05-22' },
  { id: 'ORD-004', customer: '최수아', status: '취소', amount: 55000, date: '2025-05-22' },
  { id: 'ORD-005', customer: '정현우', status: '처리중', amount: 185000, date: '2025-05-23' },
  { id: 'ORD-006', customer: '윤지아', status: '완료', amount: 320000, date: '2025-05-23' },
  { id: 'ORD-007', customer: '임도현', status: '완료', amount: 98000, date: '2025-05-24' },
]

// ── 주문 테이블 컬럼 정의 ─────────────────────────
export const columns: ColumnDef<Order>[] = [
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
    // lib/format.ts의 formatCurrency 재사용 (DRY 원칙)
    cell: ({ row }) => formatCurrency(row.getValue('amount')),
  },
  { accessorKey: 'date', header: '날짜' },
]
