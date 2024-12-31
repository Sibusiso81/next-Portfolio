"use client";
import {
  ArrowDown,
  CircleArrowUp,
  Code,
  GithubIcon,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ModeToggle } from "./Components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import Github from "./Components/github";
import Card from "./Components/Card/Card";
import { BorderBeam } from "@/components/ui/border-beam";
import WordRotate from "@/components/ui/word-rotate";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [time, setTime] = useState<string>();
 

  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    
    console.log(
      `current time :${hours % 12 || 12}:${mins < 10 ? "0" : ""}${mins}`
    );
    setTime(
      `${hours % 12 || 12}:${mins < 10 ? "0" : ""}${mins} ${
        hours >= 12 ? "PM" : "AM"
      }`
    );
    //hours % 12 || 12 is used to convert 24-hour clock to 12-hour
  }
  useEffect(() => {
    getTime();
    const interavalid = setInterval(getTime, 60000);
    return () => clearInterval(interavalid);
  }, []);
 

  return (
    <main className="flex flex-col space-y-10 overflow-x-hidden ">
      
      <section className="w-screen h-fit  p-4 pt-4 bg-white dark:bg-neutral-950 text-black dark:text-[#eaeaea] overflow-x-hidden ">
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
        <div className="flex flex-col   pt-10 lg:pt-20 space-x-2 md:pl-4 lg:pl-14 xl:pl-20 ">
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
                  <div
                    className={`bg-green-400 rounded-full w-4 h-4 animation-pulse ${
                      isOpen ? "hidden" : ""
                    }`}
                  />
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
          <div className=" font-bold font-mono pt-10 max-w-screen-lg lg:justify-center mx-auto">
            <h1 className="text-xl md:text-3xl ">
              Hi I&apos;m Sibusiso, an aspiring Human Resources practitioner
              with a passion for fostering connections and building impactful
              solutions., On my path toward mastering the art of people
              management&#44;I&apos;ve embraced the exciting world of web
              development to enhance my skill set and bring innovative ideas to
              life.
            </h1>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-800  mt-20 md:mt-32 lg:mt-48 xl:mt-72  "></div>
        <div className="flex flex-col md:flex-row justify-between p-2">
          {/* <p>Based on Johannesburg &#44;South Africa</p> */}
          <p>Based in Johannesburg &#44;South Africa</p>
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
                width={55}
                height={55}
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
      <section className="w-screen h-fit    p-4  lg:p-20 font-mono  ">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold space-y-6 pb-14 lg:pb-20">
          {" "}
          How I Can Add Value to Your Team
        </h1>
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
              <p>
                Leveraging my tech skills&#44; I can analyze HR data to identify
                trends&#44; uncover valuable insights&#44; and provide
                data-driven recommendations for improving HR processes.
              </p>
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
              <p>
                I&apos;m passionate about exploring and implementing innovative
                HR solutions&#44; such as AI-powered recruitment tools or
                employee engagement platforms&#44; to drive efficiency and
                improve outcomes.
              </p>
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
              <p>
                As a self-taught developer&#44; I&apos;m a fast learner and
                highly adaptable. I&apos;m eager to embrace new technologies and
                challenges&#44; and I believe in continuous learning and
                professional growth.
              </p>
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
              <p>
                My HR background allows me to ensure a human-centered approach
                to all tech solutions&#44; prioritizing user experience and
                creating tools that are both effective and enjoyable to use.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen max-w-screen-lg h-screen justify-center flex flex-col space-y-4 p-6 lg:pl-20">
        <h1 className="text-xl md:text-3xl ">Projects </h1>
        <p className="text-muted-foreground text-wrap text-sm md:text-md">
          A selection of ideaas and thought ,to inspire ,learn and create
        </p>

        <div className="  rounded-md shadow-lg border-2   border-[#1d1d1d] flex flex-col md:flex-row ">
          <div className="space-y-3 w-full">
            <Image
              src={"https://i.ibb.co/y8WfTHB/Screenshot-2024-12-27-135704.png"}
              alt="project-image"
              width={700}
              height={700}
              quality={100}
              style={{
                maxHeight: "100%",
              }}
              className="w-full h-full  rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg"
            />
          </div>
          <div className="flex flex-col space-y-4 p-3 md:p-6 rounded-xl ">
            <div className="flex flex-row space-x-2  ">
              <p>Frontend✦</p>
              <p className="text-muted-foreground">Nov 25,2024</p>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="text-muted-foreground">
                Building a Portfolio site for a client{" "}
              </h1>
              <p>
                An attempt to transcend the avaerage cv and afford potential
                recruiters and colleborators a chance to know more
              </p>
              <div className="flex flex-row items-center space-x-4">
                <Link
                  href={
                    "https://github.com/Sibusiso81/Portfolio-01/blob/main/README.md"
                  }
                  title="View the GitHub repository"
                  aria-label="Visit my GitHub portfolio repository"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github
                    className="stroke-black dark:stroke-white"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={"https://portfolio-01-red.vercel.app/"}
                  title="View the GitHub repository"
                  aria-label="Visit live site"
                  target="_blank"
                >
                  <CircleArrowUp className="stroke-black dark:stroke-white rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen text-white font-poppins flex flex-col items-center justify-center  mt-10  lg:text-xl overflow-y-hidden mx-auto">
        <h1 className=" font-poppins font-semibold text-2xl lg:text-3xl text-center mx-auto p-5">
          Education & Certifications
        </h1>
        <div className="flex w-full h-full place-self-center justify-self-center mx-auto ">
          <div className="space-y-5 max-w-screen-sm  mx-auto justify-center items-center ">
            <Card
              insitution="Phoenix College of Johannesburg"
              duration="2020/09/12"
              qualifiation="Matric"
            />
            <Card
              insitution={"University of Johannesburg"}
              duration={" Present"}
              qualifiation={`Bachelor of Human Resources Managment `}
            />
            <Card
              insitution={"FreecodeCamp"}
              duration={"Nov-2024"}
              qualifiation={`Responsive web design`}
            />
          </div>
        </div>
      </section>
      <section className="w-screen h-fit  flex flex-col lg:pace-x-10 p-2   ">
        <div className="grid grid-cols-2 gap-y-4 lg:p-10">
          <div className="col-span-2 lg:col-span-1 flex lg:items-center   lg:w-fit">
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl lg:my-auto font-bold hidden lg:block">
              Let&apos;s <br />
              <WordRotate words={["Work", "Create", "Grow"]} />
              Together.
            </h1>
          </div>
          <div className="w-full col-span-2 lg:col-span-1  grid grid-cols-4 md:gap-x-4  gap-y-6">
            <div className="col-span-4 md:col-span-2 gap-y-4 ">
              <Link href={"/Contact"}>
                <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Contact
                  </span>
                  <BorderBeam
                    size={200}
                    duration={12}
                    colorFrom="#ececec"
                    colorTo="#0f0f0f00"
                    delay={9}
                    className="bg-neutral-800 p-10 "
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-4 md:col-span-2 text-center text-md   spcae-y-6 gap-y-2 md:gap-2">
              <div className="border-2 lg:border-0border-neutral-800 rounded-lg font-bold p-10">
                <p>{time}</p>
                <p>Johannesburg&#44;SA</p>
              </div>
              <div className="flex flex-row justify-between  mt-2 ">
                {/* <div className="border-2 lg:border-0border-1 border-neutral-800 rounded-lg p-5">
        <Linkedin />
        </div> */}
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl  ">
                  <Linkedin />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl ">
                  <Mail />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl ">
                  <GithubIcon />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4">
                  <Code />
                </div>
              </div>
            </div>

            <div className="col-span-6 text-white space-y-3 border-2 border-neutral-800 p-10 rounded-lg">
              <h1 className="text-[#0f0f0f0] font-semibold text-xl text-pretty">
                Check these link before you head Out
              </h1>
              <p className="text-[#0f0f0f0] font-semibold text-md mt-2">
                Index
              </p>
              <ul className=" lg:p-4 w-72 max-w-screen-sm grid grid-cols-2 gap-1 text-sm lg:text-md">
                <li>
                  <a href="#Home">Home</a>
                </li>

                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Skills">Value</a>
                </li>
                <li>
                  <a href="#Contact">Project</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sanele-ncube-823221236/"
                    target="_blank"
                  >
                    Linkdin
                  </a>
                </li>
                <li>
                  <a href="mailto:masanzawayne@gmail.com?subject=I would like to colleborate or work together">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="col-span-6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
