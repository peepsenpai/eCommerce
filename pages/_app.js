import Layout from '../components/Layout'
import '../styles/globals.css';
import ContextWrapper from '../context/ContextWrapper';
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  </>
}

export default MyApp
