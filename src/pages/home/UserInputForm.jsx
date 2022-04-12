import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useLogin from '../../common/hooks/useLogin';


const defaultValues = {
    username: ''
}

const schema = yup.object().shape({
    username: yup.string().required('Please enter your username')
});

const UserInputForm = () => {
    const { authenticated, execute } = useLogin();
    const navigate = useNavigate();
    const { formState, control, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema)
    })
    const { errors } = formState;
    const navigateToChat = () => {
        navigate('/chat-room');
    }

    const onSubmit = (model) => {
        execute(model.username);
    }

    useEffect(() => {
        if (authenticated) {
            navigateToChat();
        }
    }, [authenticated]);

    return (
        <div className='my-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                error={!!errors.username}
                                //helperText={errors?.username?.message}
                                id="input-with-sx" label="Username" variant="standard" />
                        )}
                    />

                    <Button variant="outlined" type="submit">Let's Chat!</Button>
                </Box>
            </form>
        </div>
    )
}

export default UserInputForm;