import Api from '../../utils/Api';
import { RegisterData, LoginData } from '../../utils/types';

const API_URL = '/api/users';

// Register user
const register = async (userData: RegisterData) => {
    const response = await Api.post(API_URL + "/register", userData);

    if (!response) return;

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    console.log(response.data);

    return response.data;
}

const login = async (userData: LoginData) => {
    const response = await Api.post(API_URL + "/login", userData);

    if(!response) return;

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    console.log(response.data);

    return response.data;
}

const authService = {
    register,
    login,
}

export default authService;