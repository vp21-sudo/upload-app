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
import { Moon, Sun } from "lucide-react"
import { useTheme } from '@/contexts/themeContext'


interface TopNavProps {
    className?: string,
}

const TopNav: FC<TopNavProps> = ({ className }) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <nav className={` flex justify-between items-center px-10 h-20 w-full transition-colors ease-in-out duration-200 bg-background ${theme} `}>
            <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className=' h-12 w-12 rounded-full '
            />
            <div className=' me-24 w-full flex justify-end items-center'>
                <NavigationMenu >
                    <NavigationMenuList className={theme === "dark" ? 'dark' : ''} >
                        <NavigationMenuItem className=" w-full" >
                            <NavigationMenuTrigger className={theme + " text-foreground"}>About Upload</NavigationMenuTrigger>
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
                            <NavigationMenuTrigger className={theme + " text-foreground"}>Features</NavigationMenuTrigger>
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
                            <Link href={"/docs"} className=" flex items-center" legacyBehavior>
                                <NavigationMenuLink  className={navigationMenuTriggerStyle() + theme + " text-foreground"}>
                                <Github className=' me-2'/>Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className=' flex justify-end items-center'>
                <button onClick={toggleTheme} className=' p-2 rounded-full border-2 border-slate-500'>
                    {theme === "dark" ? <Sun color='#eae1e1' className=' w-6 h-6' /> : <Moon className=' w-6 h-6' />}
                </button>
            </div>
        </nav>
    )
}

export default TopNav