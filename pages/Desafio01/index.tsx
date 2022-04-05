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

    type ISuggestion = {
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

    const handleSuggestion = (text: string) => {
        setSearch(text)
        fetchSuggestions()
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
            console.log("Não foi encontrado nenhum produto")
            setProducts([])
            setSuggestions([])
        }
    }

    const handleSelect = (text: string) => {
        setSearch(text)
        fetchSearch()
    }

    const formatResult = (item: ISuggestion) => {
        return (
            <div onClick={() => handleSelect(item.term)}>
                <span >{item.term}</span>
            </div>
        )
    }
    /**
     * Faz a busca das sugestões na api
     */
    async function fetchSuggestions() {
        try {
            if (search.length > 0) {
                const response
                    = await api
                        .get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${search.toLowerCase()}&source=nanook`)
                setSuggestions(response.data.suggestions)
            }
        } catch {
            console.log("Não foi encontrado nenhum produto")
        }
    }

    return (
        <div className='bg-primary-background-cali h-screen'>
            <header className='w-screen flex justify-center p-8'>
                <Image src={logoCali} alt='Logo da Calindra' />
            </header>
            <main className='bg-primary-background-cali flex flex-wrap justify-center p-8  text-white'>
                <div className='w-11/12 flex justify-between'>
                    <div className='w-screen z-50'>

                        <ReactSearchAutocomplete<ISuggestion>
                            items={suggestions}
                            onSearch={handleSuggestion}
                            inputSearchString={search}
                            fuseOptions={{ keys: ['term'] }}
                            resultStringKeyName="term"
                            autoFocus
                            formatResult={formatResult}
                            placeholder='Busque por produtos...'
                        />
                    </div>
                    <button
                        className='bg-primary-cali text-white py-2 px-4 rounded-full ml-2'
                        onClick={handleSearch}>Buscar</button>
                </div>
                {/* Sugestões  */}
                <div className='flex flex-wrap w-11/12 rounded-md pb-6'>
                    {suggestions.length > 0 ? (
                        suggestions.map((suggestion: ISuggestion) => (
                            <div className='bg-secondary-cali m-1 p-1 rounded-md' key={suggestion.term}>
                                <button onClick={() => handleSuggestion(suggestion.term)}>

                                    <p>{suggestion.term}</p>
                                </button>
                            </div>
                        ))) : (
                        <div className='text-red-400 font-bold p-2'>
                            {search !== '' ? (<span >Não foi encontrado nenhum produto</span>) : <span></span>}
                        </div>
                    )}
                </div>
                {/* Produtos  */}
                <div className='w-11/12 flex flex-wrap justify-center'>
                    {products.map((product: IProduct) => (
                        <div
                            key={product.id}
                            className='w-80 md:w-96  p-1 bg-secondary-background-cali rounded-lg m-1 px-4 '>
                            <div className='flex justify-center p-2'>
                                <Image src={defaultImage} alt="Imagem generica do produto" height={130} width={130} />
                            </div>
                            <p>ref.:  {product.id}</p>
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