import React, { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveUsers from './active-users/ActiveUsers';
import ChatBox from './chat-box/ChatBox';
import Input from './input/Input';
import './chatRoomApp.css';
import MessagesService from '../../services/messagesService';
import GlobalContext from '../../common/context/GlobalContext';


const ChatRoomApp = () => {
    const { user } = useContext(GlobalContext);
    const svc = useRef(new MessagesService());
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) { handleGoToHome() }
    }, [user])

    const sendMessage = (text) => {
        svc.current.send(text);
    }

    const handleGoToHome = () => {
        navigate('/')
    }

    if (!user) {
        return null
    }

    return (
        <div className="outerContainer">
            <div className="innerContainerUsers">
                <ActiveUsers />
            </div>
            <div className="innerContainerChat">
                <ChatBox />
                <Input onSendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default ChatRoomApp;
