import Head from "next/head"
import Posts from "../../components/posts"
import Header from "../../components/Header"
import { useState, useEffect, useCallback } from "react"
import {Data, BooksData} from '../../types'
import  React from 'react';

const Books = () => {

    const [books, setBooks] = useState<BooksData | []>([])
    const [nextPage, setNextPage] = useState<string>('https://gutendex.com/books/')
    const [fetching, setFetching] = useState(false)

    async function fetchData(url: string) {
        const response = await fetch(url)
        const data: Data = await response.json() 
        setBooks([ ...books, ...data.results])
        setNextPage(data.next)
        setFetching(false)
    }

    function scrollHander(ev: any) {
        const scrollHeight = ev.target.documentElement.scrollHeight
        const scrollTop = ev.target.documentElement.scrollTop
        const innerHeight = window.innerHeight

        if(scrollHeight - (scrollTop + innerHeight) < 200 && fetching === false && books.length !== 0){
            fetchData(nextPage)
            setFetching(true) 
        }
    }

    useCallback(() => {
        document.addEventListener('scroll', scrollHander)

        return function() {
            document.removeEventListener('scroll', scrollHander)
        }
    }, [books, fetching, scrollHander])

    const SearchRef = React.createRef<HTMLInputElement>();
    const [valueSearch, setValueSearch] = useState('');

    const changeSearchLine = (event: any): void =>{
        setBooks([])
        setValueSearch(event.target.value)
    } 

    useCallback(() => {
        fetchData(`https://gutendex.com/books?search=${valueSearch}`)
    }, [valueSearch, fetchData])

    return(
        <>
            <Head>
                <title>Books</title>
            </Head>

            <Header/>
            <div className="flex justify-center">
                <input 
                    type="text" 
                    className='h-16 w-3/5 text-xl p-3 mb-8 absolute top-7 laptop:w-1/4 mobile:mb-8 mobile:top-32 mobile:w-6/12' 
                    ref={SearchRef}
                    onChange={changeSearchLine}
                />
            </div>
            <Posts books={books}/>
        </>
    )
}

export default Books