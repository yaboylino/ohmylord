import Head from "next/head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import About from '../components/About'

export default function Home() {
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
      </div>
    </Layout>
  )
}
