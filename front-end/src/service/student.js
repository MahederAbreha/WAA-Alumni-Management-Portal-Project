import { BASE_API_URL } from '../common/Constants'
import axios from 'axios'
import { authHeader } from './base'

const BASE_URL = BASE_API_URL + '/api/v1'

class StudentService {
    findAll() {
        return axios.get(BASE_URL + '/students', { headers: authHeader() });
    }

    findById(id) {
        console.log("inside student"+id)
        return axios.get(BASE_URL + '/students/'+id, { headers: authHeader() });
    }

    postComment(data, id) {
        
        return axios.post(BASE_URL + '/students/' + id, data, { headers: authHeader() });
    }
}

export default new StudentService();