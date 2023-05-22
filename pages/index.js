import Head from "next/head";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import anthony from "../public/foto-perfil.png";

import Image from "next/image";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/website4.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
       <title>📁Portfolio📁</title>  
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className="text-2xl flex justify-center gap-14 py-3 text-teal-500 dark:text-teal-500">

              <a href="mailto:anthonycazaresh@gmail.com">
              <AiFillMail />
              </a>

              <a href="https://www.linkedin.com/in/anthony-cazares/">
              <AiFillLinkedin/>
              </a>

              <a href="https://github.com/AnthonyCazares/">
              <AiFillGithub />
              </a>
              
            </div>

            <h1 className="text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#proyectos"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Anthony Cazares
            </h2>
            
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            
            Hi 👋, this is my small portfolio website made with React & Tailwind, where you can find my projects listed below 👇.
            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={anthony} fill={true} style={{objectFit: "cover"}} />
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div>
            <h3 id="proyectos"className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">Projects</h3>
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img8}
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Social media clone made with TypeScript, React, Nextjs</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/clon-redsocial"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img7}
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Django CRUD</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/djangocrud"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
             
        
      
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img2}
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Queries of SQL COVID Project</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/SQL-COVID-Project/blob/main/COVID%20Proyecto%20portafolio.sql"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img3}
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Vaccine tracker Tableau Project</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://public.tableau.com/app/profile/anthony.cazares8368/viz/RastreadordeVacunasCOVID-19/Dashboard_"> Show on tableau web</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img4}
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Professional survey Power BI Project</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/Professional-Survey"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
             
        
      
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img5}
              />

              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Web Scraping with Python</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/Web-Scraping-with-python/blob/main/webscraping%20(1).ipynb"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
             
        
      
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img1}
              />

              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Bike Sales Excel Project</p>
        <button  class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"> <a href="https://github.com/AnthonyCazares/Bike-buyers-project"> Show on github</a></button>
      </div>
            </div>
            <div className="basis-1/3 flex-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
             
            
      
              <Image
                className="rounded-lg object-cover h-full w-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img6}
              />

              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Portfolio Code</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://github.com/AnthonyCazares/Portfolio"> Show on github</a></button>
      </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}

