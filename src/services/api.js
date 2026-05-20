//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://backend-best.smktibazma.sch.id/'
})

export default Api