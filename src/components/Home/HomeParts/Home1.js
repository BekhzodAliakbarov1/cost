import React from 'react';
import style from './Home1.module.css';
import img1 from '../../../assets/images/slider-1.jpg';


function Home1() {
    return (
        <div className={style.main} style={{backgroundImage: `url(${img1})`}}>
            <div className={style.dark}></div>
            <h3>We are WeBuilder</h3>
            <h1>We innovate</h1>
        </div>
    )
}

export default Home1
