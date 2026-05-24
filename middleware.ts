import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * 인증 미들웨어 — 보호된 경로에 대한 접근을 제어합니다.
 * TODO: 아래 주석을 참고해 실제 인증 라이브러리와 연동하세요.
 *   - NextAuth.js: getToken({ req: request }) 활용
 *   - Lucia Auth / 자체 JWT: 쿠키에서 세션 토큰 검증
 */

/** 인증 없이 접근 가능한 공개 경로 */
const PUBLIC_PATHS = ['/', '/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 공개 경로는 인증 검사 없이 통과
  const isPublic = PUBLIC_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )
  if (isPublic) return NextResponse.next()

  // TODO: 아래 주석을 해제하고 실제 인증 토큰 검증 로직을 구현하세요.
  //
  // [방법 1] 쿠키 기반 세션 토큰
  // const token = request.cookies.get('session')?.value
  // if (!token) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  //
  // [방법 2] NextAuth.js
  // import { getToken } from 'next-auth/jwt'
  // const token = await getToken({ req: request })
  // if (!token) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  // _next 정적 파일, 이미지, favicon 등은 미들웨어 대상에서 제외
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
