import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from '@/lib/utils'
import NotFound from './ride/page'
import { useRouter } from 'next/router';
import Footer from './components/Footer'

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
  // if (typeof window !== 'undefined') {
  //   if (window.location.pathname === '/') {
  //     // Render your home page component
  //   } else {
  //     return <NotFound />;
  //   }
  // }
  return (
    <html lang="en">
      
       <body className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
