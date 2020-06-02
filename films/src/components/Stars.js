import React from 'react';
import Star from "./Star";
import shortid from 'shortid';

export default function Stars({count = 0}) {
    if (typeof count != 'number' || count < 1 || count > 5) {
        return null;
    }

    let starArr = new Array(Math.round(count)).fill('star');
    let starArrId = starArr.map(elem => ({id: shortid.generate(), value: elem}));
    let list = starArrId.map((elem) => <li key={elem.id}><Star/></li>);

    return (
        <div>
            <ul className="card-body-stars">{list}</ul>
        </div>


    );
}
