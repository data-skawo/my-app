import { Home, SearchX } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-full">
        <SearchX className="text-muted-foreground h-8 w-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-xl font-semibold">페이지를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground text-sm">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
