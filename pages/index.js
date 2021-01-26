import Head from "next/head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"

export default function Home() {
  return (
    <Layout>
      <div className="h-screen w-screen">
        <Head>
          <title>Oh My Lord Studio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Services />
        <div className="dark:bg-gray-800 h-full"></div>
      </div>
    </Layout>
  )
}
