import React from 'react';

import Logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav>
        <div class="container">
            <div class="logo">
            <a href=""><img src={Logo} alt="Logo" /></a>
            </div>
            <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#sign-in">Sign In</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar