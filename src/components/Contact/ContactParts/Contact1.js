import React, {useState} from 'react'
import style from './Contact1.module.css'
import img from '../../../assets/images/l-news-1.jpg'


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
                <div className={style.img} style={{backgroundImage: `url(${img})`}}>
                    
                </div>
                <div className={style.form}>
                    <h1>CONTACT US</h1>
                    <form onSubmit={submitted}>
                        <input 
                            type="text" 
                            name="Name" 
                            placeholder='Your Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            name="Email" 
                            placeholder='Your Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="Subject" 
                            placeholder='Subject' 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea 
                            placeholder='Your Message' 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            >
                        </textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact1
