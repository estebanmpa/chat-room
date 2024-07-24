import { useEffect, useState, useRef } from 'react';
import { socket } from '../../repositories/socket/baseUsersSocket';
import UsersService from '../../services/usersService';


const UseUsers = () => {
    const svc = useRef(new UsersService());
    const [users, setUsers] = useState([]);

    // Subscribe to event
    useEffect(() => {
        socket.on('new_or_updated_user', message => {
            setUsers(users => {
                const index = users.findIndex(x => x._id === message._id);
                const user_list = (index === -1) ? [...users, message] : [...users];
                if (index !== -1) {
                    user_list.splice(index, 1, message);
                }
                return user_list;
            })
        });
    }, []);

    // Retrieve users list
    useEffect(() => {
        const retrieve = async () => {
            const results = await svc.current.retrieve();
            setUsers(results);
        }

        retrieve();
    }, []);

    return { users };
}

export default UseUsers;