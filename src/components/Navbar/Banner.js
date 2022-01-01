import React from 'react';
import bannerImage from '../../images/home-banner-img.png'

const Banner = () => {
    return (
        <div className='banner' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1)), url(${bannerImage})`
        }}>
            <div className='text-alignment'>
                <h2>Welcome</h2>
            </div>
        </div>
    )
}

export default Banner
