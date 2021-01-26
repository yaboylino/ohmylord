import React, { useEffect, useRef } from "react"
import backgroundVideo from "../public/video2.mp4"

export default function Hero() {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 5000)
  }, [])

  return (
    <div className="hero">
      <div className="wrapper flex flex-col justify-center items-center h-2/3">
        <video className="z-0" ref={videoRef} height="800" loop muted>
          <source src={backgroundVideo} />
        </video>
        <div className="absolute z-10 flex flex-col justify-center">
        <h5 className="text-2xl text-white text-center uppercase mb-4">Welcome to</h5>
          <h1 className="md:text-8xl sm:text-6xl text-5xl text-white text-center uppercase mb-4">Oh My Lord</h1>
          <p className="md:text-xl text-sm text-white text-center uppercase">We make beatz that make you go.....</p>
        </div>
      </div>
    </div>
  )
}
