import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className=" h-screen flex flex-col   space-y-4 max-w-screen-sm place-items-start mx-auto p-4 ">
      <h1 className="text-lg ">About</h1>
      <p>A few things you should know</p>

      <div className="flex flex-col lg:flex-row text-start w-full h-fit space-x-2 text-sm">
        <div><p>Intro</p></div>
        <div className="space-x-2">
        <Image
          alt="hero-profile-image"
          src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
          width={100}
          height={100}
          style={{
            maxWidth: "100%",
            height: "40%",
          }}
          className="rounded-lg object-cover w-14  "
          priority
        />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat assumenda ut iusto commodi ipsa aspernatur expedita placeat! Rem sunt amet illum! Corrupti, nesciunt! Consequuntur vero fugiat odit autem quas.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quia laborum, eligendi adipisci minus accusamus sequi labore eius! Autem voluptatem repellendus iste quas vero temporibus tenetur sit natus, ex aliquam!  
        </p>
        </div>
      
      </div>
      <div className="flex flex-col lg:flex-row text-start w-full h-fit space-x-2 text-sm">
        <div><p>Skills</p></div>
        <div className="space-x-2">
        
        </div>
      </div>

    </section>
  );
}

export default page;
