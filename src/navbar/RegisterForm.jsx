import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';


export const RegisterForm = ({ setLayerOpen }) => {

    const [duplicateUsername, setDuplicateUsername] = useState(false);
    const [, setCookies] = useCookies(['user']);
    const [form, setForm] = useState({})

    return (
        <Form
            onChange={(value) => {setDuplicateUsername(false); setForm(value)}}
            onSubmit={formValue => { 
                if (form.password !== form.password2) return;
                fetch(Config.url + 'api/register/',
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
                                    console.log('This shouldn\'t happen')
                                }
                            })
                    
                    .catch(() => {
                        setDuplicateUsername(true)
                    })
                }}>
            <FormField name='username-reg' error={duplicateUsername && 'Username already exisits'}
                required>
                <TextInput id='name-input-field-reg' name='username-reg' placeholder='Username'/>
            </FormField>
            <FormField 
                name='password1' 
                required>
                <TextInput type='password' id='pw-input-field-reg-1' name='password1' placeholder='Password'/>
            </FormField>
            <FormField 
                name='password2' 
                error={(form.password != form.password2) && 'Passwords do not match'}
                required>
                <TextInput type='password' id='pw-input-field-reg-2' name='password2' placeholder='Repeat password'/>
            </FormField>
            <Box direction='row' gap='medium' justify='center'>
                <Button type='submit' primary label='Register' />
            </Box>
        </Form>
    )

}