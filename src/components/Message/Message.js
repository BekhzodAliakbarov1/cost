import React, {useState, useEffect, Fragment} from 'react';
import api from '../../Api'
import style from './Message.module.css'


function Message() {
    const [messages, setmessages] = useState([])
    const [input, setInput] = useState('998')

    useEffect(() => {
        const fetchMessages =async () => {
            const response =await api.get('/message/message-list/')
            setmessages(response.data)
        }
        fetchMessages()
    }, []) 


    

    return (
        <div className={style.main}>
            <h1>Заказы</h1>
            <div className={style.container}>
                {/* First af all we should add search bar to our site */}
                <div className={style.table}>
                        <div className={style.inputDiv} >
                            <h4>
                            Поиск заказа по номеру телефона
                            :                     
                            </h4>
                            <div className={style.inInput} >
                                <form>
                                    <input 
                                        placeholder="Поиск заказа по номеру телефона"
                                        value={input}
                                        type="number" 
                                        onChange={(e) => setInput(e.target.value)}/>
                                </form>
                            </div>
                        </div>
                    {   
                        messages.map(message=> String(message.number).includes(`${input}`) && (
                            <Fragment key={message.id}>
                            <h1>{message.id}.<span>Имя:</span> {message.name}</h1>
                            <div className={style.eachTable}>
                                <div className={style.firstRow}>
                                    <div className={style.container}>
                                        {
                                            message.orderAccepted === 'Accepted'
                                            ? <Fragment>
                                                <h2><span>Положение дел:</span></h2>
                                                <h2 style={{color:'green',fontWeight:'900',fontSize:'20px'}}>{message.workerSelected}</h2>
                                            </Fragment>
                                            :<Fragment>
                                                <h2><span>Положение дел:</span></h2>
                                                <h2 style={{color:'red', fontWeight:'900',fontSize:'20px'}}>{message.workerSelected}</h2>
                                            </Fragment>
                                        }
                                    </div>
                                    <div className={style.container}>
                                                {
                                                    message.workerSelected === 'Accepted'
                                                    ? <Fragment>
                                                        <h2><span>Ишчи танланди:</span></h2>
                                                        <h2 style={{color:'green',fontWeight:'900',fontSize:'20px'}}>{message.workerSelected}</h2>
                                                    </Fragment>
                                                    :<Fragment>
                                                        <h2><span>Ишчи танланди:</span></h2>
                                                        <h2 style={{color:'red', fontWeight:'900',fontSize:'20px'}}>{message.workerSelected}</h2>
                                                    </Fragment>
                                                }
                                            </div>
                                            <div className={style.container}>
                                                {
                                                    message.workerGone === 'Accepted'
                                                    ? <Fragment>
                                                        <h2><span>Ишчи жонатилди:</span></h2>
                                                        <h2 style={{color:'green',fontWeight:'900',fontSize:'20px'}}>{message.workerGone}</h2>
                                                    </Fragment>
                                                    :<Fragment>
                                                        <h2><span>Ишчи жонатилди:</span></h2>
                                                        <h2 style={{color:'red', fontWeight:'900',fontSize:'20px'}}>{message.workerGone}</h2>
                                                    </Fragment>
                                                }
                                            </div>
                                            <div className={style.container}>
                                                {
                                                    message.workerArrived === 'Accepted'
                                                    ? <Fragment>
                                                        <h2><span>Етиб борди:</span></h2>
                                                        <h2 style={{color:'green',fontWeight:'900',fontSize:'20px'}}>{message.workerArrived}</h2>
                                                    </Fragment>
                                                    :<Fragment>
                                                        <h2><span>Етиб борди:</span></h2>
                                                        <h2 style={{color:'red', fontWeight:'900',fontSize:'20px'}}>{message.workerArrived}</h2>
                                                    </Fragment>
                                                }
                                            </div>

                                    <div className={style.container}>
                                        <h2><span>Время:</span></h2>
                                        <h2>{message.timeArrive}</h2>
                                    </div>
                                </div>
                                <div className={style.container}>
                                    <div className={style.secondRow}>
                                        <h2><span>Администратор:</span> {message.adminName}</h2>
                                        <h2><span>имя работника :</span>{message.workerName}</h2>
                                        <h2><span>Номер:</span>+{message.number}</h2>
                                    </div>
                                </div>
                                <div className={style.container}>
                                    <div className={style.thirdRow}>
                                        <h2><span>Адрес:</span> {message.address}</h2>
                                        <h2><span>Тип работы:</span> {message.jobType}</h2>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                        ))
                            
                        
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Message
