import React from 'react'
import style from './Info1.module.css'

function Info1({title, firstParagraph, secondParagraph}) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
            </div>
        </div>
    )
}

export default Info1
