import React, { useReducer} from 'react'
import img from '../../assets/images/formBG.jpg'
import style from './Form.module.css'
import {Link} from 'react-router-dom'


const initialState = {
    name: '',
    number:'',
    message: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'CHANGE_NUMBER':
            return {
                ...state,
                number: action.payload
            }
        case 'CHANGE_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function Form() {

    const [state, dispatch] = useReducer(reducer, initialState)


    const getCookie =  name =>  {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const handleSubmition = (e) => {
        e.preventDefault()
        console.log(e);
        const csrftoken = getCookie('csrftoken');
        const url = 'http://localhost:8000/api/message/message-create/'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':csrftoken,
            },
            body: JSON.stringify(state)
        })
        window.history.back()
        dispatch({type: 'RESET'})
    }

    return (
        <div className={style.main} style={{backgroundImage: `url(${img})`}}>
            <div className={style.container}>
                <form onSubmit={handleSubmition}>
                    <div className={style.dark}></div>
                    <label >Your name</label>
                    <input 
                        placeholder='Your Name ...'
                        type="text" 
                        value={state.name} 
                        onChange={(e) => dispatch({type:'CHANGE_NAME',payload: e.target.value})}
                    />
                    <label >Your number</label>
                    <input 
                        placeholder='Your Number ...'
                        type="number" 
                        value={state.number} 
                        onChange={(e) => dispatch({type:'CHANGE_NUMBER',payload: e.target.value})}
                    />
                    <label >Your message</label>
                    <input 
                        placeholder='Your Message ...'
                        type="text" 
                        value={state.message} 
                        onChange={(e) => dispatch({type:'CHANGE_MESSAGE',payload: e.target.value})}
                    />
                    <button type="submit">Submit</button>
                    <Link to='/projects'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Form
