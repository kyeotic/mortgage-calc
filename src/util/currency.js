import numeral from 'numeral';
const currency = (value) => numeral(value).format('$0,0.00');
export default currency;