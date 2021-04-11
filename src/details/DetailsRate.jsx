import { RangeInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';

export const DetailsRate = ({ module_id }) => {

    const [cookies] = useCookies(['user'])
    const [rating, setRating] = useState(null)

    var timeout;

    useEffect(
        () => {
            if (!('user' in cookies)) return;
            
            console.log(cookies.user);
            fetch(Config.url + 'api/votes/', {
                credentials: 'include',
                headers: new Headers({
                    'Authorization': 'Token '+cookies.user.token,
                    'Content-Type': 'application/json'
                })
            })
            .then(r => r.json())
            .then(r => r.filter(pair => pair[0].id == module_id.replace('_', '/')))
            .then(r => {
                if (r.length > 0) {
                    setRating(r[0][1])
                } else {
                    setRating(0)
                }
                console.log(module_id)
            })
        }, [cookies, module_id]
    )

    useEffect(
        () => {
            if (!('user' in cookies)) return;
            timeout = setTimeout(() => {
                fetch(Config.url + 'api/vote/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Token '+cookies.user.token,
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        score: rating,
                        module: module_id
                    })
                })
            }, 500)
            return () => {
                clearTimeout(timeout) // Literally no idea how or why this works but it seems to debounce the rating and keep our backend alive
            }
            
        }, [rating, cookies]
    )

    return (
        <>
        {(cookies != null && rating != null) && 
            <RangeInput 
                min={-5} 
                max={5} 
                value={rating} 
                onChange={r => setRating(r.target.value)}/>}
        </>
    );
}