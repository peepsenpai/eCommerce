import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="next js demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home {data.name}
      </main>
    </div>
  )
}


// this is server side code 
export async function getStaticProps(){
  const response = await fetch('http://localhost:3000/api/test')
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      data
    }
  }
}
