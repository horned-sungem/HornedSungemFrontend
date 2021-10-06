import { RangeInput } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { setVoteRequest } from '../common/requests';
import { VotesContext } from '../common/VotesContext';

export const DetailsRate = ({ module_id }) => {

    const [cookies] = useCookies(['user'])
    const [rating, setRating] = useState(null)
    const { votes, setVotes } = useContext(VotesContext)
    const slash_id = module_id.replace('_', '/')
    const [timeout, setTimeoutState] = useState(null);

    useEffect(
        () => {
            
            const optional_module = votes.filter(pair => pair[0].nr == slash_id)
            
            if (optional_module.length > 0) {
                setRating(optional_module[0][1])
            } else {
                setRating(0)
            }

        }, [cookies, module_id]
    )
    
    useEffect(
        () => {
            
            if (rating !== null) return;

            const optional_module = votes.filter(pair => pair[0].nr == slash_id)
            
            if (optional_module.length > 0) {
                setRating(optional_module[0][1])
            } else {
                setRating(0)
            }

        }, [votes]
    )

    const updateVote = (rating) => {
        if (rating === null) return;
        if (votes.length === 0 ) return;
        if (!('user' in cookies)) return;
        clearTimeout(timeout);
        setTimeoutState(setTimeout(() => {
            setVoteRequest(slash_id, rating)
                .then(r => r.json())
                .then(module => {
                    setVotes(votes => 
                        rating != 0 ?
                        [...votes.filter(vote => vote[0].nr !== slash_id), [module, parseInt(rating)] ]
                        : votes.filter(vote => vote[0].nr !== slash_id) )
                })
        }, 500))
    }

    return (
        <>
        {(cookies != null && rating != null) && 
            <RangeInput 
                min={-5} 
                max={5} 
                value={rating} 
                onChange={r => {updateVote(parseInt(r.target.value)); setRating(r.target.value)}}/>}
        </>
    );
}