import { messagesAxiosInstance } from './axios/baseAxios';

const entity = "messages";

class MessagesRepository {
    async send(message) {
        return await messagesAxiosInstance.post(entity, message);
    }

    async retrieve() {
        return await messagesAxiosInstance.get(entity);
    }
}

export default MessagesRepository;