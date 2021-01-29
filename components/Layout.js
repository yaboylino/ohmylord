import React from "react"
import Navbar from "./Navbar"
import MusicPlayer from "./MusicPlayer"

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-gray-800 dark:text-white text-gray-800">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div className="footer">
        <div className="mb-20"></div>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default Layout
