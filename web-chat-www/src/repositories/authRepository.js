import { authAxiosInstance } from './axios/baseAxios';


class AuthRepository {
    async login(name) {
        return await authAxiosInstance.post("", { name });
    }
}

export default AuthRepository;