import type { NextPage } from 'next'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import logoCali from '../src/assets/images/logo-calindra.svg'

const Home: NextPage = () => {
	return (
		<div className=' bg-primary-background-cali pb-60'>
			<Head>
				<title>Desafios Calindra</title>
				<meta name="description" content="Desenvolvido para o processo seletivo da Calindra" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className='w-screen flex justify-center py-8'>
				<Image src={logoCali} alt='Logo da Calindra' />
			</header>
			<main className='flex justify-center align-middle py-60'>
				<Link href="/Desafio01" >
					<a className='bg-primary-cali p-4 mx-2 text-white rounded-lg text-center align-middle'>Desafio 01</a>
				</Link>
				<Link href="/Desafio02" >
					<a className='bg-primary-cali p-4 mx-2 text-white rounded-lg text-center align-middle'>Desafio 02</a>
				</Link>

			</main >

		</div >
	)
}

export default Home

