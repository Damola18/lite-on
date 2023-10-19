import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LiteΦn',
  description: 'Powering facilities one household at a time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
