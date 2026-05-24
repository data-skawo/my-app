'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const loginSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력해주세요'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: LoginFormValues) {
    try {
      // TODO: 실제 인증 로직 구현 (예: NextAuth signIn, Server Action 호출 등)
      console.log('로그인 시도:', values.email)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 시뮬레이션
      toast.success('로그인되었습니다!')
    } catch {
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="text-muted-foreground text-sm">계정에 로그인하세요</p>
      </div>

      {/* 폼 */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="비밀번호 입력"
                      autoComplete="current-password"
                      {...field}
                    />
                    <button
                      type="button"
                      className="text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            로그인
          </Button>
        </form>
      </Form>

      <p className="text-muted-foreground text-center text-sm">
        계정이 없으신가요?{' '}
        <Link href="/register" className="text-primary underline-offset-4 hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  )
}
