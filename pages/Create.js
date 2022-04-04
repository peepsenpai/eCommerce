import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import baseUrl from '../helpers/baseUrl';

const Create = () => {
  const router = useRouter()
  const imgRef = useRef();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const [imgSrc, setImgSrc] = useState(null);


  const createProduct = async() => {
    // console.log(name, price, desc, mediaUrl);
    // https://api.cloudinary.com/v1_1/freeze12;
    const returnData = await imageUpload();
    console.log(returnData);
    const response = await axios.post(`${baseUrl}/test`, {
      name,
      price,
      desc,
      mediaUrl: returnData
    });

    if(response.status === 201){
      router.push('/products')
    }
  };

  const imageUpload = async ()=>{
    const currenFiles = imgRef.current.files;
    const fromData = new FormData();
    fromData.append('file', currenFiles[0]);
    fromData.append('upload_preset', 'ecommerce');
    fromData.append('cloud_name', 'freeze12');
    const cloudRes = await fetch('https://api.cloudinary.com/v1_1/freeze12/image/upload', {
      method:"post",
      body: fromData
    });
    const CloudData = await cloudRes.json();
    return CloudData.url ? CloudData.url : undefined;
  }

  const imageChanged = () => {
    const currenFiles = imgRef.current.files;
    if (currenFiles.length > 0) {
      const exactFile = currenFiles[0];
      const filereader = new FileReader();
      filereader.onload = (fileLoadEvent) => {
        const baseData = fileLoadEvent.target.result
        // console.log(baseData);
        // setMedia(baseData);
        setImgSrc(baseData)
      }
      filereader.readAsDataURL(exactFile);
    }

  }
  return (
    <>
      <Head>
        <title>E-commerce Create</title>
      </Head>
      <main>
        <div className="input-group input-group-sm my-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Product Name</span>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group input-group-sm my-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Product Price</span>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input-group input-group-sm my-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Product desription</span>
          <textarea className="form-control" placeholder="Write Description" id="floatingTextarea2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}>
          </textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFileLg" className="form-label">Upload Image</label>
          <input className="form-control form-control-lg" id="formFileLg" type="file" accept="image/*"
            ref={imgRef}
            onChange={imageChanged}
          />
          {
             imgSrc ? (
              <div className="form-floating mb-3">
                  <img src={imgSrc} alt="preview" className="preview_img img-fluid"/>
              </div>
          ) : null
          }
        </div>
        <button className="btn btn-warning" onClick={createProduct}>Submit</button>
      </main>
    </>
  )
}

export default Create