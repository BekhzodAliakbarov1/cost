import React, {useState} from 'react'
import style from './Contact1.module.css'


function Contact1() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitted = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                
                <div className={style.form}>
                    <h1>КОНТАКТЫ</h1>
                    <form onSubmit={submitted}>
                        <input 
                            type="text" 
                            name="Name" 
                            placeholder='Ваше Имя' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            name="Email" 
                            placeholder='Ваш адрес электронной почты ' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="Subject" 
                            placeholder='Предмет' 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea 
                            placeholder='Ваше сообщение' 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            >
                        </textarea>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact1
