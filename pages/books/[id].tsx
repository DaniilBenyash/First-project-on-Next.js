import { Data, OneBookData } from '../../types'
import { useEffect, useState } from 'react'
import BookInfo from '../../components/BookInfo'
import Head from "next/head"

export const getServerSideProps = async (context: any) => {
    const { id } = context.params
    const response = await fetch(`https://gutendex.com/books/?ids=${id}`)
    const data: Data = await response.json()

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {data}
    }
}

const Book = ({data}: any) => {

    const [bookInfo] = useState<OneBookData>(data.results[0])
    const id = bookInfo.id

    useEffect(() => {

        const Storage = sessionStorage.getItem('viewd')

        if(Storage === null){
            sessionStorage.setItem('viewd', JSON.stringify([id]))
        }else{

            const parseStorage = JSON.parse(Storage)

            if(parseStorage.every((el:number) => el !== id)){
                sessionStorage.setItem('viewd', JSON.stringify([id, ...parseStorage]))
            }
        }
    }, [id])

    return (
        <>
            <Head>
                <title>{bookInfo.title}</title>
            </Head>

            <BookInfo 
                image={bookInfo.formats["image/jpeg"]}
                title={bookInfo.title}
                author={bookInfo.authors}
                down_count={bookInfo.download_count}
                subjects={bookInfo.subjects}
            />
        </>
        
    )
}

export default Book