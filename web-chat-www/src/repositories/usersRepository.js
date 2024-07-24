import { usersAxiosInstance } from './axios/baseAxios';

const entity = "users";

class UsersRepository {
    async retrieve() {
        return await usersAxiosInstance.get("");
    }
}

export default UsersRepository;