import { cn } from '@/lib/utils'
import type { WithClassName } from '@/types'

interface EmptyStateProps extends WithClassName {
  title: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  action?: React.ReactNode
}

/**
 * 데이터가 없을 때 표시하는 빈 상태 컴포넌트
 * @example
 * <EmptyState
 *   icon={Inbox}
 *   title="데이터가 없습니다"
 *   description="새 항목을 추가해 시작해보세요."
 *   action={<Button>추가하기</Button>}
 * />
 */
export function EmptyState({ title, description, icon: Icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center',
        className
      )}
    >
      {Icon && (
        <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          <Icon className="text-muted-foreground h-6 w-6" />
        </div>
      )}
      <h3 className="text-base font-semibold">{title}</h3>
      {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
