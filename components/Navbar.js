import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  const NavItem = [
    {
      path: '/products',
      name: 'Products'
    },
    {
      path: '/Login',
      name: 'Login'
    },
    {
      path: '/Signup',
      name: 'Sign Up'
    },
    
  ]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" href="#">E-commerce</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             {
               NavItem.map((e,i)=>{
                 return <Link key={i} href={e.path}>
                   <li className="nav-item">
                      <a className={`nav-link ${router.pathname == e.path ? 'active':null}`} style={{cursor: 'pointer'}}>{e.name}</a>
                   </li>
                 </Link>
               })
             }
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar