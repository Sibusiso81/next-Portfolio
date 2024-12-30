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
import { login } from "../Signup/actions";
import Google from "@/app/Components/google";
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
      className="max-w-screen-md  h-screen flex flex-col lg:flex-row p-4 space-y-6  justify-center items-center
     "
    >
      <div className="lg:w-1/2 lg:p-4">
        <Google className="h-full w-full"/>
        
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
      password: "",
      email: "",
      
    },
  });
  /* const onSumbit = async (values:z.infer<typeof formSchema>)=>{
    try {
      //Call the login function
      await login({
        email:values.email,
        password:values.password,
      })
    } catch (error) {
      toast.error('Login Failed ! Please try again')
      console.log('error',error)
    }
  } */

 /*  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await sendMail({
      to: "zulusibusiso@gmail.com",
      name: values.username,
      subject: `${values.username} Reached Out!`,
      body: `<h1>${values.message}</h1>`,
    });
    <Toaster richColors position="top-right" />
    console.log("Form submitted:", values);
  
  }; */


  return (
    <Form {...form}>
      <form  className="space-y-6 lg:space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                className="p-4"
                placeholder="Enter your name"
                type="email"
                
                {...field} 
                
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
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                className="p-4"
                placeholder="Enter your name"
                type="password"
                {...field} 
                
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            
            </>
          )}
        />
       
        <div className="flex flex-col lg:flex-row">
        <Button type="submit" className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white">
          Sign in with Google
        </Button>
        <Button type="submit" className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white">
        Sign in with GitHub
        </Button>
        </div>
        <Button 
        type="submit" 
        formAction={login}
        className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white">
          Login
        </Button>
      </form>
    </Form>
  );
}
