import './globals.css'
import type { Metadata } from 'next'
import { Varela } from 'next/font/google'

const roboto = Varela({
  subsets: ['latin'],
  weight: '400'
})
export const metadata: Metadata = {
  title: 'The Fifth Pillar',
  description: 'The Fifth Pillar Organization Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
