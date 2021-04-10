import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React, { useContext, useState } from 'react';
import { UserContext } from '../common/UserContext';

export const LoginForm = ({ setError, setLayerOpen }) => {

    
    const { setUser } = useContext(UserContext);
    const [formValue, setFormValue] = useState({});

    return (
        <Form
            value={formValue}
            onChange={newVal => setFormValue(newVal)}
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
                            setUser({
                                username: formValue.value.username,
                                token: r.token
                            });
                            setLayerOpen(false);
                        } else {
                            setError(true);
                            setTimeout(
                                () => setError(false),
                                350
                            )
                        }
                    })

                console.log(formValue) 
                }}>
            <FormField name='username'>
                <TextInput id='name-input-field' name='username' placeholder='Username'/>
            </FormField>
            <FormField name='password'>
                <TextInput type='password' id='pw-input-field' name='password' placeholder='Password'/>
            </FormField>
            <Box direction='row' gap='medium' justify='center'>
                <Button type='submit' primary label='Login' />
                <Button type='button' label='Register' />
            </Box>
        </Form>
    )

}