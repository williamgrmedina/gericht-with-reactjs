import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const Gallery = () => {

  const gallery_images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    }
    else //direction === 'right' 
    {
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"></SubHeading>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAAAAAA', marginTop: '2rem' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {gallery_images.map( (image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery"></img>
              <BsInstagram className='gallery__image-icon_instagram'></BsInstagram>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow-left'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}></BsArrowLeftShort>
        </div>
        <div className='app__gallery-images_arrow-right'>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}></BsArrowRightShort>
        </div>
      </div>
    </div>
  );

}

export default Gallery;
