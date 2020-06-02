import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const film = [{
    stars: 4,
}, {
    stars: 3,
}, {
    stars: 5,
}];



ReactDOM.render(
    <App film={film}/>,
    document.getElementById('root')
);


serviceWorker.unregister();
