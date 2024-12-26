"use client";
import { ArrowDown, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ModeToggle } from "./Components/mode-toggle";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col space-y-10 overflow-x-hidden">
      <section className="w-full h-screen p-4 pt-4 bg-white dark:bg-neutral-950 text-black dark:text-[#eaeaea] overflow-x-hidden ">
        <div className="w-full p-2 border-[#eaeaea] flex justify-between items-center rounded-md relative z-40 flex-1">
          <h1 className="font-bold dark:text-[#eaeaea] text-lg text-black">
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

            <div className="text-lg font-mono  items-end place-self-end space-y-1">
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
            <h1 className="text-2lg lg:text-4xl">
              An aspiring Human Resources practitioner who has in persuit of
              this status has also taken to task the opportunity to equipt
              himself with Web devlopment knowledge.
            </h1>
            <p className="text-muted-foreground text-xs md:text-lg italic pt-6 lg:text-2xl">
              &apos;&apos;There are no limits to growth because there are no
              limits of human intelligence&#44;imagination and
              wonder.&apos;&apos;
              <br />
              <span
                className="text-center my-auto
          text-xs  md:text-lg lg:text-2xl"
              >
                
                -Ronald Reagan
              </span>
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-800  mt-20 md:mt-58 "></div>
        <div className="flex flex-col md:flex-row justify-between p-2">
          <p>Based on Johannesburg &#44;South Africa</p>
          <div className="flex flex-row space-x-1">
            <p>Scroll for more</p>
            <ArrowDown className="stroke-green-500" />
          </div>
        </div>
      </section>
      <section className="w-screen h-fit flex flex-col p-3  md:p-20 lg:p-24 lg:pl-44 xl:pl-52 justify-center space-y-4 mt-32 ">
        <h1 className="text-[30px] lg:text-[38px] font-bold ">About</h1>
        <div className="grid grid-cols-2 md:text-lg lg:text-2lg gap-6">
          {/* About header/ image / title text */}

          <div className="col-span-2 lg:col-span-1 flex flex-col lg:flex-row space-y-3 lg:space-x-4 h-fit lg:pt-6">
            <div className="object-cover lg:justify-self-center lg:place-self-center">
            <Image
                alt="hero-profile-image"
                src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
                width={65}
                height={65}
                /*   style={{
                maxWidth: "30%"&#44;
                height: "30%"&#44;
              }} */
                className="rounded-full object-cover lg:hidden "
                priority
              />
              <Image
                alt="hero-profile-image"
                src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
                width={75}
                height={75}
                /*   style={{
                maxWidth: "30%"&#44;
                height: "30%"&#44;
              }} */
                className="rounded-full object-cover hidden lg:block "
                priority
              />
            </div>

            <div className="xl:max-w-96 lg:max-w-72 ">
              <p className="font-semibold font-sans md:text-lg tracking-wide ">
                I&apos;m Sibusiso&#44; a driven and results-oriented HRM student
                and self tought Web developer.
              </p>
            </div>
          </div>
          {/* About text */}
          <div className="col-span-2 lg:col-span-1 lg:p-10 text-sm">
            <div className="text-muted-foreground ">
              Hi&#44; I&apos;m Sibusiso&#44; a driven and results&#8212;oriented
              individual with a unique blend of technical and human resources
              expertise. As a self&#8212;taught web developer with a solid
              foundation in HTML&#44; CSS&#44; JavaScript&#44; Bootstrap&#44;
              Tailwind CSS&#44; and SEO&#44; I&apos;m eager to contribute to
              innovative and impactful projects.
              <br />
              <br />
              While pursuing my full&#8212;time studies in Human Resources
              Management&#44; I&apos;ve developed a strong understanding of
              people&#44; processes&#44; and organizational dynamics. This
              unique perspective allows me to not only build visually stunning
              and user-friendly websites but also consider the human element in
              every design decision.
              <br />
              <br />
              I&apos;m a fast learner&#44; a highly motivated individual with a
              strong work ethic&#44; and I&apos;m confident in my ability to
              quickly adapt and contribute value to both development and HR
              teams. I&apos;m eager to learn and grow&#44; and I believe my
              unique skillset can bring a valuable and innovative perspective to
              any team.
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen  p-4 lg:p-20 font-mono  ">
     <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold space-y-6 pb-14 lg:pb-20"> How I Can Add Value to Your Team</h1>
       <div className="grid grid-cols-4 gap-6 lg:gap-2">
         {/*  */}
       
        <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-[#ebecf4] dark:border-l-[#aeaeae] flex flex-col pl-4">
          {/* SVG / NUMBER */}
          <div className="space-y-4 ">
            <p className="text-green-400">01</p>
          </div>
          {/* Header */}
          <div className="text-lg font-semibold py-2 lg:py-6">
            <h1>Data-Driven HR Insights</h1>
          </div>
          {/* Description */}
          <div className="dark:text-muted-foreground">
            <p>Leveraging my tech skills, I can analyze HR data to identify trends, uncover valuable insights, and provide data-driven recommendations for improving HR processes.</p>
          </div>
        </div>
            {/*  */}
            <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-[#ebecf4] dark:border-l-[#aeaeae] flex flex-col pl-4">
          {/* SVG / NUMBER */}
          <div className="">
            <p className="text-green-400">02</p>
          </div>
          {/* Header */}
          <div className="text-lg font-semibold py-2 lg:py-6">
            <h1>Driving Innovation in HR</h1>
          </div>
          {/* Description */}
          <div className="dark:text-muted-foreground">
            <p>I&apos;m passionate about exploring and implementing innovative HR solutions, such as AI-powered recruitment tools or employee engagement platforms, to drive efficiency and improve outcomes.</p>
          </div>
        </div>
            {/*  */}
            <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-[#ebecf4] dark:border-l-[#aeaeae] flex flex-col pl-4">
          {/* SVG / NUMBER */}
          <div className="">
            <p className="text-green-400">03</p>
          </div>
          {/* Header */}
          <div className="text-lg font-semibold py-2 lg:py-6">
            <h1>A Continuous Learner</h1>
          </div>
          {/* Description */}
          <div className="dark:text-muted-foreground">
            <p>As a self-taught developer, I&apos;m a fast learner and highly adaptable. I&apos;m eager to embrace new technologies and challenges, and I believe in continuous learning and professional growth.</p>
          </div>
        </div>
            {/*  */}
            <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-[#ebecf4] dark:border-l-[#aeaeae] flex flex-col pl-4">
          {/* SVG / NUMBER */}
          <div className="">
            <p className="text-green-400">04</p>
          </div>
          {/* Header */}
          <div className="text-lg font-semibold py-2 lg:py-6">
            <h1>Human-Centered Technology</h1>
          </div>
          {/* Description */}
          <div className="dark:text-muted-foreground">
            <p>My HR background allows me to ensure a human-centered approach to all tech solutions, prioritizing user experience and creating tools that are both effective and enjoyable to use.</p>
          </div>
        </div>
       </div>
           
      </section>
    </main>
  );
}
