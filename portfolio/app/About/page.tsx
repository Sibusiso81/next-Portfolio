
import Image from "next/image";
import React from "react";
import HTML5 from "../Components/html";
import JavaScript from "../Components/javascript";
import CSS from "../Components/css";
import Stack from "../Components/Stack/stack";
import TailwindCSS from "../Components/tailwind";
import Nextjs from "../Components/next";
import Supabase from "../Components/supabase";
import Footer from "../Components/Footer/Footer";

function page() {
  return (
  <>
    <section className=" h-fit  flex flex-col   space-y-4 max-w-screen-sm place-items-start mx-auto p-4 md:text-md  ">
      <h1 className="text-lg ">About</h1>
      <p>A few things you should know</p>

      <div className="flex flex-col lg:flex-row text-start w-full h-fit text-sm space-y-6 ">
        <div>
          <p>Intro</p>
        </div>
        <div className="w-full h-fit space-y-3 ">
          <div className="max-h-max 
          ">
          {/* <Image
            alt="hero-profile-image"
            src="https://i.ibb.co/TYBwyQ7/IMG-6708.jpg"
            width={200}
            height={200}
            style={{
              maxWidth: "100%",
              height: "40%",
            }}
            className="rounded-lg object-cover w-full  md:hidden "
            priority
          /> */}
          <Image
            alt="hero-profile-image"
            src="https://i.ibb.co/Y23gG4W/IMG-2894.jpg"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            className="rounded-lg object-center lg:object-center w-full max-h-fit sm:hidden md:block "
            priority
          />
          </div>
          <p className="text-pretty md:text-md ">
            I&apos;m a determined and curious individual with a drive to make a
            meaningful impact through my work. My journey combines my human
            resources background with my self-taught web development skills,
            allowing me to explore creative and practical solutions to
            real-world problems.
            <br />
            <br />
            I&apos;m passionate about applying my knowledge to improve lives,
            whether by building accessible digital tools, enhancing education
            through technology, or supporting the growth of the township
            economy. I thrive at the intersections of ideas, combining
            innovation and inclusivity to address pressing challenges.
            <br />
            <br />
            My experiences, including participating in hackathons and working on
            collaborative projects, reflect my commitment to sustainability and
            making technology accessible to all. I believe in being resourceful,
            using free tools and solutions effectively, and adapting as
            opportunities grow.
            <br />
            <br />
            For me, it&apos;s not just about learning but applying what I know
            to build solutions that matter. I see every project as a chance to
            grow, innovate, and leave a lasting impact. This is my journey, and
            I&apos;m excited to keep pushing boundaries, one meaningful project
            at a time
          </p>
        </div>
      </div>
    <div className="grid grid-cols-4 w-full p-2  gap-y-4 md:gap-x-4">
      <h1 className="col-span-4">Stack</h1>
    <Stack 
    svg={<HTML5 className="w-28 h-28 mx-auto "/>}
    name="HTML5"
    discription="Language"
    />
    <Stack 
    svg={<CSS className="w-28 h-28 mx-auto "/>}
    name="CSS"
    discription="Language"
    />
    <Stack 
    svg={<JavaScript className="w-28 h-28 mx-auto "/>}
    name="Javascript"
    discription="Language"
    /><Stack 
    svg={<TailwindCSS className="w-28 h-28 mx-auto "/>}
    name="Tailwind CSS"
    discription="Framework"
    /><Stack 
    svg={<Nextjs className="w-28 h-28 mx-auto "/>}
    name="Next js"
    discription="Framework"
    />
    <Stack 
    svg={<Supabase className="w-28 h-28 mx-auto "/>}
    name="Supabase"
    discription="Database"
    />
    </div>
    <div className="w-full h-[2px] bg-neutral-800 "></div>
        <div className="flex flex-row md:flex-row justify-between p-2 text-xs md:text-sm text-wrap space-x-4 md:p-4 w-full">
         
          <p>@ 2024 Sibusiso Zulu</p>
          <p>Made with care and plenty coffee</p>
        </div>
    </section>
   
  </>
  );
}

export default page;
