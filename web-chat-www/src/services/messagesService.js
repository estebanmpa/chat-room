import MessagesRepository from "../repositories/messagesRepository";


class MessagesService {
    constructor() {
        this.svc = new MessagesRepository();
    }

    retrieve = async () => {
        const response = await this.svc.retrieve();
        const { data } = response;
        return data;
    }

    send = async text => {
        const message = { text }
        return await this.svc.send(message);
    }
}

export default MessagesService;