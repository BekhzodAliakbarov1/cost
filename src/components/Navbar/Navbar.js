import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import {VscChromeClose, VscMenu} from 'react-icons/vsc'
import img from '../../assets/images/logo.png'

const navbarLinks = [
    {path:'/', name:'Home'},
    {path:'/projects', name:'Projects'},
    {path:'/services', name:'Services'},
    {path:'/about', name:'About Us'},
    {path:'/blog', name:'Blog'},
    {path:'/contact', name:'Contact'},
]

function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [clicked, setclicked] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if(window.scrollY > 400){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    const navbarDesktop = () => {
        return(
            <div className={scroll ? `${style.mainScroll}`: `${style.main}`}>
                <div className={style.container}>
                    <div className={style.images}>
                        {/* <div className={style.logoCow} style={{backgroundImage:`url(${img1})`}}>

                        </div> */}
                        <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
                    </div>
                    <div className={style.links}>
                        {
                            navbarLinks.map((link, index) => {
                                return(
                                    <Link key={index} to={link.path}>
                                        {link.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    const navbarMobile =() => {
        return(
            <div className={scroll ? `${style.mainPhoneScroll}` : `${style.mainPhone}`}>
                <div className={style.containerPhone}>
                    <div className={style.images}>
                        {/* <div className={style.logoCow} style={{backgroundImage:`url(${img1})`}}>

                        </div> */}
                        <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
                    </div>
                    {clicked ? <VscChromeClose onClick={() => setclicked(false)}/> : <VscMenu onClick={() => setclicked(true)}/>}
                </div>
                <div className={clicked ? `${style.linksPhone} ${style.clicked}` : `${style.linksPhone} ${style.nonclicked}`}>
                    {
                        navbarLinks.map((link, index) => {
                            return(
                                <Link onClick={() => setclicked(false)} key={index} to={link.path}>
                                    {link.name}                                   
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            {navbarDesktop()}
            {navbarMobile()}
        </div>
    )
}

export default Navbar