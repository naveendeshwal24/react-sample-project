import React from 'react';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
  <nav> 
    <h1>Service Provider</h1>
    <main>
         <HashLink to="/#home">Home</HashLink>                {/* //this is the default rendered */}
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/Contact"}>Contact</HashLink>
        <HashLink to={"/Services"}>Services</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
    </main>
  </nav>
  )
}

export default Header
