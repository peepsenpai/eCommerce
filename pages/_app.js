import Layout from '../components/Layout'
import '../styles/globals.css';
import ContextWrapper from '../context/ContextWrapper';

function MyApp({ Component, pageProps }) {
  return <>
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  </>
}

export default MyApp
