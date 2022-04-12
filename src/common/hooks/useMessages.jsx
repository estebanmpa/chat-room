import { useEffect, useState, useRef } from 'react';
import { socket } from '../../repositories/socket/baseMessagesSocket';
import MessagesService from '../../services/messagesService';


const UseMessages = () => {
    const svc = useRef(new MessagesService());
    const [messages, setMessages] = useState([]);

    // Subscribe to event
    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => {
                return [...messages, message];
            })
        });
    }, []);

    // Retrieve message list
    useEffect(() => {
        const retrieve = async () => {
            const results = await svc.current.retrieve();
            setMessages(results);
        }

        retrieve();
    }, []);

    return { messages };
}

export default UseMessages;