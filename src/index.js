import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';

// import reducers from './reducers'

// const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
