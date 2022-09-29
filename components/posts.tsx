import Card from './card'
import { BooksData } from '../types'

type PostsProps = {
    books: BooksData
}

const Posts = ({books}: PostsProps) => {
  
    return (
        <section  className="grid grid-cols-4 px-20 gap-10 laptop:grid-cols-2 mobile:grid-cols-1">
            {books.map(book => (
                <Card
                    key={book.id}
                    id={book.id}
                    image={book.formats["image/jpeg"]}
                    title={book.title}
                    author={book.authors}
                    down_count={book.download_count}
                />
            ))}
        </section>
    )
}

export default Posts