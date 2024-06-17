"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SideBarHomeLabel } from '../../constants';
import Image from 'next/image'

const SideBarHome = () => {
  const pathname = usePathname();
  return (
    // bg-dark-1 p-6 pt-28 text-white w-[10rem]
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col
      justify-between p-3 pt-6 pl-3 max-sm:hidden lg:w-[220px]'>
      <div className='flex flex-col gap-1 '>
        <div className='flex flex-col gap-2 items-center text-black'>
          <Link href="/profile" >
            <div className="flex flex-col gap-2 items-center">
              <Image src="/WEC.jpeg" alt="photo profile" width={50} height={50} className="rounded-full" />
            </div>
            <p className='text-small-bold font-bold items-center'> Super Usuario</p>
          </Link>
        </div>
        <div className='flex text-black text-small-bold justify-between'>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold font-bold'>n</p>
            <p className='text-tiny-medium font-bold'>publicaciones</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold font-bold'>n</p>
            <p className='text-tiny-medium font-bold'>Seguidores</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold font-bold'>n</p>
            <p className='text-tiny-medium  font-bold'>Siguiendo</p>
          </div>
        </div >
        <div className='border-b my-4' style={{ borderBottom: '2px solid', fontWeight: 'bold' }}></div>
        {SideBarHomeLabel.map((link) => {
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