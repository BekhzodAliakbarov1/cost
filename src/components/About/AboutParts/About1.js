import React from 'react'
import style from './About1.module.css'
import img from '../../../assets/images/slider-2.jpg'


function About1() {
    return (
        <div className={style.main}>
            <div className={style.first}>
                <div className={style.container}>
                    <h1>Why <br /> Choose Us?</h1>
                    <h3>You should choose us</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <h5>We Are Creative</h5>
                    <h5>Honest And Dependable</h5>
                    <h5>Quality Commitment</h5>
                    <h5>We Are Always Improving</h5>
                    <div className={style.line}></div>
                </div>
            </div>
            <div className={style.second} style={{backgroundImage: `url(${img})`}}>
                
            </div>
        </div>
    )
}


export default About1
