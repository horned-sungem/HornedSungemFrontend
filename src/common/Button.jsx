import React from 'react';

import './styles/Button.sass'

export const Button = ({ variant, outline, ...props }) => {
    return (
        <button
            type='button'
            className={[
                'button',
                `button--${variant}`,
                outline ? 'button--outline' : null,
            ].join(' ')}
            {...props}
        >
            {props.children}
        </button>
    );
};