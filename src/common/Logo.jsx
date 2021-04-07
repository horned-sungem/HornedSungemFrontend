import React from 'react';

export const Logo = () => {
    return (
        <svg
            width='180'
            height='180'
            viewBox='0 0 180 180'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M60 60H120V120L60 60Z' fill='#FF0048' />
            <path d='M180 120L120 120L120 60L180 120Z' fill='#642CA9' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M120 60H60V30L120 0L120 24.0078C119.901 24.0026 119.801 24 119.7 24C116.552 24 114 26.552 114 29.7C114 32.848 116.552 35.4 119.7 35.4C119.801 35.4 119.901 35.3974 120 35.3922L120 60Z'
                fill='#642CA9'
            />
            <path d='M120 120L180 120L180 180L120 120Z' fill='#FF0048' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M60 30L0 60L60 60V30Z'
                fill='#333333'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M120 35.3922V60L180 0L120 3.8147e-06V24.0078C123.009 24.1638 125.4 26.6526 125.4 29.7C125.4 32.7474 123.009 35.2362 120 35.3922Z'
                fill='#FF0048'
            />
        </svg>
    );
};
