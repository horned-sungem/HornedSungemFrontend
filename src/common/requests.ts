import Config from './Config';
import Cookies from 'universal-cookie';

export const request = (url: string, method='GET', body=null): Promise<Response> => {

    const cookies = new Cookies();

    return fetch(Config.url + url, {
        credentials: 'include',
        headers: new Headers({
            'Authorization': 'Token '+cookies.get('user').token,
            'Content-Type': 'application/json'
            
        }),
        method: method,
        body: body ? JSON.stringify(body) : undefined
    })
    
};

export const getModulesRequest = () => (request('api/modules/'));

export const getModuleRequest = (id: string) => (request('api/module/'+id+'/'));

export const getVotesRequest = () => (request('api/votes/'));

export const setVoteRequest = (module_id: string, score: number) => (request('api/vote/', 'POST', {
    module: module_id,
    score: score
}));

export const loginRequest = (username: string, password: string) => (request('api-token-auth/', 'POST', {
    username: username,
    password: password
}));

export const registerRequest = (username: string, password: string) => (request('api/register/', 'POST', {
    username: username,
    password: password
}));

export const getSimilarModulesRequest = (module_id: string) => (request('api/similar/'+module_id+'/'));

export const getRecommendsRequest = () => (request('api/recommend/'));