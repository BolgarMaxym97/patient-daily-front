import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:55083/api/v1/`,
});