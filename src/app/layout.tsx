"use client"
import type { Metadata } from 'next'
import { Inter as FontSans} from "next/font/google";
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from '@/lib/utils'
import Footer from './components/Footer'
// import useDataFetching from "@/hooks/useDataFetch";
import useDataFetching from '@/hooks/useDataFetch'
// const inter = Inter({ subsets: ['latin'] })
import SplashScreen from './components/SplashScreen'
import { usePathname } from "next/navigation";
// export const metadata: Metadata = {
//   title: 'LiteΦn',
//   description: 'Powering facilities one household at a time',
// }

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHome = pathname === "/"

  const isLoading = useDataFetching(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {isLoading && isHome ?  (
          <SplashScreen />
          
        ) : (
          <>
             <Navbar/>
              {children}
              <Footer/>
          </>
        )}
       
      </body>
    </html>
  )
}

// "use client"
// import { Inter as FontSans} from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import SplashScreen from "@/components/SplashScreen";
// import { usePathname } from "next/navigation";
// import useDataFetching from "@/hooks/useDataFetch";
// import NavigationBar from "@/components/Navbar/NavigationBar";


// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const isHome = pathname === "/"
  
//   const isLoading = useDataFetching(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//   });


//   return (
//     <html lang="en">
//       <body className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}>
//         {isLoading && isHome ? (
//           <SplashScreen />
          
//         ) : (
//           <>
//              <NavigationBar/>
//               {children}
//           </>
//         )}
       
//       </body>
//     </html>
//   );
// }
