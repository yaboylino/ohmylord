import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

function Navbar() {
  const { theme, setTheme } = useTheme()
  const [darkmode, setDarkmode] = useState(false)

  return (
    <nav className="w-screen grid grid-cols-6 navbar shadow bg-white dark:bg-gray-800 border-gray-100 sticky z-30 top-0">
      <div className="flex md:p-8 p-3 col-span-1">
        <button className="layout-header__mobile-action layout-header__mobile-action--menu outline-none border-none" aria-label="Menu openen">
          <svg className="pr-1" fill={theme === "dark" ? "white" : "black"} width="32" height="32">
            <path fillRule="evenodd" d="M4 9h25v.5H4V9zm0 7.2h25v.5H4v-.5zm.3 7.3H4v.5h25v-.5H4.3z" clipRule="evenodd"></path>
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
            <button aria-label="Toggle Dark Mode" type="button" className="p-3 h-12 w-12 order-2 md:order-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {" "}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
