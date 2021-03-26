import React from 'react'
import style from './Home3.module.css'
import img from '../../../assets/images/who-we.jpg'

function Home3() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className = {style.first}>
                    <h1>WHO WE ARE?</h1>
                    <h3>All About US</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                </div>
                <div className = {style.second} style={{backgroundImage: `url(${img})`}}></div>
            </div>
        </div>
    )
}

export default Home3
