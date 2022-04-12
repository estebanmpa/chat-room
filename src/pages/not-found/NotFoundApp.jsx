import React from 'react';
import logo from '../../assets/404.png';

const NotFoundApp = () => {

    return (
        <div className='flex h-screen justify-center items-center'>
            <img src={logo} style={{ height: '200px' }} alt="logo" />
        </div>
    )
}

export default NotFoundApp;