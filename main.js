/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
*/

var celsius = prompt("Введите градусы по Цельсию");
var fahrenheit = (9 / 5) * celsius + 32;
alert("по Цельсию    " + celsius + "    по Фаренгейту     " + fahrenheit);

/* 2. Объявить две переменные: admin и name. Записать в name строку "Василий"; 
Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).*/

var name = 'Василий'
var admin = name;
alert(admin);

/* 3.  Чему будет равно JS-выражение 1000 + "108"? - Конкатенация, ответ 1000108   */
var a = 1000 + "108"
alert(a)