'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {}

const Test04 = (props: Props) => {
    const ballRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        gsap.to('.ball',{
            y:200,
            duration:2,
            scale:2,
            repeat:-1,
            yoyo:true,
            ease:'power2.inOut'
        })
    },{scope:containerRef})  
    
  return (
    <div className='w-full h-[500px] bg-slate-300 p-10 mt-[100px]' ref={containerRef}>
        <div className='ball w-[100px] h-[100px] bg-sky-400 rounded-full flex justify-center items-center' ref={ballRef}>ball</div>
    </div>
  )
}

export default Test04