import Head from 'next/head'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import baseUrl from '../helpers/baseUrl'
import axios from 'axios';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter()
  const [LoginDetails, setLoginDetails] = useState({
    email: '',
    pw: ''
  });
  const { email, pw } = LoginDetails;

  const userDetailsChange = (e) => {
    setLoginDetails({
      ...LoginDetails,
      [e.target.name]: e.target.value
    })
  };

  const LoginClicked = async() => {
    try{
      const data = await axios.post(`${baseUrl}/login`,LoginDetails);
      console.log(data);
      if(data.status === 201){
        cookie.set('token',data.data.token);
        console.log('hii');
        router.push('/account')
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <Head>
        <title>E-commerce Login</title>
      </Head>
      <main>
        <div className="input-group flex-nowrap my-2">
          <span className="input-group-text" id="addon-wrapping2">@</span>
          <input type="email" className="form-control" placeholder="Email" name="email" aria-describedby="addon-wrapping2" value={email}
            onChange={userDetailsChange} />
        </div>
        <div className="input-group flex-nowrap my-2">
          <span className="input-group-text" id="addon-wrapping3">Password</span>
          <input type="text" className="form-control" placeholder="Password" name="pw" aria-describedby="addon-wrapping3"
            value={pw} onChange={userDetailsChange} />
        </div>
        <button className="btn btn-primary" onClick={LoginClicked}>Sign Up</button>
        <div className="my-3">
          <Link href="/Signup" passHref={true}>
            <a>Don't have an account ? Sign up now</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Login