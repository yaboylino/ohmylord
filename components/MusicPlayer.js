import React, {useRef, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';

const MusicPlayer = () => {
  return (
<AudioPlayer
    autoPlay
    src="./audio.mp3"
    onPlay={e => console.log("onPlay")}
  />
      
  )
}

export default MusicPlayer
