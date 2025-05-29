import Image from "next/image";
import img from "./assets/car hearts.png"
import img2 from "./assets/me.jpg"
import img3 from "./assets/rand.jpg"
import img4 from "./assets/random.jpg"
import { GiCartwheel } from "react-icons/gi";

export default function Home() {
  return (
   <div>
    <div className="flex flex-row bg-gradient-to-t via-blue-100 from-blue-300 to-blue-50 text-blue-700">
      <div className="flex-col animate-fade-in mt-65 flex justify-center items-center flex-3/4 ">
     
      <h1 style={{fontFamily:"serif",}}
      className="text-6xl flex flex-row flex-nowrap font-bold italic shadow-2xs text-[#406FE6FF] ">
        warm wheels auto parts 
        <GiCartwheel className="text-8xl ml-2 text-[#3f548b]"></GiCartwheel>
        </h1>

      <p className="text-[#2f406b]"
      style={{fontFamily:"cursive"}}> 
      -its not broken just bent, stood true since 1967-
      </p>

<a href="home" className="mt-30 hover:after:content-['🚗-']
hover:after:ml-0.5
hover:after:border-2
hover:after:border-blue-500
hover:after:rounded-2xl
hover:after:animate-ping
hover:after:text-read-800  hover:bg-blue-300 hover:border-[#2f406b] hover:pr-0.5 transition duration-400 hover:border-4 hover:text-blue-600 bottom-40 r ring-blue-300 ring-2 px-8 py-1 border-2 rounded-2xl animate-bounce">
  get started </a>

  
      </div>

      <div  className=" "
      ><Image 
      className="mt-10 border-2 animate-down_slide h-130 border-blue-200 shadow-xl  opacity-85 rounded-bl-[30%]  "
     alt="heart made of hearts" 
      src={img}></Image>

<h1 className="fixed bottom-40 right-10 text-blue-900 opacity-70 underline animate-pulse hover:text-0.1 animate-slide_r3">show founders </h1>
/
<div className="flex border-l-blue-300 rounded-tl-4xl transition duration-1000  opacity-0 hover:opacity-85 mb-6 border-dotted border flex-col justify-center items-center my-2">
    <h1 className="text-blue-700 opacity-70">founders</h1>
/
      <div className="flex mb-3  space-x-10 flex-row justify-center item-center"> 
  
  
  
      <div className="flex-col text-[#212131] opacity-70 justify-center items-center">
        <Image 
   className="rounded-[40%] mb-1  border-2  border-blue-400 shadow-4xs shadow-green-300"
     alt="heart made of hearts" 
      src={img2}
      width={90}
      height={90}></Image>
      andrew muyunda
      
      </div>
      
      
      <div className="flex-col text-[#212131] opacity-70 justify-center items-center">
        <Image 
   className="rounded-[40%] border-2 border-blue-400 shadow-4xs shadow-green-300"
     alt="heart made of hearts" 
      src={img3}
      width={110}
      height={110}></Image>
      <p className="pl-5 py-2.5">202203202</p>
      
      </div>
      
      
     <div className="flex-col text-[#212131] opacity-60 justify-center items-center">
        <Image 
   className="rounded-[40%] mt-3.5 mb-1 border-2  border-blue-400 shadow-4xs shadow-green-300"
     alt="heart made of hearts" 
      src={img4}
      width={120}
      height={130}></Image>
      computer science
      
      </div>

      </div>
      
  </div>

   
      
      </div>

      </div>
   </div>
  );
}
