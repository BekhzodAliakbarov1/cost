import React from 'react';
import style from './Direction1.module.css'
import {Link} from 'react-router-dom'
import img1 from '../../../assets/images/team-1.jpg'
import img2 from '../../../assets/images/team-3.jpg'

function Home7() {
    const cards = [
        {
            image: img1,
            name: 'Bekhzod',
            job: 'Svarshiklar Bolimi',
            phone: '+998996026611',
            cost: '20$',
            link: '/'
        },
        {
            image: img2,
            name: 'Hamza',
            job: 'Kafelchilar Bolimi',
            phone: '+998996026611',
            cost: '30$',
            link: '/'
        },
        {
            image: img1,
            name: 'Hurshid',
            job: 'Boshqa Kasb',
            phone: '+998996026611',
            cost: '50$',
            link: '/'
        },
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Our<br /> Services</h1>
                <h3>we are awesome & skilled</h3>
                <div className={style.cards}>
                    {
                        cards.map((card, index) => {
                            return(
                                <div key={index} className={style.card} >
                                    <div className={style.image} style={{backgroundImage: `url(${card.image})`}}>
                                        <div className={style.dark}>
                                            
                                        </div>
                                        <h3>PHONE: {card.phone}</h3>
                                        <h3>COST: {card.cost}</h3>
                                    </div>
                                    <div className={style.info}>
                                        <h1>{card.name}</h1>
                                        <h2>{card.job}</h2>
                                        <div className={style.button}>
                                            <div className={style.background}></div>
                                            <Link to='/booked'>Get A quote</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home7
