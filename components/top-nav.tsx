"use client"
import Image from 'next/image'
import { FC } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from './ui/navigation-menu'
import Link from 'next/link'
import { Github } from 'lucide-react';


interface TopNavProps {
    className?: string,
}

const TopNav: FC<TopNavProps> = ({ className }) => {
    return (
        <nav className=' absolute inset-0 flex justify-between items-center px-10 bg-slate-300 h-20'>
            <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className=' h-12 w-12 rounded-full '
            />
            <div className=' me-24 w-full flex justify-end items-center'>
                <NavigationMenu >
                    <NavigationMenuList className=" w-full">
                        <NavigationMenuItem className=" w-full" >
                            <NavigationMenuTrigger>About Upload</NavigationMenuTrigger>
                            <NavigationMenuContent className=" w-full ">
                                <div className=' grid grid-cols-3  w-[550px] h-full'>
                                    <div className=' col-span-2 w-full'>
                                        <Image src={"/logo.png"} alt="logo" width={300} height={300} />
                                    </div>
                                    <p className=' text-xl font-medium w-full p-2 text-ellipsis'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent className=" w-full ">
                                <div className=' grid grid-cols-3  w-[550px] h-full'>
                                    <div className=' col-span-2 w-full'>
                                        <Image src={"/logo.png"} alt="logo" width={300} height={300} />
                                    </div>
                                    <p className=' text-xl font-medium w-full p-2 text-ellipsis'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Github className=' me-2'/>Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}

export default TopNav