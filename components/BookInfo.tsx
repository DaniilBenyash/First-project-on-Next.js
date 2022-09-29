import { BookInfoType } from '../types'
import Image from 'next/image'

type Subjects = {
    subjects: Array<string>
}

interface BookInfoProps extends BookInfoType, Subjects{}

const BookInfo = ({image, title, author, down_count, subjects}: BookInfoProps) => {

    return (
        <main className='flex flex-row items-start p-32 mobile:flex-col items-center p-10'>
            <Image src={image} alt={title} height={380} width={240} className='w-3/12 mr-16 laptop:w-6/12 mobile:w-max mb-8 m-0'/>
            <section>
                <h1 className='text-5xl mb-8'>{title}</h1>
                <p className='text-xl'>Authors:</p>
                {author.map(({name}, id) => (
                        <p className='text-3xl mb-5' key={id}>{name}</p>
                    ))}
                <p className='text-xl'>Download count:</p>
                <p className='text-3xl mb-5'>{down_count}</p>
                <p className='text-xl'>Subjects:</p>
                <div className='flex flex-col'>
                    {subjects.map((subj, id) => 
                            <p key={id} className='text-2xl'>{subj}</p>
                    )}
                </div>
            </section>
        </main>
    )
}

export default BookInfo