"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
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

        const cards = containerRef.current?.querySelectorAll('.team-member')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const teamData = [
        {
            id: "yash-kumar",
            title: "Yash Kumar",
            position: "Chief Executive Officer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "shubham-sharma",
            title: "Shubham Sharma",
            position: "Chief Technology Officer",
            image: "/images/managers/shubham.png"
        },
        {
            id: "vivek-kaler",
            title: "Vivek Kaler",
            position: "Full Stack Developer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "shubham-chanouria",
            title: "Shubham Chanouria",
            position: "Full Stack Developer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "abhaya-bhatia",
            title: "Abhaya Bhatia",
            position: "SEO Expert",
            image: "/images/managers/yash.webp"
        },
        {
            id: "tushar-kapoor",
            title: "Tushar Kapoor",
            position: "Full Stack Developer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "rajesh-kumar",
            title: "Rajesh Kumar",
            position: "Security Specialist",
            image: "/images/managers/yash.webp"
        },
        {
            id: "yash-gupta",
            title: "Yash Gupta",
            position: "IT Strategy Consultant",
            image: "/images/managers/yash.webp"
        },
        {
            id: "sahil-kumar",
            title: "Sahil Kumar",
            position: "DevOps Engineer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "priya-patel",
            title: "Priya Patel",
            position: "Senior Software Engineer",
            image: "/images/managers/yash.webp"
        },
        {
            id: "amit-singh",
            title: "Amit Singh",
            position: "Data Scientist",
            image: "/images/managers/yash.webp"
        },
        {
            id: "neha-verma",
            title: "Neha Verma",
            position: "Product Manager",
            image: "/images/managers/yash.webp"
        }
    ];

    return (
        <>
            {/* Team Members Section */}
            <div className="bg-[#051023] py-24">
                <Container>
                    <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                        <h3 className='text-white text-4xl font-bold mb-4'>Our Expert Team</h3>
                        <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                            Meet our dedicated professionals who bring expertise and innovation to every project we undertake.
                        </p>
                    </div>
                    <div ref={containerRef} className='flex justify-center'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl'>
                        {teamData.map((item, index) => (
                            <Link
                                key={index}
                                href={`/team/${item.id}`}
                                className='team-member opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 group block'
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className='flex flex-col items-center text-center'>
                                    <div className='relative w-28 md:w-32 border-2 border-white border-solid h-28 md:h-32 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300'>
                                        <Image src={item.image} alt={item.title} fill className='object-cover' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2'>{item.title}</h3>
                                    <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300'>{item.position}</p>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Team