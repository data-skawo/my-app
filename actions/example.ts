'use server'

import { revalidatePath } from 'next/cache'

import type { ActionState } from '@/types'

// ─────────────────────────────────────────
// Server Action 예제
// ─────────────────────────────────────────
// 실제 프로젝트에서는 아래 패턴을 따라 Server Action을 구현하세요.
// 1. 파일 최상단에 'use server' 선언
// 2. 인증/권한 검사 먼저
// 3. 성공/실패를 ActionState 타입으로 반환
// 4. 필요 시 revalidatePath / revalidateTag 호출

/**
 * 예제: 아이템 생성 Server Action
 */
export async function createItemAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. 입력값 추출
  const name = formData.get('name') as string
  const description = formData.get('description') as string

  // 2. 유효성 검사 (실제로는 zod schema 사용 권장)
  if (!name || name.trim().length === 0) {
    return {
      success: false,
      errors: { name: ['이름은 필수 항목입니다.'] },
    }
  }

  try {
    // 3. 비즈니스 로직 실행 (DB 저장 등)
    // await db.item.create({ data: { name, description } })

    // 4. 캐시 무효화 및 리다이렉트
    revalidatePath('/dashboard')

    return {
      success: true,
      message: `"${name}" 항목이 생성되었습니다.`,
    }
  } catch {
    return {
      success: false,
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    }
  }
}

/**
 * 예제: 아이템 삭제 Server Action
 */
export async function deleteItemAction(id: string): Promise<ActionState> {
  if (!id) {
    return { success: false, message: '유효하지 않은 ID입니다.' }
  }

  try {
    // await db.item.delete({ where: { id } })
    revalidatePath('/dashboard')
    return { success: true, message: '항목이 삭제되었습니다.' }
  } catch {
    return { success: false, message: '삭제 중 오류가 발생했습니다.' }
  }
}
