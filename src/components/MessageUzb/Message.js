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
            <h1>Заказлар</h1>
            <div className={style.container}>
                {/* First af all we should add search bar to our site */}
                <div className={style.table}>
                        <div className={style.inputDiv} >
                            <h4>
                            Буюртмани телефон рақам орқали қидириш:                     
                            </h4>
                            <div className={style.inInput} >
                                <form>
                                    <input 
                                        placeholder="Телефон рақамни киритинг"
                                        value={input}
                                        type="number" 
                                        onChange={(e) => setInput(e.target.value)}/>
                                </form>
                            </div>
                        </div>
                    {
                        messages.map(message=> String(message.number).includes(`${input}`) &&  (
                            <Fragment key={message.id}>
                                    <h1>{message.id}.<span>Исм:</span> {message.name}</h1>
                                    <div className={style.eachTable}>
                                        
                                        <div className={style.firstRow}>
                                            <div className={style.container}>
                                                {
                                                    message.orderAccepted === 'Accepted'
                                                    ? <Fragment>
                                                        <h2><span>Кабул килинди:</span></h2>
                                                        <h2 style={{color:'green',fontWeight:'900',fontSize:'20px'}}>{message.orderAccepted}</h2>
                                                    </Fragment>
                                                    :<Fragment>
                                                        <h2><span>Кабул килинди:</span></h2>
                                                        <h2 style={{color:'red', fontWeight:'900',fontSize:'20px'}}>{message.orderAccepted}</h2>
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
                                                <h2><span>Вакт:</span></h2>
                                                <h2>{message.timeArrive}</h2>
                                            </div>
                                        </div>
                                        <div className={style.container}>
                                            <div className={style.secondRow}>
                                                <h2><span>Администратор:</span> {message.adminName}</h2>
                                                <h2><span>Ишчи:</span>{message.workerName}</h2>
                                                <h2><span>Номер:</span>+{message.number}</h2>
                                            </div>
                                        </div>
                                        <div className={style.container}>
                                            <div className={style.thirdRow}>
                                                <h2><span>Адрес:</span> {message.address}</h2>
                                                <h2><span>Иш тури:</span> {message.jobType}</h2>
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

