import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portal',
  description: 'Login moderno con Next.js, Flex y Grid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}