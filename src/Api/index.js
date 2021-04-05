import axios from 'axios'

export default axios.create({
    baseURL: 'http://webuilder.pythonanywhere.com/api/',
})
