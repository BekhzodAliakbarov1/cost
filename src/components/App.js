import React, { Fragment, useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {apis} from './JSON'
import {apisUzb} from './JSONUzb'
import About from './About/About'
import AboutUzb from './AboutUzb/About'
import Contact from './Contact/Contact'
import ContactUzb from './ContactUzb/Contact'
import Directions from './Directions/Directions'
import DirectionsUzb from './DirectionsUzb/Directions'
import Form from './Form/Form'
import FormUzb from './FormUzb/Form'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import HomeUzb from './HomeUzb/Home'
import Home1 from './Home/HomeParts/Home1'
import Home1Uzb from './HomeUzb/HomeParts/Home1'
import Info1 from './Informations/Info1'
import Main from './Main/Main'
import MainUzb from './MainUzb/Main'
import Navbar from './Navbar/Navbar'
import NavbarUzb from './NavbarUzb/Navbar'
import Message from './Message/Message'
import MessageUzb from './MessageUzb/Message'
import Home5 from './Home/HomeParts/Home5'
import Home5Uzb from './HomeUzb/HomeParts/Home5'

import style from './App.module.css'
import Home11 from './Home/HomeParts/Home11'
import Logo from './MainNavbar/Logo'

function App() {
    const [language, setLanguage] = useState('UZB')

    const languageRender = () => {
        return(
            <Switch>
                    <Route exact path='/'>
                        {language === 'UZB' ? <Home5Uzb /> : <Home5 />}
                        <Home11 />
                    </Route>
                    <Route exact path={`/main/${language}`}>
                        {language === 'UZB' ? <HomeUzb /> : <Home />}
                    </Route>
                    <Route exact path={`/categories/${language}`}>
                        {language === 'UZB' ? <AboutUzb /> : <About />}
                        
                    </Route>
                    <Route exact path={`/contact/${language}`}>
                        {language === 'UZB' ? <ContactUzb /> : <Contact />}
                    </Route>
                    <Route exact path={`/tablelist/${language}`}>
                        {language === 'UZB' ? <MessageUzb /> : <Message />}
                    </Route>
                    <Route exact path={`/projects/${language}`}>
                        {language === 'UZB' ? <DirectionsUzb /> : <Directions />}
                    </Route>
                    <Route exact path={`/booked/${language}`}>
                        {language === 'UZB' ? <Home1Uzb mainHeader= 'We are WeBuilder' title='Form'/> : <Home1 mainHeader= 'We are WeBuilder' title='Form'/>}
                        {language === 'UZB' ? <FormUzb /> : <Form />}
                    </Route>
                    {language === 'UZB'
                        ? apisUzb.map((api, index) => {
                            return(
                                <Route key={index} exact path={`${api.url}`}>
                                    <Info1 
                                        title={api.title} 
                                        firstParagraph={api.mainp}
                                        secondParagraph={api.secondp}
                                        language={language}
                                    />
                                </Route>
                            )
                        })
                        : apis.map((api, index) => {
                            return(
                                <Route key={index} exact path={`${api.url}`}>
                                    <Info1
                                        title={api.title} 
                                        firstParagraph={api.mainp}
                                        secondParagraph={api.secondp}
                                        language={language}
                                    />
                                </Route>
                            )
                        })
                    }
                </Switch>
        )
    }
    
    
    return (
        <Fragment>
            <Logo />
            <Router>
                {language === 'UZB' ? <NavbarUzb /> : <Navbar />}
                <div 
                    className={style.languageButton1} 
                    onClick={()=>{
                        setLanguage('UZB')
                    }}
                >
                    <Link 
                        to='/' 
                        style={{textDecoration: 'none'}}
                    >
                        UZB
                    </Link>
                </div>
                <div 
                    className={style.languageButton2} 
                    onClick={()=>{
                        setLanguage('RUS')
                    }}
                >
                    <Link 
                        to='/' 
                        style={{textDecoration: 'none'}}
                    >
                        RUS
                    </Link>
                </div>
                {language === 'UZB' ? <MainUzb /> : <Main />}
                {languageRender()}
                <Footer />
            </Router>
        </Fragment>
    )
}
// projects
export default App


