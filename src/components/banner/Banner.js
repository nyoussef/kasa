import React, { useEffect, useState } from 'react'
import {banners} from './banners'
import './banner.scss'

const Banner = ({bannerId}) => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const foundBanner = banners.find(b => b.id === bannerId);
        setBanner(foundBanner);
    }, [bannerId]);

    if(!banner) return null;
    
  return (
    <div className='banner' style={{backgroundImage: `url(${banner.image})` }}> 
        {banner.text && <div className='banner-text'>{banner.text}</div>}
    </div>
  )
}

export default Banner