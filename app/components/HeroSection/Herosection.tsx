import React from "react";
import Image from "next/image";

const Herosection: React.FC = () => { 
    return (
        <div className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/abovefold.jpg" 
                    alt="Sybotstack Background" 
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Centered Content Overlay */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="text-center text-white text-5xl font-bold mb-8">
                    <h1 className="leading-tight"> 
                        About Us
                    </h1>
                </div>
                <div className="text-center text-white text-2xl mb-12">
                    <p className="leading-relaxed">
                        Discover our journey, values, and the work we do.
                    </p>
                </div>
                
                {/* CTA Button */}
                <div>
                    <button className="bg-[#051023] hover:bg-[#121837] cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Herosection;
