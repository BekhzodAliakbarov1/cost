import React from 'react';
import style from './Home4.module.css'
import img from '../../../assets/images/service-bg.jpg'

import icon1 from '../../../assets/images/s-icon-1.png';
import icon2 from '../../../assets/images/s-icon-2.png';
import icon3 from '../../../assets/images/s-icon-3.png';
import icon4 from '../../../assets/images/s-icon-4.png';
import icon5 from '../../../assets/images/s-icon-5.png';
import icon6 from '../../../assets/images/s-icon-6.png';

function Home4() {
    const cards = [
        {
            icon: icon1,
            text: 'Pre construction',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon2,
            text: 'New construction',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon3,
            text: 'REMODEL & REIMAGE',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon4,
            text: 'LOCATION',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon5,
            text: 'CIVIL & ARCHITECTURE',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon6,
            text: 'ENGINEERING',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },

    ]
    return (
        <div className={style.main}>
            <div className={style.first} style={{backgroundImage: `url(${img})`}}>
                <div className={style.container}>
                    {
                        cards.map((card, index) => {
                            return(
                                <div key={index} className={style.card}>
                                    <img src={card.icon} alt="imag"/>
                                    <h1>{card.text}</h1>
                                    <p>{card.paragraph}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.second}>
                <div className={style.container}>
                    <h1>OUR SERVICE</h1>
                    <h3>The Best Construction Company</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis.</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    )
}

export default Home4
