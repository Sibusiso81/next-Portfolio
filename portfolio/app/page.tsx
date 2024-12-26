"use client";
import { ArrowDown, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { motion } from "framer-motion";
import { ModeToggle } from "./Components/mode-toggle";
import Bootstrap from "./Components/bootstrap";
import CSS from "./Components/css";
import TypeScript from "./Components/typescript";
import Git from "./Components/git";
import HTML5 from "./Components/html";
import TailwindCSS from "./Components/tailwind";
import Nextjs from "./Components/next";
import Vite from "./Components/vite";
import JavaScript from "./Components/js";
import Vercel from "./Components/vercel";
import Image from "next/image";
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const marquee = [
    <Bootstrap width={40} height={30} />,
    <CSS width={40} height={30} />,
    <TypeScript width={40} height={30} />,
    <Git width={40} height={30} />,
    <HTML5 width={40} height={30} />,
    <TailwindCSS width={40} height={30} />,
    <Nextjs width={40} height={30} />,
    <Vite width={40} height={30} />,
    <JavaScript width={40} height={30} />,
    <Vercel width={40} height={30} />,
  ];
  return (
    <section className="w-full h-full p-4 pt-4 bg-white dark:bg-neutral-950 text-black dark:text-[#eaeaea] overflow-x-hidden ">
      <div className="w-full p-2 border-[#eaeaea] flex justify-between items-center rounded-md relative z-40 flex-1">
        <h1 className="font-bold dark:text-[#eaeaea] text-xl text-black">
          Portfolio®
        </h1>
        <div className="flex flex-row space-x-2 items-center">
          <ModeToggle />
          <Menu
            className={`cursor-pointer ${isOpen ? "hidden" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />
          <X
            className={`cursor-pointer ${isOpen ? "" : "hidden"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? <Navbar /> : null}
      </AnimatePresence>
      <div className="flex flex-col   pt-10 lg:pt-20 space-x-2 md:pl-4 lg:pl-20 ">
        {/* Image & Name  */}
        <div className="flex flex-row  space-x-2 md:space-x- ">
          <Image
            alt="hero-profile-image"
            src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
            width={100}
            height={100}
            style={{
              maxWidth: "30%",
              height: "30%",
            }}
            className="rounded-full object-cover w-14  "
            priority
          />

          <div className="text-xl font-mono  items-end place-self-end space-y-1">
            <h1 className="font-bold">Sibusiso Zulu</h1>
            <div className="flex flex-row  space-x-1 place-self-end">
              <div className="w-fit my-auto place-self-center">
                <div className="h-3 w-3 rounded-full bg-green-500 "></div>
              </div>
              <div className="my-auto place-self-end">
                <p className="text-sm lg:text-md text-nowrap">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Home text */}
        <div className=" font-bold font-mono pt-10 space-y-4 max-w-screen-lg lg:justify-center mx-auto">
          <h1 className="text-2xl lg:text-4xl">An aspiring Human Resources practitioner who has in persuit of this status has also taken to task the opportunity to equipt himself with Web devlopment knowledge.</h1>
          <p className="text-muted-foreground text-xs md:text-lg italic pt-6 lg:text-2xl">&apos;&apos;There are no limits to growth because there are no limits of human intelligence,imagination and wonder.&apos;&apos;<br /><span className="text-center my-auto
          text-xs  md:text-lg lg:text-2xl"> -Ronald Reagan</span> </p>
        </div>
        

      </div>
      <div className="w-full h-[2px] bg-neutral-800  mt-16 md:mt-48 lg:mt-58"></div>
      <div className="flex flex-col md:flex-row justify-between p-2">
        <p>Based on Johannesburg ,South Africa</p>
        <div className="flex flex-row space-x-1">
          <p>Scroll for more</p>
          <ArrowDown className="stroke-green-500"/>
        </div>
      </div>
    </section>
  );
}
