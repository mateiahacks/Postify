import axios from 'axios';

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const server = 'http://localhost:5000'

function onError(error: any) {
    alert(error.response.data.message);
}

class Api {

    static async get(url: string, params?: Object | null) {
        try {
            const response = await axios.get(`${server}${url}`, {
                headers: token ? { "Authorization": `Bearer ${token}` } : {},
                params: params,
            });

            return response;

        } catch(error) {
            onError(error);
        }

    }

    static async post(url: string, data?: Object | null) {
        try {
            const response = await axios.post(`${server}${url}`, data, {
                headers: token ? { "Authorization": `Bearer ${token}` } : {},
                data: data,
            });

            return response;
        } catch(error) {
            onError(error);
        }
    }
}

export default Api;