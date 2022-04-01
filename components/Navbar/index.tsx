import { Disclosure } from '@headlessui/react'
import { XIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import logoZutterman from '/src/assets/images/logo-zutterman.svg'
import logoZuttermanWithName from '/src/assets/images/logo-with-name.svg'

const navigation = [
    { name: 'ABOUT US', href: '#', current: false },
    { name: 'MODELS', href: '#', current: false },
    { name: 'GUARANTEE', href: '#', current: false },
]

/**
 * Funcao que "concatena" as classes tailwind css passadas no elemento
 * @param classes Recebe um conjunto de classes Tailwind
 * @returns 
 */
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white h-auto p-2">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile: Botões de Menu*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-primary-icon hover:text-primary-text hover:bg-second-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-icon">
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <DotsVerticalIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {/* Logo */}
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    {/* Desktop: Logo */}
                                    <div className="block lg:hidden h-auto w-auto relative">
                                        <Image src={logoZutterman}
                                            height={50}
                                            alt="Zutterman"
                                        />
                                    </div>
                                    {/* Mobile: Logo */}
                                    <div className="hidden lg:block h-auto w-auto relative">
                                        <Image
                                            height={50}
                                            src={logoZuttermanWithName}
                                            alt="Logo Zutterman"
                                        />
                                    </div>
                                </div>
                                {/* Descktop: Opções do Menu */}
                                <div className="hidden items-end sm:block sm:ml-6">
                                    <div className="flex space-x-4 align-middle justify-center pt-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    'text-secondary-text hover:bg-primary-background hover:text-primary-text px-3 py-2 rounded-md text-lg font-light'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Mobile: Opções do Menu retratil */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'text-secondary-text font-light hover:bg-primary-background hover:text-primary-text block px-3 py-2 rounded-md text-base'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
