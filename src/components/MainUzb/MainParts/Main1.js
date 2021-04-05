import React, {useState} from 'react'
import style from './Main1.module.css'
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

function Main1() {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.one}>
                    <div className={style.oneClick} onClick={() => setOne(!one)} style={{cursor:'pointer'}}>
                        <h1 >Хизматлар</h1>
                        {one ? <AiOutlineCaretUp onClick={() => setOne(!one)}/>: <AiOutlineCaretDown onClick={() => setOne(!one)}/>}
                    </div>
                    {
                        one && 
                        <div className={style.oneContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/сантехника'>Сантехника
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/електроэнергия'>электро энергия
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/связь'>Алоқа
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/интернет'>Интернет
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/техника'>Маиший техника
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/уборка'>Тозалаш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/грузчик'>Юк ташиш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/ремонт'>Мебель таъмирлаш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/садоводство'>Боғбончилик
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={style.two}>
                    <div className={style.twoClick} onClick={() => setTwo(!two)} style={{cursor:'pointer'}}>
                        <h1 >Транспорт ва махсус техника</h1>
                        {two ? <AiOutlineCaretUp onClick={() => setTwo(!two)}/>: <AiOutlineCaretDown onClick={() => setTwo(!two)}/>}
                    </div>
                    {
                        two && 
                        <div className={style.twoContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/малогабаритные'>Кичик ҳажмдаги юк
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/крупногабаритные'>Катта ҳажмдаги юк
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/автокран'>Кўчма кран	
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/экскаватор'>Экскаватор
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/эвакуатор'>Эвакуатор
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={style.three}>
                    <div className={style.threeClick} onClick={() => setThree(!three)} style={{cursor:'pointer'}}>
                        <h1 >Бино ва иншоатлар</h1>
                        {three ? <AiOutlineCaretUp onClick={() => setThree(!three)}/>: <AiOutlineCaretDown onClick={() => setThree(!three)}/>}
                    </div>
                    {
                        three && 
                        <div className={style.threeContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/землерой'>Диггер
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/укладка'>Ғишт қуйиш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/косметика'>Косметика
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/штукатурка'>Гипсчи
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/моляр'>Моляр
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/крыша'>Том ёпиш
                            </NavLink>
                        </div>
                    }
                </div>
                <Link to='booked/UZB' style={{fontSize:'18px',fontWeight:'100',paddingTop:'10px', cursor:'pointer',textDecoration:'uppercase'}}>Бошқа турдаги</Link>
            </div>
        </div>
    )
}

export default Main1