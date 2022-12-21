import { BASE_API_URL } from "../components/CommonPort"
import axios from 'axios';
import authHeader from './AuthHeader';


const BASE_URL = BASE_API_URL + '/api/v1';
class Profile {
    getMe() {
        return axios.get (BASE_URL + '/users/me', { headers: authHeader() });
    }
    getAddresses() {
        return axios.get (BASE_URL + '/profile/addresses', { headers: authHeader() });
    }
    updateProfile(id, req) {
        return axios.put (BASE_URL + '/profile/' + id, req, { headers: authHeader() });
    }
    }

export default new Profile();
