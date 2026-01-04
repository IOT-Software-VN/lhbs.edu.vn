import type { Metadata } from 'next'
import { MainLayout } from '@lhbs/ui'
import './globals.css'

export const metadata: Metadata = {
  title: 'LHBS Galaxy Long Khanh',
  description: 'Preschool Education in Long Khanh'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
