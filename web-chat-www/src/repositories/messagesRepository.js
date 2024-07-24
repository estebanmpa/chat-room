import { messagesAxiosInstance } from './axios/baseAxios';

const entity = "messages";

class MessagesRepository {
    async send(message) {
        return await messagesAxiosInstance.post("", message);
    }

    async retrieve() {
        return await messagesAxiosInstance.get("");
    }
}

export default MessagesRepository;