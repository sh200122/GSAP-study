"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};

const randomX = gsap.utils.random(-200, 200, 1, true);

const Test05 = (props: Props) => {
  const [endX, setEndX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);

  const [isTriangle, setIsTriangle] = useState(0);

  // useGSAP(()=>{
  //     gsap.to(boxRef.current,{
  //         x:endX,
  //         duration:1,
  //         ease:'power2.inOut'
  //     })
  // },[endX])  // 方块随着endX值得变化而移动

  // useGSAP(()=>{
  //     gsap.to(boxRef.current,{
  //         x:endX,
  //         duration:1,
  //         ease:'power2.inOut'
  //     })
  // },{dependencies:[endX],scope:containerRef})

  useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: endX,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { dependencies: [endX], revertOnUpdate: true }
  ); // 每次更新都会重新执行

  useGSAP(() => {
    gsap.to(ballRef.current, {
      x: endX,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [endX]); //更新不会重新执行

  const handleClick = () => {
    setIsTriangle(prev=>prev+360);
    gsap.to(triangleRef.current, {
      rotation: isTriangle+360,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="w-full h-[500px] bg-slate-300 flex flex-col justify-center items-center mt-[100px]"
      ref={containerRef}
    >
      <button
        onClick={() => {
          setEndX(randomX());
        }}
      >
        random
      </button>
      <div
        ref={boxRef}
        className="w-[100px] h-[100px] bg-sky-400 flex justify-center items-center"
      >
        {endX}
      </div>
      <div
        ref={ballRef}
        className="w-[100px] h-[100px] bg-sky-400 flex justify-center rounded-full items-center"
      >
        {endX}
      </div>
      <div
        ref={triangleRef}
        onClick={handleClick}
        className="w-0 h-0 mt-10 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-sky-400 flex justify-center items-center relative"
      >
        <span className="absolute top-[40px] text-white">三角</span>
      </div>
    </div>
  );
};

export default Test05;
