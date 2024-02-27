"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-[grey] mb-6 lg:text-6xl sm:text-6xl text-4xl font-extrabold">
            Hello I am{" "}
            <span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Taha",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "a web developer ",
                  2000,
                  "a Keyword researcher",
                  2000,
                  "a Prompt generator",
                  1000,
                  "Blog writer",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{ color: "red" }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[white] text-lg lg:text-xl mb-6">
            {" "}
            Being creative is my passion,Enthusiastic and always looking for
            oppurtunity in multiple fields
          </p>
          <div className="">
            <a
              href="https://www.linkedin.com/in/taha-hussain-61aa9b253/"
              className="px-6 py-3 hover:bg-blue-500 mr-4 rounded-[10px] bg-[white] text-[black] bg-gradient-to-br from-blue-300 via-purple-500"
            >
              Hire Me
            </a>{" "}
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="px-7 py-4 rounded-[10px] mb-10 hover:bg-blue-500 bg-[white] text-[black]"
            >
              {" "}
              My CV
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          {/* <Image
            src="/image/next.svg"
            alt="pfp image"
            width={300}
            height={300}
          /> */}
          <div className=" rounded-full w-[300px] h-[200] lg:w-[500px] lg:h-[500px] relative">
            <img
              className="bg-[grey] rounded-full w-[300px] h-[200] lg:w-[500px] lg:h-[500px] relative"
              src="pfp.jpg"
              alt="Next.js"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
