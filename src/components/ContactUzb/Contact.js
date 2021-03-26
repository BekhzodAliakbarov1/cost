import React, { Fragment } from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Home11 from '../Home/HomeParts/Home11'
import Contact1 from './ContactParts/Contact1'


function Contact() {
    return (
        <Fragment>
            <Home1 mainHeader= 'С НАМИ ЗАБОТ МЕНЬШЕ!' title='Контакты'/>
            <Contact1 />
            <Home11 />
        </Fragment>
    )
}

export default Contact
