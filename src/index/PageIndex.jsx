import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

import './PageIndex.sass'
import { Link } from 'react-router-dom';
import { LoginElement } from '../navbar/LoginElement';
import { Box, Layer } from 'grommet';
import { LoginModal } from '../navbar/LoginModal';
import { useCookies } from 'react-cookie';

export const PageIndex = () => {

    const [layerOpen, setLayerOpen] = useState(false);
    const [cookies] = useCookies(['user'])

    return (
        <div className='page-index'>
            <div className='content'>
                <Logo />
                <h1 className='text--center'>Sungem</h1>
                <p className='text--center text--no-margin'>
                    Hello wir sind 3 (maybe bald mehr) keks die so Modulstuff
                    haben. Den Text darf wer anders schreiben.<br></br>
                    Hier beschreiben wir so was wir gemacht haben, was es bringt
                    und wieso man sich nen Account machen sollte.<br></br>
                    By the way, das Logo ist temporär und das hab ich mir vom
                    Materials Google Design stibitzt.<br></br>
                    Und eventuell par links zu den pages auf der Sidebar.
                </p>
                <Link to={('user' in cookies) && '/recommender/'}>
                    <Button variant='primary' onClick={() => setLayerOpen(true)}>Empfohlene Module ansehen</Button>
                </Link>
                
                <Link to='/modules/'>
                    <Button variant='primary' outline > 
                        Module durchsuchen {/* TODO: hier noch was anderes mit Link/Button machen weil die Ecken hier nicht abgeschnitten werden (beim Link) */}
                    </Button>
                </Link>
                <Box background='light-1'>
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                    <LoginModal setLayerOpen={setLayerOpen}/>
                </Layer> }
            </Box>
            </div>
        </div>
    );
}
