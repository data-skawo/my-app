import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

// ─────────────────────────────────────────
// 날짜 포맷팅
// ─────────────────────────────────────────

/**
 * 날짜를 지정한 형식으로 포맷합니다.
 * @example formatDate('2024-01-01') → '2024년 1월 1일'
 */
export function formatDate(
  date: string | Date | null | undefined,
  pattern = 'yyyy년 M월 d일'
): string {
  if (!date) return '-'
  const parsed = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(parsed)) return '-'
  return format(parsed, pattern, { locale: ko })
}

/**
 * 날짜를 시간 포함 형식으로 포맷합니다.
 * @example formatDateTime('2024-01-01T12:00:00') → '2024년 1월 1일 12:00'
 */
export function formatDateTime(date: string | Date | null | undefined): string {
  return formatDate(date, 'yyyy년 M월 d일 HH:mm')
}

/**
 * 날짜를 상대적 시간으로 포맷합니다.
 * @example formatRelativeTime('2024-01-01') → '3일 전'
 */
export function formatRelativeTime(date: string | Date | null | undefined): string {
  if (!date) return '-'
  const parsed = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(parsed)) return '-'
  return formatDistanceToNow(parsed, { addSuffix: true, locale: ko })
}

// ─────────────────────────────────────────
// 숫자 포맷팅
// ─────────────────────────────────────────

/**
 * 숫자에 천 단위 구분자를 추가합니다.
 * @example formatNumber(1234567) → '1,234,567'
 */
export function formatNumber(value: number | null | undefined): string {
  if (value == null) return '-'
  return new Intl.NumberFormat('ko-KR').format(value)
}

/**
 * 숫자를 통화 형식으로 포맷합니다.
 * @example formatCurrency(50000) → '₩50,000'
 */
export function formatCurrency(
  value: number | null | undefined,
  currency = 'KRW',
  locale = 'ko-KR'
): string {
  if (value == null) return '-'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * 숫자를 퍼센트 형식으로 포맷합니다.
 * @example formatPercent(0.1234) → '12.34%'
 */
export function formatPercent(
  value: number | null | undefined,
  fractionDigits = 1
): string {
  if (value == null) return '-'
  return new Intl.NumberFormat('ko-KR', {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

/**
 * 바이트를 읽기 쉬운 파일 크기로 포맷합니다.
 * @example formatBytes(1024) → '1 KB'
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`
}
