import { messagesAxiosInstance } from '../repositories/axios/baseAxios';
import jwtDecode from "jwt-decode";
import AuthRepository from "../repositories/authRepository";
import { socket } from "../repositories/socket/baseUsersSocket";


class AuthService {
    constructor() {
        this.svc = new AuthRepository();
    }

    setSession = (access_token, user) => {
        if (access_token) {
            localStorage.setItem('jwt_access_token', access_token);
            localStorage.setItem('user', JSON.stringify(user));
            messagesAxiosInstance.defaults.headers.common.Authorization = access_token;
        } else {
            localStorage.removeItem('jwt_access_token');
            localStorage.removeItem('user');
            delete messagesAxiosInstance.defaults.headers.common.Authorization;
        }
    }

    loginWithName = async name => {
        const response = await this.svc.login(name);
        const { data: { access_token } } = response;
        const decoded = jwtDecode(access_token);
        const { user } = decoded;
        this.setSession(access_token, user);
        this.emitUser(user);
        return user;
    }

    /**
     * Used to inform to the backend the user and socket id
     * @param {*} user 
     */
    emitUser = (user) => {
        socket.emit('user_logged_in', user);
    }
}

export default AuthService;