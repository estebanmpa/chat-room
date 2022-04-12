import { usersAxiosInstance } from './axios/baseAxios';


class AuthRepository {
    async login(name) {
        return await usersAxiosInstance.post("auth", { name });
    }
}

export default AuthRepository;