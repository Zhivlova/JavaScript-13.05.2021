"use strict";

/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let n = 100;
let i = 0;

while (i <= n) {
    if (i % i == 0)
        console.log(i++);
    else if (n <= 2)
        break;
    i++;
}

/* 2. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let basket = [
    {
        product: "pen",
        price: 50,
    },
    {
        product: "pencil",
        price: 48,
    },
    {
        product: "file",
        price: 15,
    },
    {
        product: "paper",
        price: 10,
    }
];

function countBasketPrice(x) {
    let BasketPrice = 0;
    for (let i = 0; i < x.length; i++) {
        BasketPrice += x[i];
    }
    return BasketPrice;
}
console.log(countBasketPrice(basket));

let result = basket.reduce((product, price) => product + price, 0);

console.log(result);