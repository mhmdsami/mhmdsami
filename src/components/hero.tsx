"use client";

import config from "@/shared/data/config";
import { useEffect, useState } from "react";

export default function Hero() {
  const { name, greetings, tags } = config;
  const [tag, setTag] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    setTag(tags[Math.floor(Math.random() * tags.length)]);
  }, [greetings, tags]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black-dark to-black px-8 md:px-14 lg:px-20 xl:px-52">
      <main className="my-4 flex flex-col justify-between sm:my-28 md:flex-row">
        <div>
          <div className="text-4xl lg:text-5xl">
            {greeting}!
            <span className="inline-block origin-bottom-right animate-wave select-none">
              &#128075;
            </span>
            <br />
            I&apos;m <span className="font-emphasis text-red">{name}</span>
          </div>
          <div className="text-md flex select-none items-end text-gray xl:text-xl">
            {tag}
          </div>
        </div>
        <p className="mt-5 text-lg md:m-0 md:w-1/2 lg:text-xl">
          A final year CSE undergrad who loves to{" "}
          <span className="font-bold">craft web experiences</span>. Always ready
          to take up challenges to{" "}
          <span className="font-bold">
            make the internet a little better than before.
          </span>
        </p>
      </main>
      <div className="flex animate-bounce cursor-pointer select-none place-content-center pt-20 text-red">
        <div
          onClick={() => {
            document.querySelector("#skills")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
