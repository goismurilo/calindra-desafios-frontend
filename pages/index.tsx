import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Zutterman - Measure Tapes</title>
        <meta name="description" content="Desenvolvido para o processo seletivo da Calindra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main >
        <h1>asdfd</h1>
      </main>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
