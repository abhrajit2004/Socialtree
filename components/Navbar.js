"use client";
import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';

const poppins = localFont({
    src: "../app/fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
});

const poppinsmedium = localFont({
    src: "../app/fonts/Poppins-Medium.ttf",
    variable: "--font-poppins-medium",
    weight: "100 900",
  });
  

const Navbar = () => {

    const pathname = usePathname();

    const showNavbar = ["/", "/generate", "/users"].includes(pathname);
    

    return (
        <>
            {showNavbar &&
                <nav className='bg-white flex justify-between w-[80vw] fixed top-10 right-[10vw] rounded-full px-7 py-5'>
                    <div className="logo flex gap-20 items-center">
                        <Link href={"/"}>
                            <span className={`text-5xl  ${poppins.className}`}>Socialtree</span>
                        </Link>

                        <ul className={`flex gap-10 ${poppinsmedium.className}`}>
                            <Link href={"/"}><li>Home</li></Link>
                            <Link href={"/users"}><li>All Users</li></Link>
                            {/* <Link href={"/"}><li>Marketplace</li></Link>
                            <Link href={"/"}><li>Discover</li></Link>
                            <Link href={"/"}><li>Pricing</li></Link>
                            <Link href={"/"}><li>Learn</li></Link> */}
                        </ul>
                    </div>

                    <div className={`flex gap-2 ${poppinsmedium.className}`}>
                        <button className="login bg-[#eff0ec] p-4 rounded-lg font-bold">Log in</button>
                        <button className="signup bg-[#1e2330] text-white p-4 rounded-full font-bold">Sign Up free</button>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar
