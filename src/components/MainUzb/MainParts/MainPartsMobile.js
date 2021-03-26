import React, { useState } from 'react'
import Style from './MainPartsMobile.module.css' 
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


const ExtraCard = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const first = () => {
        setOne(!one)
        setTwo(false)
        setThree(false)

    }
    const second = () => {
        setOne(false)
        setTwo(!two)
        setThree(false)
    }
    const third = () => {
        setOne(false)
        setTwo(false)
        setThree(!three)
    }

    const renderPhone = () => {
        return(
            <div 
                className={Style.view}
                >
                <div className={Style.inMain}>
                <h1 className={Style.brend}>С НАМИ ЗАБОТ МЕНЬШЕ!</h1>
                    <div className={Style.flexCards} >
                        <div className={Style.card} >
                        <div className={Style.head} onClick={first} >
                                <h2>
                                        Услуги
                                </h2>
                                <div className={Style.icon}>
                                    {
                                        one ? <AiOutlineCaretUp/> 
                                        : <AiOutlineCaretDown/>
                                    }
                                </div>
                        </div>
                            {
                                one &&
                                <div className={Style.text}>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/сантехника'>Сантехника</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/електроэнергия'>Электроэнергия</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/связь'>Связь</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/интернет'>Интернет</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/техника'>Бытовая техника (ремонт)</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/уборка'>Чистка / уборка</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/грузчик'>Перемещение (грузчик)</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/ремонт'>Мебель (ремонт/сборка)</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/садоводство'>Садоводство</NavLink>
                                </div>
                            }
                        </div>
                        <div className={Style.card} >
                        <div className={Style.head} onClick={second} >
                                <h2>
                                    Транспорт и спецтехника
                                </h2>
                                <div className={Style.icon}>
                                    {
                                        two ? <AiOutlineCaretUp/> 
                                        : <AiOutlineCaretDown/>
                                    }
                                </div>
                        </div>
                            {
                                two && 
                                <div className={Style.text} >
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/малогабаритные'>Малогабаритные грузы</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/крупногабаритные'>Крупногабаритные грузы</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/автокран'>Автокран</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/экскаватор'>Экскаватор</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/эвакуатор'>Эвакуатор</NavLink>
                                </div>
                            }
                        </div>
                        <div className={Style.card} >
                        <div className={Style.head} onClick={third} >
                                <h2>
                                    Строительство
                                </h2>
                                <div className={Style.icon} >
                                    {
                                        three ? <AiOutlineCaretUp/> 
                                        : <AiOutlineCaretDown/>
                                    }
                                </div>
                        </div>
                            {
                                three && 
                                <div className={Style.text} >
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/землерой'>Землерой</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/укладка'>Укладка кирпича</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/косметика'>Косметика</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/штукатурка'>Штукатурка</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/моляр'>Моляр</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/крыша'>Потолочник</NavLink>
                                    <NavLink activeStyle={{color:'yellow'}} onClick={() => setMenuOpen(false)} to='/крыша'>Крыша (покрытие)</NavLink>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className={Style.main} >
            <div className={Style.btn}>
                {
                    menuOpen ? <AiOutlineCaretUp  onClick={() => setMenuOpen(false)}/> : <AiOutlineCaretDown  onClick={() => setMenuOpen(true)}/>
                }
            </div>
            {menuOpen && renderPhone()}
        </div>
    )
}

export default ExtraCard
