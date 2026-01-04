import type { Metadata } from 'next'
import { MainLayout } from '@lhbs/ui'
import './globals.css'

export const metadata: Metadata = {
  title: 'LHBS Galaxy Bien Hoa',
  description: 'Preschool Education in Bien Hoa'
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
