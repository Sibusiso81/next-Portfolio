"use client";

import React from "react";
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

import { Input } from "@/components/ui/input";

import { login } from "../Signup/actions";
import Google from "@/app/Components/google";
import { Hacker } from "@/app/Components/dashboardSignInSvg";
import Github from "@/app/Components/github";
import Footer from "@/app/Components/Footer/Footer";

const formSchema = z.object({
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters long." })
    .max(50, { message: "Password must be no longer than 50 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be no longer than 100 characters." }),
});

const ProfileForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-6 lg:space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="p-4"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="p-4"
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <Button
              type="button"
              className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white"
            >
              <Google /> Log in with Google
            </Button>
            <Button
              type="button"
              className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white"
            >
              <Github /> Log in with GitHub
            </Button>
          </div>
          <p className="text-muted-foreground text-center mx-auto">or</p>
          <Button
            type="submit"
            formAction={login}
            className="bg-neutral-800/30 p-4 w-full hover:bg-neutral-800/20 text-white"
          >
            Log in
          </Button>
        </div>
      </form>
    </Form>
  );
};

const Page: React.FC = () => {
  return (
    <>
      <section className="max-w-screen-md h-screen flex flex-col lg:flex-row p-4 space-y-6 mx-auto justify-center items-center">
        <div className="lg:w-1/2 lg:p-4">
          <Hacker />
        </div>
        <div className="w-full md:w-1/2 space-y-4 justify-center items-center">
          <h1 className="text-xl font-semibold text-center">
            Welcome Mr Zulu
          </h1>
          <ProfileForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
