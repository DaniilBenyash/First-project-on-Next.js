import { useState, useEffect } from "react"
import Card from "./card"
import { BooksData, Data } from '../types'

const Posts = () => {

    const [books, setBooks] = useState<BooksData | []>([])
    const [nextPage, setNextPage] = useState<string>('')
    const [fetching, setFetching] = useState(false)

    async function fetchData(url: string) {
        console.log(url);
        
        const response = await fetch(url)
        const data: Data = await response.json()    
        console.log(data);
        setBooks([ ...books, ...data.results])
        setNextPage(data.next)
        setFetching(false)
    }
    useEffect(() => {
        setBooks([])
        fetchData('https://gutendex.com/books/')
    }, [])

    function scrollHander(ev: any) {
        const scrollHeight = ev.target.documentElement.scrollHeight
        const scrollTop = ev.target.documentElement.scrollTop
        const innerHeight = window.innerHeight

        if(scrollHeight - (scrollTop + innerHeight) < 200 && fetching === false){
            fetchData(nextPage)
            setFetching(true) 
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHander)

        return function() {
            document.removeEventListener('scroll', scrollHander)
        }
    }, [books, fetching])
    

    return (
        <div  className="grid grid-cols-4 px-20">
            {books && books.map((book, id) => (
                <Card
                    key={book.id}
                    id={id}
                    image={book.formats["image/jpeg"]}
                    title={book.title}
                    author={book.authors}
                    down_count={book.download_count}
                />
            ))}
        </div>
    )
}

export default Posts