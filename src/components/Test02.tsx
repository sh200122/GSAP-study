/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-02-24 17:08:50
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-02-25 11:25:30
 * @FilePath: \sh-next-app\src\components\Test02.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export default function Test02({}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger:{
        trigger: boxRef.current,
        start: "top center",
        end: "bottom 200px",
        // end: "+=200px",
        scrub: true,
        markers: true,
        toggleActions: "restart pause play pause",
      },
      x:600,
      rotation:360,
      duration:3  
    });
  }, []);

  return (
    <>
      <div className="h-screen"></div>
      <div
        className="ml-10 mt-96 w-36 h-36 bg-sky-700 rounded-lg shadow-md"
        ref={boxRef}
      ></div>
      <div className="h-screen"></div>
    </>
  );
}
