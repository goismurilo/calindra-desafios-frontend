import Image from 'next/image'

import facebookIcon from '../../../src/assets/icons/facebook_icon.png'
import twitterIcon from '../../../src/assets/icons/twitter_icon.png'
import youtubeIcon from '../../../src/assets/icons/youtube_icon.png'

export default function Footer() {
    return (
        <footer className='md:flex md:justify-center'>
            {/* Redes Sociais */}
            <div className='max-w-7xl mx-auto px-4 pt-16 pb-2 md:text-left lg:px-8 items-center text-center'>
                <span className='font-bold text-3xl text-secondary-text'>Follow Us</span>
                <div className='w-4xl px-4 md:px-0 py-6 items-center flex justify-center'>
                    <div className='px-3'>
                        <Image src={youtubeIcon} alt="Icone do Youtube" />
                    </div>
                    <div className='px-3'>
                        <Image src={facebookIcon} alt="Icone do Facebook" />
                    </div>
                    <div className='px-3'>
                        <Image src={twitterIcon} alt="Icone do Twitter" />
                    </div>
                </div>
            </div>
            {/* Contatos */}
            <div className='max-w-7xl md:w-6/12 mx-auto md:m-0  px-4 md:pt-16 text-center md:text-left lg:px-8 items-center'>
                <span className='font-bold text-3xl text-secondary-text'>Contact</span>
                <div className='py-6'>
                    <p className='font-normal text-secondary-text text-lg'>2490 Leisure Lane<br />
                        San Luis Obispo<br />
                        California</p>
                </div>
            </div>
        </footer>
    )
}