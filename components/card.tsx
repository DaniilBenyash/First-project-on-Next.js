import Link from "next/link"
import { useEffect, useState } from "react"
import { BookInfoType } from '../types'

const Card = ({image, title, author, down_count, id}: BookInfoType) => {

    const [view, setView] = useState(false)

    useEffect(() => {
        const Storage = sessionStorage.getItem('viewd')

        if(Storage !== null){
            const parseStorage = JSON.parse(Storage)
            parseStorage.some((el: number) => el === id) && setView(true)
        }
    }, [])

    return (
        <Link href={`/books/${id}`}>
            <div className={`w-full flex flex-col items-center cursor-pointer ${view && 'opacity-40'}`}>
                <img className="h-96" src={image} alt={title} />
                <h3 className="text-3xl font-bold text-center mt-6 mb-1">{title}</h3>
                {author.map(({name}, id) => (
                    <p className="text-2xl" key={id}>{name}</p>
                ))}
                <p className="text-xl mb-6">{down_count}</p>
            </div>
        </Link>
    )
}

export default Card