import React, { useContext } from 'react';
import UseMessages from '../../../common/hooks/useMessages';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';
import GlobalContext from '../../../common/context/GlobalContext';
import './chatBox.css';

const ChatBox = () => {
    const { user } = useContext(GlobalContext);
    const { messages } = UseMessages();

    if (messages.length === 0) {
        return <br></br>; // TODO: fix! If null, space, or empty the input moves to top
    }

    return (
        <ScrollToBottom className="messages">
            {messages.map(m => (
                <div key={m._id}><Message message={m} name={user.name} /></div>
            )
            )}
        </ScrollToBottom>
    )
}

export default ChatBox;