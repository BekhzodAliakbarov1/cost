import React from 'react';
import style from './Home9.module.css'
import image1 from '../../../assets/images/l-news-1.jpg'
import image2 from '../../../assets/images/l-news-2.jpg'
import image3 from '../../../assets/images/l-news-3.jpg'

function Home9() {
    const cards = [
        {
            date: '14 AUG',
            image: image1,
            header:'The Road To Success Is Always Under Construction',
            paragraph:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
            date: '17 AUG',
            image: image2,
            header:'The Road To Success Is Always Under Construction',
            paragraph:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
            date: '23 AUG',
            image: image3,
            header:'The Road To Success Is Always Under Construction',
            paragraph:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
    ]
    return (
        <div className={style.main}>
            <h1>Latest <br /> News</h1>
            <h3>Construction World</h3>
            <div className={style.container}>
                {
                    cards.map((card, index) => {
                        return(
                            <div className={style.card} key={index}>
                                <div className={style.image} style={{backgroundImage: `url(${card.image})`}}>
                                </div>
                                    <h5>{card.date}</h5>
                                <div className={style.info}>
                                    <h1>{card.header}</h1>
                                    <h3>Posted by Admin</h3>
                                    <p>{card.paragraph}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home9
