import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Red Onion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {/* ======== Navbar ======== */}
        <Navbar />
        {/* ======== Hero ========= */}
        <Hero />
        {/* ======== About ========= */}
        <About />
      </main>
    </div>
  )
}
