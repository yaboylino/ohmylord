import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

function Navbar() {
  const { theme, setTheme } = useTheme()
  const [darkmode, setDarkmode] = useState(false)

  return (
    <nav className="w-screen grid grid-cols-6 navbar shadow bg-white dark:bg-gray-800 border-gray-100 sticky z-30 top-0 sm:py-3 py-5">
      <div className="flex md:p-8 p-3 col-span-1">
        <button className="layout-header__mobile-action layout-header__mobile-action--menu outline-none border-none" aria-label="Menu openen">
          <svg className="w-6 h-6" fill={theme === "dark" ? "white" : "black"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex md:w-full w-1/2 mx-auto col-span-4 items-center justify-center">
        <Link href="/">
          <img src="/logo-zay.jpg" width="200px" alt="" />
        </Link>
      </div>
      <div className="md:p-8 p-3 col-span-1">
        <ul className="flex items-center justify-end">
          <li className="">
            <svg onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
