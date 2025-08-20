"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { Star, Quote } from 'lucide-react'
// import Carousel from '../Carousel/Carousel'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('../Carousel/Carousel'), { ssr: false })

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animatedElements = entry.target.querySelectorAll('.testimonial-card')
                        animatedElements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fade-in')
                            }, index * 200)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    const testimonialsData = [
        {
          name: "David Martinez",
          position: "CTO, TechFlow Solutions",
          company: "TechFlow Solutions",
          content: "Sybotstack cut our costs and boosted system uptime. Impressive work.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Sarah Williams",
          position: "Operations Director",
          company: "Global Retail Corp",
          content: "Their cybersecurity team is fast, reliable, and always on call.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Michael Chen",
          position: "Founder & CEO",
          company: "InnovateTech",
          content: "Sybotstack's IT strategy helped us scale without stress.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Priya Nair",
          position: "VP Engineering",
          company: "NextGen Fintech",
          content: "Flawless cloud migration and attentive support. Highly recommend.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Alex Rivera",
          position: "IT Manager",
          company: "HealthSync",
          content: "Sybotstack brought structure and speed to our tech stack.",
          rating: 4,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Lena Gomez",
          position: "Founder",
          company: "eCom Hub",
          content: "Their dev team helped us launch on time and under budget.",
          rating: 4,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Jason Lee",
          position: "COO",
          company: "BuildNet",
          content: "Quick responses and excellent system integration support.",
          rating: 4.5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Fatima Ahmad",
          position: "Security Analyst",
          company: "DataGuard",
          content: "Top-tier incident response and proactive threat handling.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Robert Kim",
          position: "Product Manager",
          company: "MarketPilot",
          content: "Their insights drastically improved our backend reliability.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
          name: "Emily Tran",
          position: "Tech Lead",
          company: "GreenGrid",
          content: "A knowledgeable, collaborative, and efficient tech partner.",
          rating: 5,
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        }
      ];
      

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
            />
        ));
    };

    return (
        <div className="bg-[#0C182A] py-24">
            <Container>
                <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                    <h3 className='text-white text-4xl font-bold mb-4'>What Our Clients Say</h3>
                    <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                        Don{`'`}t just take our word for it. Here{`'`}s what our clients have to say about their experience working with us.
                    </p>
                </div>
                
                <div ref={containerRef} className='p-2'>
                    <Carousel>          
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className='testimonial-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 group bg-[#051023] rounded-t-3xl rounded-b-lg p-8 hover:border-blue-500/50 shadow-lg hover:shadow-xl'
                        >
                            <div className='flex flex-col h-full pb-2'>
                                {/* Quote Icon */}
                                <div className='mb-6'>
                                    <Quote className='text-blue-400 w-8 h-8' />
                                </div>
                                
                                {/* Rating */}
                                <div className='flex mb-4'>
                                    {renderStars(testimonial.rating)}
                                </div>
                                
                                {/* Content */}
                                <p className='text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
                                    {testimonial.content}
                                </p>
                                
                                {/* Author */}
                                <div className='flex items-center space-x-4'>
                                    <div className='w-12 h-12 bg-[#121837] rounded-full flex items-center justify-center'>
                                        <span className='text-white font-semibold text-sm'>
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className='text-white font-semibold text-sm'>
                                            {testimonial.name}
                                        </h4>
                                        <p className='text-gray-400 text-xs'>
                                            {testimonial.position}
                                        </p>
                                        <p className='text-blue-400 text-xs'>
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                </div>
                
                {/* Call to Action */}
                <div className='text-center mt-16'>
                    <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in'>
                        <h4 className='text-white text-2xl font-bold mb-4'>
                            Ready to Join Our Success Stories?
                        </h4>
                        <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
                            Let{`'`}s discuss how we can help transform your business with our innovative IT solutions.
                        </p>
                        <button className='bg-[#121837] hover:bg-[#051023] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 hover:scale-105 transform'>
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials 