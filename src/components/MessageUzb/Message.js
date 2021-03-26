import React, {useState, useEffect, Fragment} from 'react';
import api from '../../Api'
import style from './Message.module.css'

function Message() {
    const [messages, setmessages] = useState([])

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
                    {
                        messages.map((message,index) => {
                            console.log(message);
                            return(
                                <Fragment key={index}>
                                    <h1>{message.id}.<span>Исм:</span> {message.name}</h1>
                                    <div className={style.eachTable}>
                                        <div className={style.firstRow}>
                                            <div className={style.container}>
                                                {
                                                    message.orderAccepted === 'Accepted'
                                                    ? <Fragment>
                                                        <h2><span>Статус:</span></h2>
                                                        <h2 style={{color:'green',fontWeight:'800'}}>{message.orderAccepted}</h2>
                                                    </Fragment>
                                                    :<Fragment>
                                                        <h2><span>Статус:</span></h2>
                                                        <h2 style={{color:'red', fontWeight:'800'}}>{message.orderAccepted}</h2>
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
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Message
