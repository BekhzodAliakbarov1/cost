import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default App