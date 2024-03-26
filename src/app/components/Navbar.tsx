
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { callsToAction, company, products } from "./constants";

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
    <header className="bg-white fixed z-20 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
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

        <Link 
            href='/ride' 
            className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
              Ride
          </Link>

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

            
          <Link 
            href='/contact' 
            className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
              <Button className="bg-[#365821] text-white">Get Started</Button>
          </Link>
        </div>

        {/* <div>
          <Button>Get Started</Button>
        </div> */}
      </nav>
    </header>
  );
}

