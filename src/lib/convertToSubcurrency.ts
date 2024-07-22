// 1USD = 23000VND
// 1 USD = 100 cent
function convertToSubcurrency(amount: number, factor = 100) {
    return Math.round(amount * factor);
}

export default convertToSubcurrency;
