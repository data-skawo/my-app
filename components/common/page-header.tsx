import { cn } from '@/lib/utils'
import type { WithClassName } from '@/types'

interface PageHeaderProps extends WithClassName {
  title: string
  description?: string
  /** 우측에 배치할 액션 버튼 등 */
  action?: React.ReactNode
}

/**
 * 페이지 제목 + 설명 + 우측 액션 조합 컴포넌트
 * @example
 * <PageHeader
 *   title="사용자 관리"
 *   description="전체 사용자 목록을 조회하고 관리합니다."
 *   action={<Button>추가</Button>}
 * />
 */
export function PageHeader({ title, description, action, className }: PageHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4', className)}>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
