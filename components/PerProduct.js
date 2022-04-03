import React from 'react';
import Image from 'next/image';

const PerProduct = ({ product }) => {
    const { name, price, desc, mediaUrl } = product
    return (
        <div className="card text-center">
            {
              mediaUrl && <Image src={mediaUrl} width="200" height="200" />
            } 
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">{desc}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{price}</li>
            </ul>
        </div>
    )
}

export default PerProduct