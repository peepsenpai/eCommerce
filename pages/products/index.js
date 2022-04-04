import React from 'react';
import axios from 'axios';
import PerProduct from '../../components/PerProduct';
import Head from 'next/head';
import baseUrl from '../../helpers/baseUrl';

const Products = ({products}) => {
  return (
    <>
    <Head>
    <title>E-commerce Products</title>
    </Head>
      <div className="row">
        {
          products.map(e => {
            return <div className="col-lg-4 col-md-6 col-sm-12" key={e._id}>
                <PerProduct product={e}/>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Products;

// export async function getStaticProps(){
//     const res = await axios.get(`${baseUrl}/test`);
//     // console.log(res.data);
//     // console.log(res.data);
//     return {
//       props: {
//         products: res.data
//       }
//     }
// }

export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/test`);
    // console.log(res.data);
    // console.log(res.data);
    return {
      props: {
        products: res.data
      }
    }
}
