import React from 'react'
import Style from './Logo.module.css'


function Logo() {
    return (
        <div className={Style.main} >  
            <div className={Style.inMain} >
                <div className={Style.left} >
                    <p>
                    С НАМИ ЗАБОТ МЕНЬШЕ!
                    </p>
                </div>
                <div className={Style.right} >
                    <button>Персональный кабинет</button>
                    <p>СКОРО</p>
                </div>
            </div>
        </div>
    )
}

export default Logo
