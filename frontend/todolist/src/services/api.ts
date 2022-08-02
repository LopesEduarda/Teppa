import axios from 'axios'
// nessa pasta será feita a comunicação com a api e as requisições

const api = axios.create({
    baseURL: "http://localhost:3003"
})


export default api;