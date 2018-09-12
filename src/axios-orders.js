import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjs-burger-builder-1.firebaseio.com'
})

export default instance;
