import React, { Fragment } from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Home3 from '../Home/HomeParts/Home3'
import Home7 from '../Home/HomeParts/Home7'
import Home11 from '../Home/HomeParts/Home11'
import About1 from './AboutParts/About1'

function About() {
    return (
        <Fragment>
            <Home1 mainHeader= 'С НАМИ ЗАБОТ МЕНЬШЕ!' title='Категория'/>
            <Home3 />
            <About1 />
            <Home7 />
            <Home11 />
        </Fragment>
    )
}

export default About
