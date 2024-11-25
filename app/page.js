"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const poppinsmedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "100 900",
});

export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState('socialtr.ee/')

  const createTree = () => {
    let link;
    if (username.includes('socialtr.ee/')) {
      if (username.split('/')[1] == '') {
        toast.error('Please enter a valid username!')
      }
      else {
        link = username.split('/')[1];
        router.push(`/generate?handle=${link}`)
      }
    }
    else {
      if (username == '') {
        toast.error('Please enter a valid username!')
      }
      else {
        link = `${username}`
        router.push(`/generate?handle=${link}`)
      }
    }

  }

  return (
    <>
      <ToastContainer />
      <main>
        <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
          <div className="flex flex-col justify-center ml-[10vw] gap-3 mt-32">
            <p className={`text-[#d2e823] font-bold text-5xl ${poppins.className}`}>Everything you are.</p>
            <p className={`text-[#d2e823] font-bold text-5xl ${poppins.className}`}>In one, simple link in</p>
            <p className={`text-[#d2e823] font-bold text-5xl ${poppins.className}`}>bio.</p>
            <p className={`text-[#d2e823] my-4 ${poppinsmedium.className}`}>Join 50M+ people using Socialtree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="input flex gap-2">
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className={`px-2 py-2 focus:outline-green-800 rounded-md ${poppinsmedium.className}`} placeholder="yourname" />
              <button onClick={() => createTree()} className={`bg-[#e9c0e9] rounded-full px-4 py-4 ${poppinsmedium.className} hover:bg-[#e3bae4]`}>Claim your Socialtree</button>
            </div>
          </div>
          <div className="mr-[10vw] mt-40">
            <img src="/home.png" alt="hero image" />
          </div>
        </section>
        <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
          <div className="ml-[10vw] mt-40">
            <img src="/home2.png" alt="hero image 2" />
          </div>
          <div className="flex flex-col justify-center items-start mr-[10vw] gap-3">
            <p className={`text-[#502274] font-bold text-5xl ${poppins.className}`}>Create and customize</p>
            <p className={`text-[#502274] font-bold text-5xl ${poppins.className}`}>your Socialtree in</p>
            <p className={`text-[#502274] font-bold text-5xl ${poppins.className}`}>minutes</p>
            <p className={`text-[#502274] my-4 ${poppinsmedium.className}`}>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
            <button className={`bg-[#502274] rounded-full px-4 py-4 ${poppinsmedium.className} text-white hover:bg-[#5e347f]`}>Get started for free</button>
          </div>
        </section>
        <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
          <div className="flex flex-col justify-center items-start ml-[10vw] gap-3 mt-32">
            <p className={`text-[#e9c0e9] font-bold text-5xl ${poppins.className}`}>Share your Socialtree</p>
            <p className={`text-[#e9c0e9] font-bold text-5xl ${poppins.className}`}>from your Instagram,</p>
            <p className={`text-[#e9c0e9] font-bold text-5xl ${poppins.className}`}>TikTok, Twitter and</p>
            <p className={`text-[#e9c0e9] font-bold text-5xl ${poppins.className}`}>other bios</p>
            <p className={`text-[#e9c0e9] my-4 ${poppinsmedium.className}`}>Add your unique Socialtree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
            <button className={`bg-[#e9c0e9] rounded-full px-4 py-4 ${poppinsmedium.className} hover:bg-[#e3bae4]`}>Get started for free</button>
          </div>
          <div className="mr-[10vw] mt-40">
            <img src="/home3.png" alt="hero image" />
          </div>
        </section>
      </main>
    </>
  );
}
