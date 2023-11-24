import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://probable-invention-wp7qjrjwg97296j7-5173.app.github.dev/`
    })
}