"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import InputGroup from "@/components/ui/input-groups"
import Label from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "@/contexts/themeContext"
import Link from "next/link"

const LoginSignup = () => {
  const {theme} = useTheme()
  return (
    <div className={` flex justify-center items-center h-screen w-full ${theme === "dark" ? "bg-slate-700" : "bg-slate-50"} `}>
    <Tabs defaultValue="account" className={` ${theme === "dark" ? "dark" : ""}  flex flex-col justify-center items-center w-full`}>
      <TabsList className="absolute top-24">
        <TabsTrigger value="account" className=" ">Login</TabsTrigger>
        <TabsTrigger value="password">Signup</TabsTrigger>
      </TabsList>
      <TabsContent className=" w-1/3" value="account">
        <Card className=" border-2 rounded-2xl w-full">
          <CardHeader className=" text-start rounded-sm">
            <CardTitle className=" text-4xl">Login</CardTitle>
            <CardDescription className=" text-lg">Welcome to uploads!!</CardDescription>
          </CardHeader>
          <CardContent>
            <InputGroup>
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
            <InputGroup>
              <Input type="passowrd" name="password" placeholder="Your Password" />
            </InputGroup>
            <div className=" flex justify-end mt-4 items-center">
              <Button className=" transition-all ease-in-out duration-300 w-1/3 h-12 bg-slate-700 text-slate-100 rounded-xl hover:bg-slate-800">Login</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className=" w-1/3" value="password" >
        <Card className=" border-2 rounded-2xl w-full">
          <CardHeader className=" text-start rounded-sm">
            <CardTitle className=" text-4xl">Sign up</CardTitle>
            <CardDescription className=" text-lg">Welcome to uploads!!</CardDescription>
          </CardHeader>
          <CardContent>
            <InputGroup>
              <Input type="name" name="name" placeholder="Your Name" />
            </InputGroup>
            <InputGroup>
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
            <InputGroup>
              <Input type="passowrd" name="password" placeholder="Your Password" />
            </InputGroup>
            <InputGroup className=" flex ms-1">
            <Checkbox /><Label className=" text-sm font-light flex justify-start items-center">By signing up you are agreeing to our <Link href={"/"} className=" ms-1 font-semibold"> terms and conditions</Link></Label>
            </InputGroup>
            <div className=" flex justify-end mt-4 items-center">
              <Button className=" transition-all ease-in-out duration-300 w-1/3 h-12 bg-slate-700 text-slate-100 rounded-xl hover:bg-slate-800">Sign up</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>



  </div>
  )
}

export default LoginSignup