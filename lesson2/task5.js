"use strict";

console.log("### Вполнение скрипта #5"); // для отладки
/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/


/**
 * 
 * @param {Number} arg1 первый аргумент]
 * @param {Number} arg2 второй аргумент
 * @param {Char} operation [+,-,*,/]
 */
function mathOperation(arg1, arg2, operation)
{
	switch (operation){
		case "+": 
			return my_sum(arg1,arg2);
		case "-":
			return my_diff(arg1,arg2);
		case "*":
			return my_mult(arg1,arg2);
		case "/":
			return my_div(arg1,arg2);
		default: 
			return;
	}
}

/**
 * Отладочная функция
 */
function my_test5()
{
	console.log("*** Test #5 ***"); 
 	console.log(mathOperation(2,3,"+")); 
 	console.log(mathOperation(2,3,"-")); 
 	console.log(mathOperation(2,3,"*")); 
 	console.log(mathOperation(2,3,"/")); 
}

my_test5();