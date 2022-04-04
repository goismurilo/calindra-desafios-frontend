import type { NextPage } from 'next'
import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Image from 'next/image'

import api from '../api/api'

import defaultImage from '../../src/assets/images/img-default.jpg'
import logoCali from '../../src/assets/images/logo-calindra.svg'

const Desafio02: NextPage = () => {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [suggestions, setSuggestions] = useState([])

    interface ISuggestion {
        term: string,
    }

    interface IProduct {
        id: number,
        name: string,
        _meta: IMeta,
    }

    interface IMeta {
        score: number,
        visitsClickCount: string,
    }

    const handleSearch = () => {

        fetchSearch()
    }

    const handleSuggestion = (string: string, results: any) => {
        setSearch(string)
        fetchSearch()
    }

    const formatResult = (item: ISuggestion) => {
        console.log(suggestions)
        return (
            <>
                {/* console.log(products */}
                <span >id: {item.term}</span>
            </>
        )
    }

    const handleOnFocus = () => {
        console.log("handleOnFocus")
    }
    const handleOnSelect = () => {
        console.log("handleOnSelect")
    }
    const handleOnHover = () => {
        console.log("handleOnHover")
    }

    /**
     * Faz a busca dos/das produtos/sugestões na api
     */
    async function fetchSearch() {
        try {
            if (search.length > 0) {
                const response
                    = await api
                        .get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${search.toLowerCase()}&source=nanook`)
                setProducts(response.data.products)
                setSuggestions(response.data.suggestions)
            }
        } catch {
            console.log("TODO")
        }
    }

    // async function fetchSuggestions() {
    //     console.log()
    //     try {
    //         if (search.length > 0) {
    //             const response
    //                 = await api
    //                     .get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook`)
    //             // .get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${search.toLowerCase()}&source=nanook`)
    //             setSuggestions(response.data.suggestions)
    //             console.log(response.data.suggestions)
    //         }
    //     } catch {
    //         console.log("TODO")
    //     }
    // }

    return (
        <div className='bg-primary-background-cali h-auto'>
            <header className='w-screen flex justify-center p-8'>
                <Image src={logoCali} alt='Logo da Calindra' />
            </header>
            <main className='flex flex-wrap justify-center p-8  text-white'>
                <div className='w-screen '>
                    <ReactSearchAutocomplete
                        items={suggestions}
                        onSearch={handleSuggestion}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                    />
                    <button
                        className='bg-primary-cali text-white py-2 px-4 rounded-full mt-2'
                        onClick={handleSearch}>Buscar</button>
                </div>
                {/* Sugestões */}
                <div className='flex flex-wrap w-screen rounded-md'>
                    {suggestions.map((suggestion: ISuggestion) => (
                        <div className='bg-secondary-cali m-1 p-1 rounded-md' key={suggestion.term}>
                            <p>{suggestion.term}</p>

                        </div>
                    ))}
                </div>
                <div className='flex flex-wrap justify-center'>
                    {products.map((product: IProduct) => (
                        <div
                            key={product.id}
                            className='w-3/12 p-1 bg-secondary-background-cali rounded-lg m-1 '>
                            <div className='flex justify-center p-2'>
                                <Image src={defaultImage} alt="Imagem generica do produto" height={130} width={130} />
                            </div>
                            <p>{product.id}</p>
                            <span className=''>{product.name}</span>
                            <p><b>Score: </b>{product._meta.score}</p>
                            <p className='mb-auto'><b>Visitas:</b> {product._meta.visitsClickCount}</p>
                            <a className=' text-center bg-primary-cali flex mt-2 rounded-md flex-col flex-shrink-0'>Ver Produto</a>
                        </div>

                    ))}

                </div>
            </main >
        </div>
    )
}

export default Desafio02