"use strict";

console.log("### Вполнение скрипта #4"); // для отладки

/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Сумма чисел
 * @param {Number} x первое слогаемое
 * @param {Number} y второе слогаемое
 * @return {Number} Сумма
 */
function my_sum(x, y)
{
 	return x + y;
}

/**
 * Разность чисел
 * @param {Number} x уменьшаемое
 * @param {Number} y вычитаемое
 * @return {Number} разность
 */
function my_diff(x, y)
{
 	return x - y;
}

/**
 * Произведение чисел
 * @param {Number} x множимое
 * @param {Number} y множитель
 * @return {Number} произведение
 */
function my_mult(x, y)
{
	return x * y;
}

/**
 * Деление чисел
 * @param {Number} x делимое
 * @param {Number} y делитель
 * @return {Number} частное
 */
function my_div(x, y)
{
 	return x / y;
}

/**
 * Отладочная функция
 */
function my_test4()
{
 	console.log("*** Test #4 ***"); 
 	console.log(my_sum(2,3)); 
 	console.log(my_diff(2,3)); 
 	console.log(my_mult(2,3)); 
 	console.log(my_div(2,3)); 
}

my_test4();