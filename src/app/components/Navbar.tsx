// "use client"
// import React from 'react'
// import MaxWidthWrapper from './MaxWidthWrapper'
// import { Link } from 'lucide-react'
// import { buttonVariants } from '@/components/ui/button'



// const Navbar = () => {
//   return (
//     <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
//     <MaxWidthWrapper>
//       <div className='flex h-20 items-center justify-between border-b border-zinc-200'>
//         <Link
//           href='/'
//           className='flex z-40 text-3xl font-bold'>
//           <span>Swift </span>
//         </Link>


//         <div className='hidden items-center space-x-4 sm:flex'>
//             <>
//               <Link
//                 href='/about'
//                 className={buttonVariants({
//                   variant: 'ghost',
//                   size: 'sm',
//                 })}>
//                 About
//               </Link>

//               <Link
//                 href='/contact'
//                 className={buttonVariants({
//                   variant: 'ghost',
//                   size: 'sm',
//                 })}>
//                 Contact
//               </Link>


//             </>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   </nav>
//   )
// }

// export default Navbar

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { callsToAction, company, products } from "./constants";
// import Logo from "@/assets/icons/logo.svg";
// import liteon from "@/assets/images/liteon.png";

import { ChevronDown, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Liteon</span>
            <Image
              className="h-16 w-auto"
              src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1697557882/liteon_jmrgyg.png"
              alt="liteon logo"
              height={5}
              width={500}
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden pt-2 lg:flex lg:gap-x-8">
          {/* <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Products
              <ChevronDown width={16} height={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-xs text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

{/*           
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              About
            </DropdownMenuTrigger>
          </DropdownMenu> */}

          <Link 
            href='/about' 
            className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
              About
          </Link>

          
          <Link 
            href='/contact' 
            className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
              Contact
          </Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Contact
            </DropdownMenuTrigger>
          </DropdownMenu> */}

          {/* <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Company
              <ChevronDown width={16} height={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex flex-col ">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>

        <div>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
