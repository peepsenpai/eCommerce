import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../helpers/baseUrl'
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter()
  const [signUpDetails, setSignUpDetails] = useState({
    name: '',
    email: '',
    pw: ''
  });
  const { name, email, pw } = signUpDetails;

  const userDetailsChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value
    })
  };

  const signUpClicked = () => {
    const signUpData = axios.post(`${baseUrl}/signup`, signUpDetails);
    // console.log(signUpData);
    if(signUpData.status === 201){
      router.push('/Login');
    }
  }
  return (
    <>
      <Head>
        <title>E-commerce Sign Up</title>
      </Head>
      <main>
        <div className="input-group flex-nowrap my-2">
          <span className="input-group-text" id="addon-wrapping">Name</span>
          <input type="text" className="form-control" placeholder="Name" name="name" aria-describedby="addon-wrapping" value={name}
            onChange={userDetailsChange} />
        </div>
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
        <button className="btn btn-primary" onClick={signUpClicked}>Sign Up</button>
        <div className="my-3">
          <Link href="/Login" passHref={true}>
            <a>Already have an account ? Go To Login</a>
          </Link>
        </div>
      </main>
    </>
  )
};

export default Signup;