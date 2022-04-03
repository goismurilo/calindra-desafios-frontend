import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

import rolledTape from '../src/assets/images/rolled-tape.png';
import tape from '../src/assets/images/tape.png';

const Home: NextPage = () => {
	return (
		<div className='max-w-6xl mx-auto'>
			<Head>
				<title>Desafios Calindra</title>
				<meta name="description" content="Desenvolvido para o processo seletivo da Calindra" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className='flex justify-center align-middle py-60'>
				<Link href="/Desafio01" >
					<a className='bg-secondary-background p-4 mx-2 text-white rounded-lg text-center align-middle'>Desafio 01</a>
				</Link>
				<Link href="/Desafio02" >
					<a className='bg-secondary-background p-4 mx-2 text-white rounded-lg text-center align-middle'>Desafio 02</a>
				</Link>

			</main >

		</div >
	)
}

export default Home
