import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listing from './components/Listing';

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                reject(request.statusText);
            }
        });
        request.send();
    });
}
const listingRender = (info) => {
    ReactDOM.render(<Listing items={info}/>,
        document.getElementById('root'))
}

getData('./etsy.json')
    .then(listingRender)
    .catch(error => console.log(error));
