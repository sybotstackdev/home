// components/NavBar.jsx
"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: "HOME", route: "/" },
        { name: "ABOUT", route: "/about-us" },
        { name: "SERVICES", route: "/services" },
        { name: "CONTACT", route: "/contact" }
    ]

    const isActive = (route: string) => {
        if (route === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(route)
    }

    return (
        <header className={`fixed ${isScrolled ? 'top-0' : 'top-4'} left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-5'}`}>
            <div className="mx-auto py-2 flex h-16 max-w-screen-xl items-center justify-between px-4">
                {/* Logo / Brand */}
                <div className="flex items-center">
                    <Link href="/">
                        <div className='flex gap-2 items-center justify-center hover:scale-105 transition-transform duration-200'>
                            {/* <div className='flex items-center justify-center gap-4 p-2 bg-[#121837] rounded-md w-10 h-10 hover:bg-[#1a2a4a] transition-colors duration-200'>
                                <Sparkle className='text-[white]' size={40} />
                            </div>
                            <p className='text-white text-lg font-semibold '>SYBOTSTACK</p> */}
                            <Image src="/logo/sywhite.png" alt="Sybotstack" width={200} height={150} />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden items-center space-x-6 text-sm font-light text-white lg:flex">
                    {navItems.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.route} 
                            className={`transition-all duration-200 hover:scale-105 ${
                                isActive(item.route) 
                                    ? 'text-blue-400 font-medium' 
                                    : 'hover:text-gray-300'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop "HIRE US" Button */}
                <div className="hidden lg:block">
                    <Link
                        href="mailto:sybotstack@gmail.com"
                        className="bg-white px-6 py-4 text-xs tracking-wide font-light text-black transition-all duration-200 hover:bg-gray-200 hover:scale-105 transform"
                        onClick={() => setIsOpen(false)}
                    >
                        HIRE US
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="text-white lg:hidden hover:scale-110 transition-transform duration-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="absolute inset-0 bg-black/95">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:scale-110 transition-transform duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex h-full items-center justify-center">
                        <ul className="space-y-8 text-center">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.route}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-light transition-all duration-200 hover:scale-105 ${
                                            isActive(item.route)
                                                ? 'text-blue-400 font-medium'
                                                : 'text-white hover:text-gray-300'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="mailto:sybotstack@gmail.com"
                                    className="mt-8 inline-block rounded-none bg-white px-8 py-4 text-sm font-light text-black transition-all duration-200 hover:bg-gray-200 hover:scale-105 transform"
                                    onClick={() => setIsOpen(false)}
                                >
                                    HIRE US
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
