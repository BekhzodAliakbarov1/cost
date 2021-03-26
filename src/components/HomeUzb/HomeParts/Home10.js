import React from 'react';
import style from './Home10.module.css'
import imag1 from '../../../assets/images/client-1.png'
import imag2 from '../../../assets/images/client-2.png'
import imag3 from '../../../assets/images/client-3.png'
import imag4 from '../../../assets/images/client-4.png'
import imag5 from '../../../assets/images/client-5.png'
import imag6 from '../../../assets/images/client-6.png'

function Home10() {
    const images = [
        imag1,imag2,imag3,imag4,imag5,imag6
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                {
                    images.map((image, index) => {
                        return(
                            <div className={style.image} key={index } style={{backgroundImage: `url(${image})`}}>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home10
