'use client'

import { AlertTriangle, RotateCcw } from 'lucide-react'
import { useEffect } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function DashboardError({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error('[DashboardError]', error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>오류가 발생했습니다</AlertTitle>
          <AlertDescription>
            {error.message || '예상치 못한 오류가 발생했습니다.'}
            {error.digest && (
              <span className="mt-1 block font-mono text-xs opacity-70">Digest: {error.digest}</span>
            )}
          </AlertDescription>
        </Alert>
        <Button onClick={unstable_retry} className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" />
          다시 시도
        </Button>
      </div>
    </div>
  )
}
