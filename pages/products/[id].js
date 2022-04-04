import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import baseUrl from '../../helpers/baseUrl';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const product = ({ product }) => {
    const [ismodal, setIsModal] = useState(false)
    // console.log(product);
    const router = useRouter();
    if (router.isFallback) {
        return (
            <>
                loading...
            </>
        )
    }

    const deleteProduct = async () => {
        await axios.delete(`${baseUrl}/perProduct/${product._id}`)
        router.push('/products')
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <Image src={product.mediaUrl} alt="img" width="300" height="300" />
                </div>
                <div className="mb-3">
                    name : {product.name}
                </div>
                <div className="mb-3">
                    Proce : {product.price}
                </div>
                <div className="mb-3">
                    Description : {product.desc}
                </div>
                <button className="btn btn-danger" onClick={()=> setIsModal(true)}>Delete</button>
            </div>

            {
                ismodal && <div className={styles.modal_box}>
                  <div className={`modal-content ${styles.modal_cont}`}>
                    <div className="modal-header">
                      <h5 className="modal-title">{product.name} delete!</h5>
                      <button type="button" className="btn-close" aria-label="Close" onClick={()=>setIsModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      Are You Sure , You wanna delete it?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={()=>setIsModal(false)}>Close</button>
                      <button type="button" className="btn btn-danger" onClick={deleteProduct}>Yes</button>
                    </div>
                  </div>
              </div>
            }
        </>
    )
}

export default product;


// calling api on page load 

export async function getStaticProps({ params: { id } }) {
    const res = await axios.get(`${baseUrl}/perProduct/${id}`);
    return {
        props: {
            product: res.data
        }
    }
};

// it will run first 
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '' } }
        ],
        fallback: true // false or 'blocking'
    };
};