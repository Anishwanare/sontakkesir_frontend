import React from "react";

import Dropdown from "./Dropdown";

const Hero = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-12 text-center flex bg-zinc-100 md:flex-row flex-col-reverse">
        <div className="flex justify-center mb-8 flex-col flex-1 rounded-xl">
          <img
            src="/logo.jpeg"
            alt="Illustration"
            className="h-96 object-contain bg-transparent rounded-xl"
          />
        </div>
        <div className="flex flex-col flex-1 backdrop align-middle justify-center gap-5">
          <h2 className="text-zinc-700 dark:text-zinc-600 text-lg">
            {/* Govt. Authorised */}
          </h2>
          <h1 className="text-orange-600 dark:text-orange-400 text-4xl font-bold mb-4">
            Chasing Our Vision for a Brighter Future !
          </h1>
          <p className="text-zinc-700 dark:text-zinc-600 text-lg mb-2">
            Std 1st to 7th
          </p>
          <p className="text-zinc-500 dark:text-zinc-600">
            (Marathi, English, SemiEnglish)
          </p>
        </div>
      </main>
      {/* <section className="bg-zinc-100 py-20 md:px-[100px] px-0">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="space-x-4">
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              केंद्रस्तरीय गुणवत्तासाधक यादी – 2024
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              राज्यस्तरीय गुणवत्तासाधक यादी – 2024
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              जिल्हा / विभागस्तरीय गुणवत्तासाधक यादी – 2024
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              Interim Result – 2024
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              Answer Key – 2024
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              #Announcement
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              अभिप्राय (Feedback Form)
            </a>
          </div>
          <div className="space-x-4">
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              Login
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              Downloads
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-600 font-bold hover:underline"
            >
              #How To
            </a>
          </div>
          <p className="text-blue-600 dark:text-blue-600 font-bold hover:underline">
            #Images मंथन पारितोषिक वितरण समारंभ – २०१९
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
