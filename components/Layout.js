import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
