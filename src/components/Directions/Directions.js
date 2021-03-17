import React from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Home11 from '../Home/HomeParts/Home11'
import Direction1 from './DirectionParts/Direction1'
function Directions() {
    return (
        <div>
            <Home1 mainHeader= 'We are WeBuilder' title='Our Services'/>
            <Direction1 />
            <Home11 />
        </div>
    )
}

export default Directions
