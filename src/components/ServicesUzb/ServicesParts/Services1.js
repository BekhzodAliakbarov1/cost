import React, {useState, useEffect} from 'react';
import style from './Services1.module.css'

import img1 from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import img3 from '../../../assets/images/project-3.jpg'
import img4 from '../../../assets/images/project-4.jpg'
import img5 from '../../../assets/images/project-5.jpg'
import img6 from '../../../assets/images/project-6.jpg'


function Services1() {
    const [cards, setCards] = useState([])
    const all = [
        {
            image: img1,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
        {
            image: img2,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
        {
            image: img3,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
        {
            image: img4,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
        {
            image: img5,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
        {
            image: img6,
            title: 'Jahana Village',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
        },
    ]
    useEffect(() => {
        setCards(all)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const buttonAll = () => {
        setCards([])
        setCards(all)
        
    }
    const buttonBuilding = () => {
        setCards([])
        setCards([all[2], all[1], all[4]])
    }
    const buttonInterier = () => {
        setCards([])
        setCards([all[5], all[2], all[3]])
    }
    const buttonDesign = () => {
        setCards([])
        setCards([all[4], all[3], all[2]])
    }
    const buttonIsolation = () => {
        setCards([])
        setCards([all[3], all[4], all[1], all[0]])
    }
    const buttonPlumbing = () => {
        setCards([])
        setCards([all[1], all[0]])
    }
    const buttonTiling = () => {
        setCards([])
        setCards([all[5], all[0], all[1], all[2]])
    }
    return (
        <div className={style.main}>
            <h1>OUR <br /> PROJECTS</h1>
            <h3>Great & Awesome Works</h3>
            <div className={style.buttons}>
                <h3 onClick={buttonAll}>All</h3>
                <h3 onClick={buttonBuilding}>Buildings</h3>
                <h3 onClick={buttonInterier}>Interier</h3>
                <h3 onClick={buttonDesign}>Design</h3>
                <h3 onClick={buttonIsolation}>Isolation</h3>
                <h3 onClick={buttonPlumbing}>Plumbing</h3>
                <h3 onClick={buttonTiling}>Tiling</h3>
            </div>
            <div className={style.cards}>
                    {
                        cards.map((card, index) => {
                            return(
                                <div key={index} className={style.card} style={{backgroundImage:`url(${card.image})`}}>
                                    <div className={style.info} >
                                        <h1>{card.title}</h1>
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

export default Services1
