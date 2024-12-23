'use client'
import { Menu } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
export default function Home() {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  return (
   
      <section className="w-full h-full px-12 pt-4">
        <div className="w-full p-2 border-[#eaeaea] flex justify-between items-center rounded-md relative z-40">
          <h1 className="font-bold text-[#eaeaea] text-xl">Portfolio®</h1> 
          <div>
            <Menu className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)}/>
          </div>
        </div>
        <AnimatePresence mode="wait">
        {
          isOpen
           ?<Navbar/>
           :null
        }
        </AnimatePresence>
      </section>
   
  );
}
