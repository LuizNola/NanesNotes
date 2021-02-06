 import axios from 'axios';

 const api = axios.create({
     baseURL:  'http://localhost:3001/api'
 })
 
 const BASE = 'http://localhost:3001/api'

 export default {

    getNotes: async () => {
        let {data: json} = await api.get('/notes')
        return json.result
    }
 }