import React, { Fragment } from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Home10 from '../Home/HomeParts/Home10'
import Services1 from './ServicesParts/Services1'

function Services() {
    return (
        <Fragment>
            <Home1 mainHeader= 'We are WeBuilder' title='Services'/>
            <Services1 />
            <Home10 />
        </Fragment>
    )
}

export default Services
