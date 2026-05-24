'use client'

import { AlertTriangle, RotateCcw } from 'lucide-react'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

/** 루트 레이아웃 수준에서 발생한 예외를 처리하는 전역 에러 경계 */
export default function GlobalError({ error, unstable_retry }: GlobalErrorProps) {
  useEffect(() => {
    // 에러 로깅 서비스로 전송 (예: Sentry)
    console.error('[GlobalError]', error)
  }, [error])

  return (
    // global-error는 html/body 태그를 직접 포함해야 합니다
    <html lang="ko">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">문제가 발생했습니다</h1>
          <p className="text-muted-foreground text-sm">
            예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
          {error.digest && (
            <p className="font-mono text-xs text-muted-foreground">ID: {error.digest}</p>
          )}
        </div>
        <Button onClick={unstable_retry}>
          <RotateCcw className="mr-2 h-4 w-4" />
          다시 시도
        </Button>
      </body>
    </html>
  )
}
