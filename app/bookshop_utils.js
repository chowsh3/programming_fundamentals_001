function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function makeHalfPrice (price) {
    return (price * 0.5);
}

function countBooks (booksList) {
  return booksList.length;
}

function isInStock (book) {
        if(book.quantity <= 0) { 
        return false;
        } 
    return true;
}

function getTotalOrderPrice (price,quantity) {
    return (price * quantity)*1.2;
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};
