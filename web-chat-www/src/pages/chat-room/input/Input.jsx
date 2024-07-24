import React, { useState } from 'react';
import './input.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Input = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event, text) => {
        event.preventDefault();
        if (text && text.trim()) {
            onSendMessage(text);
            setText('');
        }
    }

    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={text}
                onChange={({ target: { value } }) => setText(value)}
                onKeyPress={event => event.key === 'Enter' ? handleSubmit(event, text) : null}
            />
            <Button variant="outlined" endIcon={<SendIcon />} onClick={(event) => handleSubmit(event, text)}>
                Send
            </Button>
        </form >
    )
}

export default Input;
