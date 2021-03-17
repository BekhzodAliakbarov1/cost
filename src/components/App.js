import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Directions from './Directions/Directions'
import Form from './Form/Form'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
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
                    <Route exact path='/projects'>
                        <Directions />
                    </Route>
                    <Route exact path='/form'>
                        <Home1 mainHeader= 'We are WeBuilder' title='Form'/>
                        <Form />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}
// projects
export default App