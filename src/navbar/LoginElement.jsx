import { Box, Button, Form, FormField, Heading, Layer, TextInput } from 'grommet';
import { Login } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { UserContext } from '../common/UserContext';

export const LoginElement = () => {

    const [layerOpen, setLayerOpen] = useState(false);
    const [formValue, setFormValue] = useState({});
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(false);

    // @Lene alda räum diese scheiß Datei auf uff

    return (
        <Box>
            <Button 
                className='navbar__item' 
                activeClassName='navbar__item--active' 
                onClick={() => {setFormValue({});setLayerOpen(true)}}>
                <Login />

            </Button>

            <Box background='light-1'>
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                    <Box width='medium' gap='small' animation={{type: error ? 'jiggle' : 'none', duration: 200}} className='login-modal' >
                        <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
                            <Heading background='brand'>Login</Heading>
                        </Box>
                        <Box pad='medium'>
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
                            
                            
                        </Box>
                    </Box>
                </Layer> }
            </Box>
        </Box>
    );

}