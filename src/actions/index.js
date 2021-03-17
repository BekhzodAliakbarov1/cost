import api from '../Api'

export const fetchAllWorkers = () =>async dispatch =>{
    const response =await api.get('/message/message-list')
    dispatch({
        type: 'FETCH_ALL_WORKERS',
        payload: response
    })
}
