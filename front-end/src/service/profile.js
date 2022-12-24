import { BASE_API_URL } from "../common/Constants";
import axios from "axios";
import { authHeader } from "./base";


const BASE_URL = BASE_API_URL + "/api/v1";


class ProfileService {
    getMe() {
        return axios.get(BASE_URL + '/profile', { headers: authHeader() });
    }

    getAddress() {
        return axios.get(BASE_URL + '/profile/address', { headers: authHeader() })
    }

    updateProfile(id, user) {
        return axios.put(BASE_URL + '/profile/' + id, user, { headers: authHeader() })
    }
}

export default new ProfileService();