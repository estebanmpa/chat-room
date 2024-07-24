import UsersRepository from "../repositories/usersRepository";


class UsersService {
    constructor() {
        this.svc = new UsersRepository();
    }

    retrieve = async () => {
        const response = await this.svc.retrieve();
        const { data } = response;
        return data;
    }
}

export default UsersService;