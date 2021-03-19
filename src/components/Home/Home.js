import React, { Fragment } from 'react'
import Home1 from './HomeParts/Home1'
import Home10 from './HomeParts/Home10'
import Home11 from './HomeParts/Home11'
import Home2 from './HomeParts/Home2'
import Home3 from './HomeParts/Home3'
import Home4 from './HomeParts/Home4'
import Home5 from './HomeParts/Home5'
import Home6 from './HomeParts/Home6'
import Home7 from './HomeParts/Home7'
import Home8 from './HomeParts/Home8'
import Home9 from './HomeParts/Home9'

function Home() {
    return (
        <Fragment>
            <Home1 mainHeader= 'С НАМИ ЗАБОТ МЕНЬШЕ!' title='Главный'/>
            <Home2 />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />
            <Home7 />
            <Home8 />
            <Home9 />
            <Home10 />
            <Home11 />
        </Fragment>
    )
}

export default Home
