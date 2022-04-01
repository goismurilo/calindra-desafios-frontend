import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import rolledTape from '../src/assets/images/rolled-tape.png';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Zutterman - Measure Tapes</title>
        <meta name="description" content="Desenvolvido para o processo seletivo da Calindra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className='p-8 py-44'>
        <div className='max-w-7xl mx-auto px-2 lg:px-8 items-center md:flex md:justify-center'>
          <div>
            <h1 className='font-bold text-7xl text-secondary-text '>Measuring<br /> everything</h1>

          </div>
          <div className='max-w-lg h-auto pt-8'>
            <Image src={rolledTape} alt="Measuring everything" />
          </div>
        </div>
        <div>asdfd</div>
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
