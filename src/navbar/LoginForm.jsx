import { Box, Button, Form, FormField, Spinner, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { loginRequest } from '../common/requests';


export const LoginForm = ({ setError, setLayerOpen }) => {

    const [wrongPassword, setWrongPassword] = useState(false);
    const [, setCookies] = useCookies(['user']);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Form
            onChange={() => {setWrongPassword(false)}}
            onSubmit={formValue => { 
                setIsLoading(true);
                loginRequest(formValue.value.username, formValue.value.password)
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
                        setIsLoading(false);
                    })
                }}>
            <Box direction='column'>
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
                <Box direction='row' gap='medium' justify='center' alignContent='end'>
                    <Button type='submit' primary label={<Box direction='row' gap='small'>Login {isLoading && <Spinner color='#fff'/>}</Box>} />
                </Box>
            </Box>
        </Form>
    )

}