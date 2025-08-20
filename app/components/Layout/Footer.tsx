
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    const navItems = [
        { name: "HOME", route: "/" },
        { name: "ABOUT", route: "/about-us" },
        { name: "SERVICES", route: "/services" },
        { name: "CONTACT", route: "/contact" }
    ];

    return (
        <div className="relative bg-[#0C182A] shadow-2xl transform-gpu">
            <div className="px-4 py-12 text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 backdrop-blur-sm">
                <div className='flex gap-2 items-center justify-center'>
                    {/* <div className='flex items-center justify-center gap-4 p-2 bg-[#121837] rounded-md w-10 h-10'>
                        <Sparkle className='text-[white]' size={40} />
                    </div>
                    <p className='text-white text-lg font-semibold '>SYBOTSTACK</p> */}
                    <Image src="/logo/sywhite.png" alt="Sybotstack" width={200} height={150} />
                </div>  
                <nav className="items-center justify-center my-8 space-x-4 md:space-x-18 text-sm font-light text-white flex">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.route} className="hover:text-gray-300 transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <p className="text-center text-sm mt-4">All rights reserved © 2025</p>
            </div>
        </div>
    );
};

export default Footer;
