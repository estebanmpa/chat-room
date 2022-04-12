import { useState, useRef, useContext } from 'react';
import AuthService from '../../services/authService';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
    const navigate = useNavigate();
    const svc = useRef(new AuthService());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const { setUser } = useContext(GlobalContext);

    const navigateToChat = () => {
        navigate('/chat-room');
    }

    const execute = async (name) => {
        try {
            setLoading(true);
            const results = await svc.current.loginWithName(name);
            setUser(results);
            navigateToChat();
            setLoading(false);
            authenticated(true);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }

    return { loading, error, execute, authenticated }
}

export default useLogin;