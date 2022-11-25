import React from 'react';


import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './Menu.css';

const Menu = () => (
  <div className='app__menu flex__center section__padding' id='menu'>
    <div className='app__menu-title'>
      <SubHeading title="Menu That Fits Your Palatte"></SubHeading>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__menu-menu'>
      <div className='app__menu-menu_wine flex__center'>
        <p className='app__menu-menu_heading'>Wine & Beer</p>
        <div className='app__menu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}></MenuItem>
          ))}
        </div>
      </div>

      <div className='app__menu-menu_img'>
        <img src={images.menu} alt="menu_img"></img>
      </div>

      <div className='app__menu-menu_cocktails flex__center'>
        <p className='app__menu-menu_heading'>Cocktails</p>
        <div className='app__menu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}></MenuItem>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default Menu;
