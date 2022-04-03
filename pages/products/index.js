import React from 'react';
import axios from 'axios';
import PerProduct from '../../components/PerProduct';

const Products = ({products}) => {
  return (
    <>
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

export async function getStaticProps(){
    const res = await axios.get('http://localhost:3000/api/test');
    // console.log(res.data);
    console.log(res.data);
    return {
      props: {
        products: res.data
      }
    }
}