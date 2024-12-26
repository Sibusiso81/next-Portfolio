"use client";
import { ArrowDown, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ModeToggle } from "./Components/mode-toggle";
import Image from "next/image";
import { main } from "framer-motion/client";
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col space-y-10 overflow-x-hidden">
      <section className="w-full h-fit p-4 pt-4 bg-white dark:bg-neutral-950 text-black dark:text-[#eaeaea] overflow-x-hidden ">
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
            <h1 className="text-2xl lg:text-4xl">
              An aspiring Human Resources practitioner who has in persuit of
              this status has also taken to task the opportunity to equipt
              himself with Web devlopment knowledge.
            </h1>
            <p className="text-muted-foreground text-xs md:text-lg italic pt-6 lg:text-2xl">
              &apos;&apos;There are no limits to growth because there are no
              limits of human intelligence,imagination and wonder.&apos;&apos;
              <br />
              <span
                className="text-center my-auto
          text-xs  md:text-lg lg:text-2xl"
              >
                {" "}
                -Ronald Reagan
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-800  mt-16 md:mt-48 lg:mt-58"></div>
        <div className="flex flex-col md:flex-row justify-between p-2">
          <p>Based on Johannesburg ,South Africa</p>
          <div className="flex flex-row space-x-1">
            <p>Scroll for more</p>
            <ArrowDown className="stroke-green-500" />
          </div>
        </div>
      </section>
      <section className="w-screen h-fit flex flex-col p-3  md:p-20 lg:p-24 lg:pl-52 justify-center space-y-4 mt-32 ">
      <h1 className="text-[30px] lg:text-[38px] font-bold ">About</h1>
        <div className="grid grid-cols-2 md:text-lg lg:text-2xl gap-6">
          {/* About header/ image / title text */}
          
          <div className="col-span-2 lg:col-span-1 flex flex-col lg:flex-row space-y-3 lg:space-x-4 h-fit lg:pt-6">
            <div className="object-cover lg:justify-self-center lg:place-self-center">
            <Image
              alt="hero-profile-image"
              src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
              width={75}
              height={75}
            /*   style={{
                maxWidth: "30%",
                height: "30%",
              }} */
              className="rounded-full object-cover "
              priority
            />
            </div>

            <div className="xl:max-w-96 ">
              
              <p className="font-semibold font-sans md:text-lg tracking-wide ">
                I'm Sibusiso, a driven and results-oriented HRM student and self
                tought Web developer.
              </p>
            </div>
           
          </div>
          {/* About text */}
          <div className="col-span-2 lg:col-span-1 xl:p-10 text-sm">
          <div className="text-muted-foreground ">
            Hi, I'm Sibusiso, a driven and results-oriented individual with a
            unique blend of technical and human resources expertise. As a
            self-taught web developer with a solid foundation in HTML, CSS,
            JavaScript, Bootstrap, Tailwind CSS, and SEO, I'm eager to
            contribute to innovative and impactful projects.
            <br />
            <br />
            While pursuing my full-time studies in Human Resources Management,
            I've developed a strong understanding of people, processes, and
            organizational dynamics. This unique perspective allows me to not
            only build visually stunning and user-friendly websites but also
            consider the human element in every design decision.
            <br />
            <br />
            I'm a fast learner, a highly motivated individual with a strong work
            ethic, and I'm confident in my ability to quickly adapt and
            contribute value to both development and HR teams. I'm eager to
            learn and grow, and I believe my unique skillset can bring a
            valuable and innovative perspective to any team.
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
