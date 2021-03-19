import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {apis} from './JSON'
import About from './About/About'
import Contact from './Contact/Contact'
import Directions from './Directions/Directions'
import Form from './Form/Form'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
import Info1 from './Informations/Info1'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Home5 from './Home/HomeParts/Home5'

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Main />
                <Switch>
                    <Route exact path='/'>
                        <Home5 />
                    </Route>
                    <Route exact path='/main'>
                        <Home />
                    </Route>
                    <Route exact path='/categories'>
                        <About />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route exact path='/message'>
                        <Message />
                    </Route>
                    <Route exact path='/projects'>
                        <Directions />
                    </Route>
                    <Route exact path='/booked'>
                        <Home1 mainHeader= 'We are WeBuilder' title='Form'/>
                        <Form />
                    </Route>
                    {
                        apis.map((api, index) => {
                            return(
                                <Route key={index} exact path={api.url}>
                                    <Info1 
                                        title={api.title} 
                                        firstParagraph={api.mainp}
                                        secondParagraph={api.secondp}
                                    />
                                </Route>
                            )
                        })
                    }
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}
// projects
export default App


