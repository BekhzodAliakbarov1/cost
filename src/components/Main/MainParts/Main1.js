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
                        <h1 >Услуги</h1>
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
                                to='/електроэнергия'>Электроэнергия
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/связь'>Связь
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/интернет'>Интернет
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/техника'>Бытовая техника (ремонт)
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/уборка'>Чистка / уборка
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/грузчик'>Перемещение (грузчик)
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/ремонт'>Мебель (ремонт/сборка)
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/садоводство'>Садоводство
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={style.two}>
                    <div className={style.twoClick} onClick={() => setTwo(!two)} style={{cursor:'pointer'}}>
                        <h1 >Транспорт и спецтехника</h1>
                        {two ? <AiOutlineCaretUp onClick={() => setTwo(!two)}/>: <AiOutlineCaretDown onClick={() => setTwo(!two)}/>}
                    </div>
                    {
                        two && 
                        <div className={style.twoContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/малогабаритные'>Малогабаритные грузы	
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/крупногабаритные'>Крупногабаритные грузы
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/автокран'>Автокран	
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
                        <h1 >Строительство</h1>
                        {three ? <AiOutlineCaretUp onClick={() => setThree(!three)}/>: <AiOutlineCaretDown onClick={() => setThree(!three)}/>}
                    </div>
                    {
                        three && 
                        <div className={style.threeContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/землерой'>Землерой
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/укладка'>Укладка кирпича
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/косметика'>Косметика
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/штукатурка'>Штукатурка
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/моляр'>Моляр
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/крыша'>Крыша (покрытие)
                            </NavLink>
                        </div>
                    }
                </div>
                <Link to='booked/RUS' style={{fontWeight:'100',fontSize:'18px',paddingTop:'10px', cursor:'pointer',textDecoration:'none'}}>Другое</Link>
            </div>
        </div>
    )
}

export default Main1
// Строительство
// Землерой			
// Укладка кирпича			
// Косметика			
// Штукатурка			
// Моляр			
// Потолочник			
// Крыша (покрытие)			
