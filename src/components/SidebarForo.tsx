"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SideBarForoLabel } from '../../constants';

const SideBarHome = () => {
  const pathname = usePathname();
  return (
    // bg-dark-1 p-6 pt-28 text-white w-[10rem]
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col
      justify-between p-3 pt-6 pl-3 max-sm:hidden lg:w-[220px]'>
      <div className='flex flex-col gap-1 '>
        {SideBarForoLabel.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link href={link.route} key={link.label} className={cn('flex gap-3 items-center p-3 rounded-full justify-start', {
              'bg-gray-300': isActive,
            })}>
              {link.icon} <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default SideBarHome