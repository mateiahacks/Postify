import axios from 'axios';
import { toast } from 'react-toastify';

const server = 'http://localhost:5000'

function onError(error: any) {
    toast.error(error.response.data.message)
}

class Api {

    static async get(url: string, params?: Object | null) {
        const token = JSON.parse(localStorage.getItem("user") || '{}').token;

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
        const token = JSON.parse(localStorage.getItem("user") || '{}').token;

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

    static async put(url: string, data?: Object | null) {
        const token = JSON.parse(localStorage.getItem("user") || '{}').token;

        try {
            const response = await axios.put(`${server}${url}`, data, {
                headers: token ? { "Authorization": `Bearer ${token}` } : {},
                data: data,
            });

            return response;
        } catch(error) {
            onError(error);
        }
    }

    static async delete(url: string) {
        const token = JSON.parse(localStorage.getItem("user") || '{}').token;

        try {
            const response = await axios.delete(`${server}${url}`, {
                headers: token ? { "Authorization": `Bearer ${token}` } : {},
            });

            return response;
        } catch(error) {
            onError(error);
        }
    }
}

export default Api;