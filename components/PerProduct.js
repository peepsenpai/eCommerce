import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DemoContext from '../context/DemoContext';

const PerProduct = ({ product }) => {
    const { name, price, desc, mediaUrl, _id } = product
    const {blurImg} = useContext(DemoContext);
    return (
        <div className="card text-center">
            {
              mediaUrl && <Image src={mediaUrl} width="300" height="300" alt="img" placeholder='blur' blurDataURL={blurImg}/>
            } 
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">{desc}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price} /-</li>
            </ul>
            <Link href={'/products/[id]'} as={`/products/${_id}`} passHref={true}>
                <button className="btn btn-warning">See Details</button>
            </Link>
        </div>
    )
}

export default PerProduct