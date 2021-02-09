 import axios from 'axios';

 const api = axios.create({
     baseURL:  'http://localhost:3001/api'
 })
 
 export default {

    getNotes: async () => {
        let { data: json } = await api.get('/notes')
        console.log(json)
        return json.result
    },

    deleteNote: async (id) => {
        let { data: json } = await api.delete('/note/' + id)
        return json;
    },

    addNote: async (title, body) => {
        console.log(title +" "+ body)
        let { data: json }= await api.post('/note', {title, body})
        
        return json;
    },
 }