import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route exact path='/services'>
                        <Services />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default App