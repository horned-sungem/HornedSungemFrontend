import React from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const PageIndex = () => {
    return (
        <div className='page-index'>
            <Logo />
            <div>
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
            </div>
            <Button variant='primary'>Empfohlene Module ansehen</Button>
            <Button variant='primary' outline>
                Module durchsuchen
            </Button>
        </div>
    );
}
