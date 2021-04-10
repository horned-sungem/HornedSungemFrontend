import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


export const LoginForm = ({ setError, setLayerOpen }) => {

    const [formValue, setFormValue] = useState({});
    const [wrongPassword, setWrongPassword] = useState(false);
    const [cookies, setCookies] = useCookies(['user']);

    return (
        <Form
            value={formValue}
            onChange={newVal => {setFormValue(newVal); setWrongPassword(false)}}
            onSubmit={formValue => { 
                fetch('http://127.0.0.1:8000/api/login/',
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
                                maxAge: 60,
                                secure: true
                            })
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

                console.log(formValue) 
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
                <Button type='button' label='Register' />
            </Box>
        </Form>
    )

}