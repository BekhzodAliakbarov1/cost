import {combineReducers} from 'redux'

const fetchAllWorkersReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL_WORKERS':
            return action.payload
        default:
            return state
    }
}




export default combineReducers({
    allWorkers:fetchAllWorkersReducer
})