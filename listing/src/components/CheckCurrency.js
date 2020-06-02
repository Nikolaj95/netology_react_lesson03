export default function CheckCurrency(props) {
    let {cur, price} = props;
    if (cur === 'USD') return `$${price}`;
    if (cur === 'EUR') return `€${price}`;
    return `${price} ${cur}`;
}