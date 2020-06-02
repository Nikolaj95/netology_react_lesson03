import React from 'react';
import Stars from "./components/Stars";
import './App.css';

function App({film}) {
    let films = film.map(item => <Stars count={item.stars}/>);

    return (

        <div className={'card'}>
            {films}
        </div>
    );
}

export default App;
