// You are building a search feature for your e-commerce site. 
// Write a function named filterProducts that takes an array of product objects and a filter criterion.
// The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    let result = [];

    for (let i = 0; i < products.length; i++) {
        let match = true;

        for (let key in criterion) {
            if (products[i][key] !== criterion[key]) {
                match = false;
                break;
            }
        }

        if (match) result.push(products[i]);
    }

    return result;
}
const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Shoes", category: "Fashion", price: 2000 },
    { name: "Watch", category: "Fashion", price: 1500 }
];

console.log(filterProducts(products, { category: "Electronics" }));


console.log(filterProducts(products, { category: "Fashion", price: 2000 }));