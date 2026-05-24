import { cn } from '@/lib/utils'
import type { WithClassName } from '@/types'

import { EmptyState } from './empty-state'

interface DataListItem {
  id: string | number
  [key: string]: unknown
}

interface DataListProps<T extends DataListItem> extends WithClassName {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor?: (item: T) => string | number
  emptyTitle?: string
  emptyDescription?: string
  emptyIcon?: React.ComponentType<{ className?: string }>
  emptyAction?: React.ReactNode
}

/**
 * 범용 리스트 컴포넌트 — items가 없으면 EmptyState를 렌더링
 * @example
 * <DataList
 *   items={users}
 *   renderItem={(user) => <UserListItem user={user} />}
 *   emptyTitle="사용자가 없습니다"
 * />
 */
export function DataList<T extends DataListItem>({
  items,
  renderItem,
  keyExtractor = (item) => item.id,
  emptyTitle = '데이터가 없습니다',
  emptyDescription,
  emptyIcon,
  emptyAction,
  className,
}: DataListProps<T>) {
  if (items.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        icon={emptyIcon}
        action={emptyAction}
        className={className}
      />
    )
  }

  return (
    <ul className={cn('divide-y divide-border rounded-lg border', className)}>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
