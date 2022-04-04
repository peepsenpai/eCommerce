import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img from '../public/laptop.png';
import { useContext } from 'react';
import DemoContext from '../context/DemoContext';

export default function Home() {
  const {blurImg} = useContext(DemoContext)
  return (
    <div className="container">
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="next js demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          Home
        </div>
        <div className="row">
          <div className="col-lg-4 colmd-12">
          <Image src={img} width="100%" height="100%" layout="responsive" objectFit="contain" alt="img" placeholder='blur' />
          </div>
          <div className="col-lg-8 col-md-12">
              <Image src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIwZnJlZSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width="1000" height="750" placeholder='blur' blurDataURL={blurImg} className={styles.demoImg}/>
          </div>
        </div>
      </main>
    </div>
  )
}


// this is server side code 
// export async function getStaticProps(){
//   const response = await fetch('http://localhost:3000/api/test')
//   const data = await response.json();
//   // console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }

// export async function getServerSideProps(){
//   const response = await fetch('http://localhost:3000/api/test')
//   const data = await response.json();
//   // console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }
