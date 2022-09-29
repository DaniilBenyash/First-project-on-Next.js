import Head from "next/head"
import Link from "next/link"


const Home = () => (
  <>
      <Head>
        <title>Test</title>
      </Head>

      <Link href={'/books'}><div className='text-5xl cursor-pointer flex justify-center p-64 text-center'>Перейти к каталогу</div></Link>
  </>

)

export default Home