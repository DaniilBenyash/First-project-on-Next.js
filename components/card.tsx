import Link from "next/link"
import { AuthorsType } from '../types'

type CardProps = {
    id: number,
    image: string,
    title: string,
    author: AuthorsType,
    down_count: number,
}

const Card = ({image, title, author, down_count, id}: CardProps) => {
    return (
        <Link href={"/id"}>
            <div className="w-full flex flex-col items-center">
                <img className="h-96" src={image} alt="" />
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