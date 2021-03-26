import React from 'react'
import style from './Home11.module.css'
import messageIcon from '../../../assets/images/inbox-icon.png'
import phoneIcon from '../../../assets/images/phone-icon.png'
import placeIcon from '../../../assets/images/place-icon.png'

function Home11() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.place}>
                    <div className={style.img} style={{backgroundImage:`url(${placeIcon})`}}></div>
                    .<div>
                        <h2>Office Address:</h2>
                        <h2>Yunusobod 4 kvartl</h2>
                    </div>
                </div>
                <div className={style.phone}>
                    <div className={style.img} style={{backgroundImage:`url(${phoneIcon})`}}></div>
                    <div>
                        <h2>+998996026611</h2>
                        <h2>+998996026611</h2>
                    </div>
                </div>
                <div className={style.message}>
                    <div className={style.img} style={{backgroundImage:`url(${messageIcon})`}}></div>
                    <div>
                        <h2>beko@gmail.com</h2>
                        <h2>beko@gmail.com</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home11
