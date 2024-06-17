"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { SideBarHomeLabel } from "../../constants";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MovileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[220px]">
      <Sheet>
        <SheetTrigger asChild><ViewHeadlineIcon className="sm:hidden"/></SheetTrigger>
        <SheetContent side="left" className="border-none bg-gray-400">
          <Link href="/" className="flex items-center" >
            <Image src="/social.png" width={50} height={50} alt="Social" className="rounded-lg" />
            <p className="text-[26px] font-extrabold ">Social</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 ">
                {SideBarHomeLabel.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                    <Link href={link.route} key={link.label} className={cn('flex gap-3 items-center p-3 rounded-lg w-full max-w-60', {
                      'bg-gray-100': isActive,
                    })}>
                      {link.icon} <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
                    </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>

          </div>

        </SheetContent>
      </Sheet>

    </section>
  )
}

export default MovileNav