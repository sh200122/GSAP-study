"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Test03() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slider1Ref = useRef<HTMLDivElement>(null);
    const slider2Ref = useRef<HTMLDivElement>(null);
    const slider3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        [slider1Ref,slider2Ref,slider3Ref].forEach((sliderRef)=>{
            gsap.to(sliderRef.current, {
                backgroundColor:'gray',
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top center",
                    end: "bottom center",
                    markers: true,
                    toggleActions: "play reverse play reverse",
                    scroller:containerRef.current
                }
            });
        })
        
    }, []);

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div 
                ref={containerRef} 
                className="relative w-[400px] h-[300px] overflow-y-scroll"
            >
                <div 
                    ref={slider1Ref}
                    className="w-full h-[300px] bg-red-500 flex items-center justify-center"
                >滑块1</div>
                <div 
                    ref={slider2Ref}
                    className="w-full h-[300px] bg-green-500 flex items-center justify-center"
                >滑块2</div>
                <div 
                    ref={slider3Ref}
                    className="w-full h-[300px] bg-blue-500 flex items-center justify-center"
                >滑块3</div>
            </div>
        </div>
    );
}