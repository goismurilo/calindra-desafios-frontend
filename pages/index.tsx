import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import rolledTape from '../src/assets/images/rolled-tape.png';
import tape from '../src/assets/images/tape.png';

const Home: NextPage = () => {
	return (
		<div className='max-w-6xl mx-auto'>
			<Head>
				<title>Zutterman - Measure Tapes</title>
				<meta name="description" content="Desenvolvido para o processo seletivo da Calindra" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<main>
				{/* Secao01:  */}
				<div className='max-w-7xl mx-auto px-4 py-44 lg:px-8 items-center md:flex md:justify-center'>
					<div>
						<h1 className='font-bold text-6xl text-secondary-text '>Measuring<br /> everything</h1>
					</div>
					<div className='max-w-lg h-auto pt-8'>
						<Image src={rolledTape} alt="Measuring everything" />
					</div>
				</div>
				{/* Secao02:  */}
				<div className='bg-secondary-background py-32 md:pt-80 max-w-7xl mx-auto lg:pl-8 items-center md:flex md:justify-center md:relative'>
					<div className='text-white pb-10 px-4 md:justify-end'>
						<h1 className='font-bold text-5xl '>We are Leader<br /> in Measure Tapes</h1>
						<p className='font-light text-2xl pt-4'>
							There are 5x<br />
							the circumference of planet<br />
							earth in metric tapes.
						</p>
					</div>
					{/* Responsive: Div que mantem texto alinhando com texto da primeira sessão */}
					{/* TO FIX */}
					<div id="ghost-responsive" className="hidden md:block w-5/12 h-auto pt-8" />
					<div className='h-auto pt-8 pl-10 md:absolute md:top-20 md:right-0 md:max-w-3xl'>
						<Image src={tape} alt="Measuring everything" />
					</div>
				</div>
			</main >

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
		</div >
	)
}

export default Home
