import { usersAxiosInstance } from './axios/baseAxios';

const entity = "users";

class UsersRepository {
    async retrieve() {
        return await usersAxiosInstance.get(entity);
    }
}

export default UsersRepository;