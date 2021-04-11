import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';


export const LoginForm = ({ setError, setLayerOpen, onRegister }) => {

    const [wrongPassword, setWrongPassword] = useState(false);
    const [, setCookies] = useCookies(['user']);

    return (
        <Form
            onChange={() => {setWrongPassword(false)}}
            onSubmit={formValue => { 
                fetch(Config.url + 'api/login/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: formValue.value.username,
                            password: formValue.value.password
                        })
                    })
                    .then(r => r.json())
                    .then(r => {
                        if ('token' in r) {
                            setCookies('user', ({
                                username: formValue.value.username,
                                token: r.token
                            }), {
                                maxAge: 60*60*24*7,
                                secure: true
                            });
                            setLayerOpen(false);
                        } else {
                            setError(true);
                            setWrongPassword(true);
                            setTimeout(
                                () => setError(false),
                                350
                            )
                        }
                    })
                }}>
            <FormField name='username'
                required>
                <TextInput id='name-input-field' name='username' placeholder='Username'/>
            </FormField>
            <FormField 
                name='password' 
                error={wrongPassword && 'Wrong username or password'}
                required>
                <TextInput type='password' id='pw-input-field' name='password' placeholder='Password'/>
            </FormField>
            <Box direction='row' gap='medium' justify='center'>
                <Button type='submit' primary label='Login' />
            </Box>
        </Form>
    )

}