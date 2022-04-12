import axios from "axios";

// Common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const getUsersInstance = () => {
    return axios.create({ baseURL: 'http://localhost:9000/api' });
}

const getMessagesInstance = () => {
    return axios.create({ baseURL: 'http://localhost:9001/api' });
}

export const usersAxiosInstance = getUsersInstance();
export const messagesAxiosInstance = getMessagesInstance();
