import React from 'react';
import '../style.css';
import CheckLengthTitle from "./CheckLengthTitle";
import CheckCurrency from "./CheckCurrency";
import CheckQuantity from "./CheckQuantity";

export default function listing({items}) {

    let itemsList = items.map(item => {
        if (item.state !== 'removed') {
            return (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt='images'/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{CheckLengthTitle(item.title)}</p>
                        <p className="item-price">{CheckCurrency({
                            cur: item.currency_code,
                            price: item.price
                        })}</p>
                        <p className={`item-quantity ${CheckQuantity(item.quantity)}`}> {item.quantity} left</p>
                    </div>
                </div>
            );
        }
    });
    return <div className="item-list">{itemsList}</div>;
}
