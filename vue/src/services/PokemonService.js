import axios from 'axios';

export default {

    getAll() {
        return axios.get('/pokemon');
    },

    getById(id) {
        return axios.get(`/pokemon/${id}`);
    }

}