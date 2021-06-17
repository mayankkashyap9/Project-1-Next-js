import Head from 'next/head'
import Ong from './ongoing';
import History from './history';
import Main from './Layout/main'
export default function Home() {
  return (
    <>
    <Head>
    <script src="https://kit.fontawesome.com/58f06ef139.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/58f06ef139.js" crossorigin="anonymous"></script>

      <title>Find Your Events</title>
    </Head>

    

<Ong />

    </>
  )
}
