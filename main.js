"use strict";

/* . Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/


function Number(unit, dozen, hundred) {
    this.unit = unit;
    this.dozen = dozen;
    this.hundred = hundred;
} getDigit() {
    console.log(this.unit + ' ' + this.dozen + ' ' + this.hundred);
}

if (i < 999)
    console.log(i);
else if (i > 999)
    console.log('Введите число меньше 999');

let i = new Number(3, 5, 1).getDigit();

/* 2. /* 2. Продолжить работу с интернет-магазином: 
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/*class Basket {
    constructor(product1, product2) {
        this.product1 = product1;
        this.product2 = product2;
    } getsumSalaries() {
        console.log(product1[price] + product2[price]);
    }
}*/

let basket = {
    getSumSalaries() {
        console.log(product1[3] + product2[3]);
    }
}

class Product {
    constructor(name, article, color, price) {
        this.name = name;
        this.article = article;
        this.color = color;
        this.price = price;
    }
}

let product1 = new Product('Shirt', 155667, 'white', 1000)
let product2 = new Product('Trousers', 139767, 'black', 2500)
console.log(product1, product2);

product1.__proto__ = basket;
product2.__proto__ = basket;

product2.getSumSalaries();

console.log('Сумма покупок на' + getSumSalaries() + 'рублей');




