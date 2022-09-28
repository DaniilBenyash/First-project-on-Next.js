import Head from "next/head"
import Posts from "../../components/posts"


const Books = () => {


    return(
        <>
            <Head>
                <title>Books</title>
            </Head>
    
            <h1 className="font-bold italic text-3xl">Books</h1>
            <Posts/>
            
        </>
    )
}

export default Books