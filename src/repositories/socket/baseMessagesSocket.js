import io from "socket.io-client";

const baseUrl = "http://localhost:9001";

const getInstance = () => {
    const socket = io.connect(baseUrl, { transports: ["websocket"] });
    return socket;
}

export const socket = getInstance();

