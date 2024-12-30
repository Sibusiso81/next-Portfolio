"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/mail";
import {  toast, Toaster } from 'sonner'
import { Hacker } from "@/app/Components/dashboardSignInSvg";
import Google from "@/app/Components/google";
import Github from "@/app/Components/github";
import { Target } from "lucide-react";
import { signup } from "./actions";
const formSchema = z.object({
  password: z
  .string()
  .min(2, { message: "Username must be at least 2 characters long." })
  .max(50, { message: "Username must be no longer than 50 characters." }),
email: z
  .string()
  .email({ message: "Please enter a valid email address." })
  .max(100, { message: "Email must be no longer than 100 characters." }),

});

export default function Page() {
  return (
    <section
      className="max-w-screen-md  h-screen flex flex-col lg:flex-row p-4 space-y-6 mx-auto  justify-center items-center
     "
    >
      <div className="lg:w-1/2 lg:p-4">
        <Hacker />
      </div>
      
      <div className="w-full md:w-1/2  space-y-4 justify-center items-center">
      <h1 className="text-xl font-semibold text-center">Welcome </h1>
        <ProfileForm />
      </div>
    </section>
  );
}

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password:'',
      email: "",
    },
  });

 /*  const onSubmit = async (values: z.infer<typeof formSchema>) => {

   try {
    const validatedData = formSchema.parse(values)
    await signup({
      email:validatedData.email,
      password:validatedData.password,
    })
   } catch (error) {
    toast.error('Failed to Sign Up')
   }
  
  }; */

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');

console.log(email)
console.log(password)
  return (
    <Form {...form}>
      <form className="space-y-6 lg:space-y-8">
        <FormField
          control={form.control}
          name="email"
          
          render={({ field }) => (
            <>
            
            {/*  */}
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                id='email'
                placeholder="Enter your email" 
                type="email" {...field}
                
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            </>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <>
            
            {/*  */}
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                id='password'
                placeholder="Enter your email" type="password" {...field}
                
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            </>
          )}
        />
       
         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3">
                 <Button type="submit" className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white">
                  <Google/> Sign in with Google
                 </Button>
                 <Button type="submit" className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white">
                 <Github/>Sign in with GitHub
                 </Button>
                 </div>
        <Button 
        type="submit"
         className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white"
         formAction={signup}
         >
          
          Sign up
        </Button>
      </form>
    </Form>
  );
}
