import React, { useReducer, useState} from 'react'
import img from '../../assets/images/formBG.jpg'
import style from './Form.module.css'
import {Link} from 'react-router-dom'
const options = [
    'Сантехника',
    'Электроэнергия',
    'Связь',
    'Интернетb',
    'Бытовая техника (ремонт)',
    'Чистка / уборка',
    'Перемещение (грузчик)',
    'Мебель (ремонт/сборка)',
    'Садоводство',
    'Малогабаритные грузы',
    'Крупногабаритные грузы',
    'Автокран',
    'Экскаватор',
    'Эвакуатор',
    'Землерой',
    'Укладка кирпича',
    'Косметика',
    'Штукатурка',
    'Моляр',
    'Крыша',
]

const initialState = {
    name: '',
    number:'',
    message: '',
    address: '',
    jobType:''
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
        case 'CHANGE_OPTION':
            return {
                ...state,
                jobType: action.payload
            }
        case 'CHANGE_ADDRESS':
            return {
                ...state,
                address: action.payload
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function Form() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [openModal, setOpenModal] = useState(false)


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
    const handleSubmition = () => {
        const csrftoken = getCookie('csrftoken');
        const url = 'https://webuilder.pythonanywhere.com/api/message/message-create/'
        console.log(state);
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
        setOpenModal(false)
        window.alert('Request is sent successfully!!!')
    }
    const openModalHandler = (e) => {
        e.preventDefault()
        if(state.name === ''){
            window.alert('Please write your NAME')
        }else if(state.number === ''){
            window.alert('Please write your NUMBER')
        }else if(state.address === ''){
            window.alert('Please write your ADDRESS')
        }else{
            setOpenModal(true)
        }
    }
    const formRender = () => {
        return(
            <div className={style.container}>
                <form onSubmit={openModalHandler}>
                    <div className={style.dark}></div>
                    <label >Ваше Имя</label>
                    <input
                        required 
                        placeholder='Ваше Имя ...'
                        type="text" 
                        value={state.name} 
                        onChange={(e) => dispatch({type:'CHANGE_NAME',payload: e.target.value})}
                    />
                    <label >Ваш номер телефона</label>
                    <input
                        required 
                        placeholder='Ваш номер телефона ...'
                        type="number" 
                        value={state.number} 
                        onChange={(e) => dispatch({type:'CHANGE_NUMBER',payload: e.target.value})}
                    />
                    <label >Ваш адрес</label>
                    <input
                        required 
                        placeholder='Ваш адрес ...'
                        type="text" 
                        value={state.address} 
                        onChange={(e) => dispatch({type:'CHANGE_ADDRESS',payload: e.target.value})}
                    />
                    <label >Услуга для заказа (выбор из списка):</label>
                    <select
                        value = {state.job_type} 
                        onChange = {(e) =>dispatch({type:'CHANGE_OPTION', payload: e.target.value})
                        }
                        name="book" 
                        id="book" 
                    >
                    {
                        options.map((option, index) => {
                            return(
                                <option 
                                    key={index} 
                                    value={option}
                                >
                                    {option}
                                </option>
                            )
                        })
                    }
                    </select>
                    <label >Ваше сообщение</label>
                    <input
                        required 
                        placeholder='Ваше сообщение ...'
                        type="text" 
                        value={state.message} 
                        onChange={(e) => dispatch({type:'CHANGE_MESSAGE',payload: e.target.value})}
                    />
                    <button type="submit" onClick={openModalHandler}>Следующий</button>
                    <Link to='/projects/RUS'>Назад</Link>
                </form>
            </div>
        )
    }
    const modalRender = () => {
        return(
            <div className={style.Nmain}>
                <div className={style.Nmodal}>
                    <h1>All Information is correct?</h1>
                    <form>
                        <p>Заказчик</p>
                        <h5>{state.name}</h5>
                    </form>
                    <form>
                        <p>Контактный телефон</p>
                        <h5>{state.number}</h5>
                    </form>
                    <form>
                        <p>Оператор</p>
                        <h5>Михаил</h5>
                    </form>
                    <form>
                        <p>Адресс</p>
                        <h5>{state.address}</h5>
                    </form>
                    <form>
                        <p>Услуга</p>
                        <h5>{state.jobType}</h5>
                    </form>
                    <div className={style.NbtnGroup}>
                        <button type="button" onClick={() => setOpenModal(false)}>Назад</button>
                        <button type="button" onClick={() => handleSubmition()}>Заказать</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={style.main} style={{backgroundImage: `url(${img})`}}>
            {formRender()}
            {openModal && modalRender()}
        </div>
    )
}

export default Form
