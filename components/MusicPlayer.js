import React, { useRef, useEffect } from "react"
import AudioPlayer from "react-h5-audio-player"

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 border-t border-gray-400 w-screen">
      <AudioPlayer src="./Motion.mp3" onPlay={e => console.log("onPlay")} />
    </div>
  )
}

export default MusicPlayer
