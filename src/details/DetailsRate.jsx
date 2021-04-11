import { RangeInput } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';
import { VotesContext } from '../common/VotesContext';

export const DetailsRate = ({ module_id }) => {

    const [cookies] = useCookies(['user'])
    const [rating, setRating] = useState(null)
    const { votes } = useContext(VotesContext)
    var timeout;

    useEffect(
        () => {
            
            const optional_module = votes.filter(pair => pair[0].id == module_id.replace('_', '/'))
            
            if (optional_module.length > 0) {
                setRating(optional_module[0][1])
            } else {
                setRating(0)
            }
        
        }, [cookies, module_id, votes]
    )

    useEffect(
        () => {
            if (rating === null) return;
            if (rating === 0 && votes.length === 0 ) return;
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