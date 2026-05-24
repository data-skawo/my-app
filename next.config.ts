import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── 이미지 최적화 ──────────────────────────────────────────────────────────
  // 외부 이미지를 next/image로 사용할 경우 허용 도메인을 추가하세요.
  // images: {
  //   remotePatterns: [
  //     { protocol: 'https', hostname: 'example.com' },
  //   ],
  // },

  // ── 리다이렉트 / 리라이트 ────────────────────────────────────────────────
  // async redirects() {
  //   return [{ source: '/old', destination: '/new', permanent: true }]
  // },

  // ── 실험적 기능 ───────────────────────────────────────────────────────────
  // experimental: {
  //   serverActions: { allowedOrigins: ['localhost:3000'] },
  // },
}

export default nextConfig
