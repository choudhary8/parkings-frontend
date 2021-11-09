import axios from 'axios'

axios.defaults.withCredentials = false;

export const registerUser = ( details ) => {
    return axios.post( 'http://localhost:3000/register', details ,
    {
        headers : {
            'Content-type' : 'application/json'
        }
    })
    .then( response => response.data)
    .catch( error => error.message )
}