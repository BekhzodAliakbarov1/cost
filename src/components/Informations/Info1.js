/* eslint-disable eqeqeq */
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Info1.module.css'

function Info1({title, firstParagraph, secondParagraph,language}) {
    console.log(language);
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <div className={style.buttonContainer}>
                    {
                        language ?
                            <Link to={`/booked/RUS`}>Заказать</Link>
                       :
                            <Link to={`/booked/UZB`}>Буюртма</Link>
                            // <Link to={`/booked/${language}`}>{language == 'RUS' ? 'Заказать' : 'Буюртма'}</Link>
                    }            
                </div>
            </div>
        </div>
    )
}

export default Info1
