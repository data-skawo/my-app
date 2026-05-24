import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn(
        'h-full antialiased',
        geistSans.variable,
        geistMono.variable,
        notoSans.variable,
        playfairDisplay.variable
      )}
    >
      <body className="min-h-full bg-background font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
