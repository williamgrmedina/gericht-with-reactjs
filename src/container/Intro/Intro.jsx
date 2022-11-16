import React, { useEffect, useState } from 'react';

import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {

  //const [playVideo, setPlayVideo] = React.useState(true);
  const vidRef = React.useRef();

  const callbackFunction = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      vidRef.current.play();
    }
    else {
      vidRef.current.pause();
    }
  }

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(callbackFunction, options)
    if (vidRef.current) observer.observe(vidRef.current)

    return () => {
      if (vidRef.current) observer.unobserve(vidRef.current)
    }
  }, [vidRef])

  /*const handleVideo = (video) => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
      
    if(playVideo){
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }*/

  return (
    <div className='app__video'>
      <video
        loop
        muted
        src={meal} type="video/mp4"
        ref={vidRef}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Intro;
