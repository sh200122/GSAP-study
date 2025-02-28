/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-02-26 12:24:11
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-02-27 13:49:48
 * @FilePath: \sh-next-app\src\components\Example01.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Example01({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const leftItem1Ref = useRef<HTMLDivElement>(null);
  const leftItem2Ref = useRef<HTMLDivElement>(null);
  const leftItem3Ref = useRef<HTMLDivElement>(null);
  const leftItem4Ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const leftItems = [
        leftItem1Ref,
        leftItem2Ref,
        leftItem3Ref,
        leftItem4Ref,
      ];

      [item1Ref, item2Ref, item3Ref, item4Ref].forEach((itemRef, index) => {
        gsap.to(itemRef.current, {
          scrollTrigger: {
            trigger: itemRef.current,
            start: "center 755px",
            end: "bottom center",
            scrub: true,
            scroller: containerRef.current,
            onEnter: () => {
              // 进入时设置右侧快的透明度为1
              gsap.to(itemRef.current,{
                opacity:1,
                duration:.3,
                ease:"power2.inOut",
              })
              // 隐藏所有左侧项目
              leftItems.forEach((item) => {
                gsap.to(item.current, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.inOut",
                });
              });
              // 显示当前项目
              gsap.to(leftItems[index].current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.inOut",
              });
            },
            onLeave: () => {
              // 离开时设置右侧快的透明度为0
              gsap.to(itemRef.current,{
                opacity:0,
                duration:.3,
                ease:"power2.inOut",
              })
            },
            onEnterBack: () => {
              // 从下方返回时恢复透明度为1
              gsap.to(itemRef.current,{
                opacity:1,
                duration:.3,
                ease:"power2.inOut",
              })
            },
            onLeaveBack: () => {
              // 从上方离开时设置透明度为0
              gsap.to(itemRef.current,{
                opacity:0,
                duration:.3,
                ease:"power2.inOut",
              })
              //向上滚动离开时，显示上一个项目
              const prevIndex = index - 1;
              if (prevIndex >= 0) {
                leftItems.forEach((item) => {
                  gsap.to(item.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                  });
                });
                gsap.to(leftItems[prevIndex].current, {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.inOut",
                });
              }
            },
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div
        ref={containerRef}
        className="h-screen w-screen bg-sky-600 overflow-y-auto "
      >
        <div className="w-[410px] h-[600px] bg-violet-700 px-[5px] sticky left-16 top-[155px]">
          <div
            className="w-[400px] h-[600px] bg-orange-300 flex justify-center items-center text-4xl text-black font-semibold absolute top-0 left-0 ml-[5px]"
            ref={leftItem1Ref}
          >
            A
          </div>
          <div
            className="w-[400px] h-[600px] bg-orange-300 flex justify-center items-center text-4xl text-black font-semibold absolute top-0 left-0 ml-[5px]"
            ref={leftItem2Ref}
          >
            B
          </div>
          <div
            className="w-[400px] h-[600px] bg-orange-300 flex justify-center items-center text-4xl text-black font-semibold absolute top-0 left-0 ml-[5px]"
            ref={leftItem3Ref}
          >
            C
          </div>
          <div
            className="w-[400px] h-[600px] bg-orange-300 flex justify-center items-center text-4xl text-black font-semibold absolute top-0 left-0 ml-[5px]"
            ref={leftItem4Ref}
          >
            D
          </div>
        </div>
        <div
          className="w-[400px] h-[600px] bg-orange-100 flex justify-center items-center text-4xl text-black font-semibold ml-[480px] mt-[-445px] opacity-1"
          ref={item1Ref}
        >
          内容1
        </div>
        <div
          className="w-[400px] h-[600px] bg-orange-200 flex justify-center items-center text-4xl text-black font-semibold ml-[480px] opacity-0"
          ref={item2Ref}
        >
          内容2
        </div>
        <div
          className="w-[400px] h-[600px] bg-orange-300 flex justify-center items-center text-4xl text-black font-semibold ml-[480px] opacity-0"
          ref={item3Ref}
        >
          内容3
        </div>
        <div
          className="w-[400px] h-[600px] bg-orange-400 flex justify-center items-center text-4xl text-black font-semibold ml-[480px] mb-[155px] opacity-0"
          ref={item4Ref}
        >
          内容4
        </div>
      </div>
    </>
  );
}

export default Example01;
