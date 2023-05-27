import Api from '../../utils/Api';
import { registerData } from '../../utils/types';

const API_URL = '/api/users';

// Register user
const register = async (userData: registerData) => {
    const response = await Api.post(API_URL + "/register", userData);

    if (!response) return;

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    console.log(response.data);

    return response.data;
}

const authService = {
    register,
}

export default authService;