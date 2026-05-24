import { redirect } from 'next/navigation'

/** (dashboard) 루트는 /dashboard 로 리다이렉트 */
export default function DashboardRootPage() {
  redirect('/dashboard')
}
