/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-02-24 14:19:35
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-02-24 16:51:41
 * @FilePath: \sh-next-app\src\components\Test01.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {};

export default function Test01({}: Props) {
  return (
    <>
    <Demo01/>
    <Demo02/>
    <Demo03/>
    <Demo04/>
    </>
  )
}

const Demo01 = () => {
    const boxRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(boxRef.current, {
      x: 400,
      y: 200,
      rotation: 360,
      duration: 4,
      backgroundColor: "red",
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    tl.to(circleRef.current, {
      x: 400,
      y: 200,
      rotation: 360,
      duration: 4,
      backgroundColor: "red",
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);  // 空依赖数组确保动画只创建一次

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
        <div className="w-36 h-36 bg-sky-700 rounded-lg shadow-md" ref={boxRef}></div>
        <div className="w-36 h-36 bg-sky-700 rounded-full shadow-md mt-[100px]" ref={circleRef}></div>
    </div>
  );
}

const Demo02 = () => {
    const boxRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(boxRef.current, {
      x: 400,
      rotation: 360,
      duration: 4,
      backgroundColor: "red",
      ease: "power2.inOut",
    });

    tl.to(circleRef.current, {
      x: 400,
      rotation: 360,
      duration: 4,
      backgroundColor: "red",
      ease: "power2.inOut",
    });
  }, []);  // 空依赖数组确保动画只创建一次

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
        <div className="w-36 h-36 bg-sky-700 rounded-lg shadow-md" ref={boxRef}></div>
        <div className="w-36 h-36 bg-sky-700 rounded-full shadow-md mt-[100px]" ref={circleRef}></div>
    </div>
  );
}

const Demo03 = () => {
    const redBoxRef = useRef<HTMLDivElement>(null)
    const greenBoxRef = useRef<HTMLDivElement>(null)
    const blueBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(redBoxRef.current, {
            x: 400,
            duration: 3,
            backgroundColor: "red",
            ease: "power2.inOut",
        },1)
        tl.to(greenBoxRef.current, {
            x: 400,
            duration: 2,
            backgroundColor: "green",
            ease: "power2.inOut",
        },'<')
        tl.to(blueBoxRef.current, {
            x: 400,
            duration: 1,
            backgroundColor: "blue",
            ease: "power2.inOut",
        },'+=1')
        
    }, [])

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center gap-8">
            <div className="w-36 h-36 bg-red-500 rounded-lg shadow-md" ref={redBoxRef}>   
            </div>
            <div className="w-36 h-36 bg-green-500 rounded-lg shadow-md" ref={greenBoxRef}>
            </div>
            <div className="w-36 h-36 bg-blue-500 rounded-lg shadow-md" ref={blueBoxRef}>
            </div> 
        </div>
    )
}

const Demo04 = () => {
    const boxRef = useRef<HTMLDivElement>(null)
    const tlRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        // 创建时间轴并保存到ref中以便后续访问
        const tl = gsap.timeline({
            paused: true, // 创建时暂停
        })
        
        tl.to(boxRef.current, {
            x: 1000,
            duration: 10,
            rotation: 360,
            onComplete: () => {
                console.log("动画完成")
            }
        })
        
        tlRef.current = tl
    }, [])

    const handleStart = () => {
        tlRef.current?.play()
    }

    const handlePause = () => {
        tlRef.current?.pause()
    }

    const handleResume = () => {
        tlRef.current?.resume()
    }

    const handleReverse = () => {
        tlRef.current?.reverse()
    }

    const handleRestart = () => {
        tlRef.current?.restart()
    }

    return (
        <div className="flex flex-col h-screen w-full gap-4">
            <div className="w-36 h-36 bg-red-500 rounded-lg shadow-md" ref={boxRef}></div>
            <div className="flex gap-2">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleStart}
                >
                    开始
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handlePause}
                >
                    暂停
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleResume}
                >
                    恢复
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleReverse}
                >
                    倒放
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleRestart}
                >
                    重放
                </button>
            </div>
        </div>
    )
}
