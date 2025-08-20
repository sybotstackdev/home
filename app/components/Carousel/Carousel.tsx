"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'

const MultiCarousel = dynamic(() => import('react-multi-carousel'), { ssr: false })

const Carousel = ( {children}: {children: React.ReactNode} ) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
  }

  return (
    <div className="w-full">    
      <MultiCarousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container h-[400px]"
        dotListClass="custom-dot-list-style "
        itemClass="carousel-gap"
      >
        {children}
      </MultiCarousel>
    </div>
  )
}

export default Carousel