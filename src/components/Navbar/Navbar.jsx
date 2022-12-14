import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home' class="link-light">Home</a></li>
        <li className='p__opensans'><a href='#about'class="link-light">About</a></li>
        <li className='p__opensans'><a href='#menu' class="link-light">Menu</a></li>
        <li className='p__opensans'><a href='#awards' class="link-light">Awards</a></li>
        <li className='p__opensans'><a href='#contact' class="link-light">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <Link to='/login' className='p__opensans'>Login / Registration</Link>
        <div></div>
        <a href='#booktable' className='p__opensans'>Book Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }}></GiHamburgerMenu>


        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }}></MdOutlineRestaurantMenu>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home' class="link-light">Home</a></li>
              <li className='p__opensans'><a href='#about' class="link-light">About</a></li>
              <li className='p__opensans'><a href='#menu' class="link-light">Menu</a></li>
              <li className='p__opensans'><a href='#awards' class="link-light">Awards</a></li>
              <li className='p__opensans'><a href='#contact' class="link-light">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
