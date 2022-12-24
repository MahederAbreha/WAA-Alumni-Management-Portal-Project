import { BASE_API_URL } from '../common/Constants'
import axios from 'axios'
import { authHeader } from './base'

const BASE_URL = BASE_API_URL + '/api/v1'

class JobService {
    findAll() {
        return axios.get(BASE_URL + '/jobs', { headers: authHeader() })
    }
    findById(id) {
        console.log("inside student"+id)
        return axios.get(BASE_URL + '/jobs/'+id, { headers: authHeader() });
    }
}

export default new JobService();