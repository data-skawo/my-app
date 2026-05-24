import { Settings } from 'lucide-react'
import type { Metadata } from 'next'

import { EmptyState } from '@/components/common/empty-state'
import { PageHeader } from '@/components/common/page-header'

export const metadata: Metadata = { title: '설정' }

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="설정"
        description="애플리케이션 환경을 설정합니다."
      />
      <EmptyState
        icon={Settings}
        title="설정 항목이 없습니다"
        description="아직 구성된 설정이 없습니다."
      />
    </div>
  )
}
