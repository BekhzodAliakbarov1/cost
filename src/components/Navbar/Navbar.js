import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import {VscChromeClose, VscMenu} from 'react-icons/vsc'
import img from '../../assets/images/logo2.png'

const navbarLinks = [
    {path:'/main/RUS', name:'Главная'},
    {path:'/categories/RUS', name:'Категории'},
    {path:'/booked/RUS', name:'Заказать'},
    {path:'/tablelist/RUS', name:'Заказы'},
    {path:'/contact/RUS', name:'Контакты'},
]

function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [clicked, setclicked] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if(window.scrollY > 200){
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
                        <Link to='/'>
                            <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
                        </Link>
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
    const setClassName = () => {
        if(scroll){
            return `${style.mainPhoneScroll}`
        }else if(clicked){
            return `${style.mainPhoneScroll}`
        }else{
            return `${style.mainPhone}`
        }
    }
    const navbarMobile =() => {
        return(
            <div className={setClassName()}>
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