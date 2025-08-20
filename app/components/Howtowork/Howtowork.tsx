"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../container/Container'

const Howtowork = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const cards = containerRef.current?.querySelectorAll('.card-item')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const data = [
        {
            title: "Seamless Remote Work Setup",
            description: "Empower your team with secure, high-speed access to all tools and files—anytime, anywhere.",
            cta: "Set up now",
            image: "/images/1.jpg"
        },
        {
            title: "Data Backup & Recovery",
            description: "Ensure business continuity with automated, encrypted backups and fast recovery solutions.",
            cta: "Backup today",
            image: "/images/2.jpg"
        },
        {
            title: "Modernize Your Infrastructure",
            description: "Upgrade your network and hardware with scalable, high-performance IT infrastructure tailored for growth.",
            cta: "Upgrade now",
            image: "/images/3.webp"
        },
    ];


    return (
        <div className="pb-24">
            <Container>
                {/* Perfect heading here */}
                <div className="text-start md:pt-18 py-6 ">
                    <h2 className="text-4xl font-bold text-white mb-4">How Our IT Services Work for You</h2>
                    <p className="text-lg text-gray-500 max-w-2xl ">
                        Discover the core ways we empower your business with reliable IT support, secure cloud solutions, robust cybersecurity, and seamless network management.
                    </p>
                </div>
                <div ref={containerRef} className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='card-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl rounded-xl  flex flex-col bg-[#051023] w-full'
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className='flex-1 flex flex-col p-4'>
                                <div className='relative h-[181px]  mx-auto  w-full rounded-lg overflow-hidden mb-8 group'>
                                    <Image src={item.image} alt={item.title} fill className='object-cover transition-transform duration-500 group-hover:scale-110' />
                                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h1 className='text-2xl mb-6 font-semibold transition-colors duration-300 group-hover:text-blue-600'>{item.title}</h1>
                                <p className='text-md mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-800'>{item.description}</p>
                            </div>
                            <Link
                                href="#"
                                className="px-6 my-8 text-end py-2 text-gray-600 leading-0.5 underline"
                            >
                                {item.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Howtowork