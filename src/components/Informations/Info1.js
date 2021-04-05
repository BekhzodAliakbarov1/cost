import React from 'react'
import { Link } from 'react-router-dom'
import style from './Info1.module.css'

function Info1({title, firstParagraph, secondParagraph,language}) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <div className={style.button}>
                    <div className={style.background}></div>
                    <Link to={`/booked/${language}`}>{language === 'UZB' ?  'Бўюртма':'Заказать'}</Link>
                </div>
            </div>
        </div>
    )
}

export default Info1
