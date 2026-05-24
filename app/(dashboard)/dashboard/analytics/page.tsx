import { BarChart3 } from 'lucide-react'
import type { Metadata } from 'next'

import { EmptyState } from '@/components/common/empty-state'
import { PageHeader } from '@/components/common/page-header'

export const metadata: Metadata = { title: '통계' }

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="통계"
        description="서비스 사용 현황과 주요 지표를 확인합니다."
      />
      <EmptyState
        icon={BarChart3}
        title="통계 데이터가 없습니다"
        description="아직 집계된 데이터가 없습니다."
      />
    </div>
  )
}
