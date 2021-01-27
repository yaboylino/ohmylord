import React, { useRef, useEffect } from "react"
import AudioPlayer from "react-h5-audio-player"

const MusicPlayer = () => {
  const audioRef = useRef()
  useEffect(() => {
    console.log(audioRef.current)
    setTimeout(() => {
      audioRef.current.handlePlay()
    }, 2000)
  }, [])

  return <AudioPlayer autoPlay src="./audio.mp3" ref={audioRef} onPlay={e => console.log("onPlay")} />
}

export default MusicPlayer
