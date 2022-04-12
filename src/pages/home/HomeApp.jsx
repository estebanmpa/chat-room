import React from 'react';
import UserInputForm from './UserInputForm';


const HomeApp = () => {

    return (
        <div className='p-2'>
            <h1 className="text-3xl font-bold underline">
                Welcome to the chat
            </h1>
            <UserInputForm />
        </div>
    )
}

export default HomeApp;
