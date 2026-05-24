import { Users } from 'lucide-react'
import type { Metadata } from 'next'

import { EmptyState } from '@/components/common/empty-state'
import { PageHeader } from '@/components/common/page-header'

export const metadata: Metadata = { title: '사용자' }

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="사용자 관리"
        description="전체 사용자 목록을 조회하고 관리합니다."
      />
      <EmptyState
        icon={Users}
        title="사용자 데이터가 없습니다"
        description="아직 등록된 사용자가 없습니다."
      />
    </div>
  )
}
