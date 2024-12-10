import axios from 'axios';

export default axios.create({
    baseURL:'https://da61-2402-a00-1b3-64f-d11d-4372-8ccf-fc74.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
        'Access-Control-Allow-Origin': '*'
    },
});
