import React from 'react'
import style from './Home6.module.css'
import img from '../../../assets/images/workBg.jpg'

function Home6() {
    return (
        <div className={style.main} style={{backgroundImage: `url(${img})`}}>
            <div className={style.dark}></div>
            <h1>WORK<br /> WITH US</h1>
            <h3>Lets Get Offer</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
            <div className={style.button}>
                <div className={style.background}></div>
                <h2>Get A quote</h2>
            </div>
        </div>
    )
}

export default Home6
