 import axios from 'axios';

 const api = axios.create({
     baseURL:  'http://localhost:3001/api',
     headers: {'Content-Type': 'x-www-form-urlencoded' }
 })
 
 export default {

    getNotes: async () => {
        let { data: json } = await api.get('/notes')
        return json.result
    },

    deleteNote: async (id) => {
        let { data: json } = await api.delete('/note/' + id)
        return json;
    },

    addNote: async (title, body) => {
       // let { data: json }= await api.post('/note', {title, body})
       var urlencoded = new URLSearchParams();
       urlencoded.append("title", title);
       urlencoded.append("body", body);
       
       var requestOptions = {
       method: 'POST',
       body: urlencoded,
       };
       
       fetch("http://localhost:3001/api/note", requestOptions)
       .then(response => response.text())
       .then(result => console.log(result))
       .catch(error => error);
    },

    editNote: async (id, title, body) => {
       
       //Refazer com axios 

        var urlencoded = new URLSearchParams();
        urlencoded.append("title", title);
        urlencoded.append("body", body);
        
        var requestOptions = {
        method: 'PUT',
        body: urlencoded,
        };
        
        fetch("http://localhost:3001/api/note/" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => error);
        
        
    },
 }