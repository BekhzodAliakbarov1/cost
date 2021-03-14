import React from 'react'

function Footer() {
    return (
        <div style={{
            display:'flex',
            alignItems:'center' ,
            width:'100%', height: '10vh',
            backgroundColor:'#262a31',
            textAlign:'center',
           justifyContent:'center'
        }}>
            <h3 style={{
                    color: '#e8e8e8',
                    fontSize: '12px',
                    padding: '5px'
            }}>
                Copyright ©2021 All rights reserved <br /><br /> This template is made with  HBBH 
            </h3>
        </div>
    )
}

export default Footer
