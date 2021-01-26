import React, { useEffect, useRef } from "react"
import backgroundVideo from "../public/video.mp4"

export default function Hero() {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 5000)
  }, [])

  return (
    <div className="hero vh70">
      <div class="wrapper flex flex-col justify-center items-center h-3/5">
        <h5 className="text-2xl z-30 text-white uppercase mb-1">Welcome to</h5>
        <h1 className="text-6xl z-30 text-white uppercase mb-1">Oh My Lord</h1>
        <h3 className="text-xl z-30 text-white uppercase">We make beatz that make you go.....</h3>
        <div class="gradient absolute z-20 top-0"></div>
        <video className="z-0" ref={videoRef} width="300" loop muted>
          <source src={backgroundVideo} />
        </video>
      </div>
    </div>
  )
}
