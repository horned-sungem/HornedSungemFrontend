import { Box, Button, Form, FormField, Spinner, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { registerRequest } from '../common/requests';


export const RegisterForm = ({ setLayerOpen }) => {

    const [duplicateUsername, setDuplicateUsername] = useState(false);
    const [, setCookies] = useCookies(['user']);
    const [form, setForm] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Form
            onChange={(value) => {setDuplicateUsername(false); setForm(value)}}
            onSubmit={formValue => { 
                if (form.password1 !== form.password2) return;
                setIsLoading(true);
                registerRequest(formValue.value.username_register, formValue.value.password1)
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
                    .then(() => setIsLoading(false))
                }}>
            <FormField name='username_reg' error={duplicateUsername && 'Username already exisits'}
                required>
                <TextInput id='name-input-field-reg' name='username_reg' placeholder='Username'/>
            </FormField>
            <FormField 
                name='password1' 
                required>
                <TextInput type='password' id='pw-input-field-reg-1' name='password1' placeholder='Password'/>
            </FormField>
            <FormField 
                name='password2' 
                error={(form.password1 != form.password2) && 'Passwords do not match'}
                required>
                <TextInput type='password' id='pw-input-field-reg-2' name='password2' placeholder='Repeat password'/>
            </FormField>
            <Box direction='row' gap='medium' justify='center'>
                <Button type='submit' primary label={<Box direction='row' gap='small'>Register {isLoading && <Spinner color='#fff'/>}</Box>} />
            </Box>
        </Form>
    )

}