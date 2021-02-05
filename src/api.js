 const BASE = 'http://localhost:3001/api'

 export default {

    getNotes: async () => {
        let res = await fetch(BASE+'/notes');
        let json = await res.json();

        return json.result
    }
 }