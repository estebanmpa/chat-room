import axios from "axios";

// Common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const getAuthInstance = () => {
    return axios.create({ baseURL: 'http://localhost/api/auth' });
}

const getUsersInstance = () => {
    return axios.create({ baseURL: 'http://localhost/api/users' });
}

const getMessagesInstance = () => {
    return axios.create({ baseURL: 'http://localhost/api/messages' });
}

export const authAxiosInstance = getAuthInstance();
export const usersAxiosInstance = getUsersInstance();
export const messagesAxiosInstance = getMessagesInstance();
