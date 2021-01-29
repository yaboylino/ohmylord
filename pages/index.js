import Head from "next/head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import About from "../components/About"
import { useEffect } from "react"
import Contact from "../components/Contact"

export default function Home() {
  useEffect(() => {
    window.onload = function () {
      var context = new AudioContext()
    }
  })
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Oh My Lord Studio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
      <audio autoplay>
        <source src="audio.mp3" />
      </audio>
    </Layout>
  )
}
