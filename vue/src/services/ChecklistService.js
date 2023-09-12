import axios from 'axios';

export default {

    getAllForUser(userId) {
        return axios.get(`/users/${userId}/checklists`);
    },

    getById(id) {
        return axios.get(`/checklists/${id}`);
    },

    add(checklist) {
        return axios.post(`/checklists`, checklist);
    }

}