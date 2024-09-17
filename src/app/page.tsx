import Nabvar  from '@/app/components/Nabvar'
import { TypewriterEffectSmooth } from "../app/components/ui/typewriter-effect";

import AboutMe from './components/AboutMe';

export default function Home() {
  
  const words = [
    {
      text: "I am",
    },
    {
      text: "a",
    },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  return (
    <div className='bg-black' >
                <Nabvar/>
                <p className='text-white font-serif text-center'> PortFolio is on Working Stage Please Wait for some time...</p>
                <div className="flex flex-col items-center  gap-5 justify-center h-[30rem]  ">
      <p className="   ">
        <span className=" font-sans  text-3xl text-zinc-200 ">  Hey! I am <span className='text-purple-400'> Piyush Khare...</span> </span>

      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="/resume.pdf" download>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
       Resume 
        </button>
        </a>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
         Hire me 
        </button>
      </div>
      
                                                                                         </div>    
         
            <AboutMe/>
    </div>
  );
}
