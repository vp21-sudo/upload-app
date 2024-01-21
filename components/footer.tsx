"use client"
import { useTheme } from '@/contexts/themeContext'
import React from 'react'

const Footer = () => {
  const {theme} = useTheme()
  return (
    <div className={` transition-colors ease-in-out duration-200 ${theme === "dark" ? "bg-slate-800 text-slate-100" : "bg-slate-200 text-slate-700"} w-full h-fit flex justify-center items-center text-center text-lg font-semibold`}>All rights reserved</div>
  )
}

export default Footer