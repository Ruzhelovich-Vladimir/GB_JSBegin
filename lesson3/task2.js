"use strict";

console.log("### Вполнение скрипта #2"); // для отладки

/*

2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
Для решения этой задачи используйте остаток от деления на 2, подробнее здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

*/

/*
Не хочется задумываться об объявлении той или иной переменной в скриптах, которые работают в рамках одной страницы, поэтому восспользовался вашим решением. 

Делаю именованную фуннкцию, чтобы было проще читать код.
*/

(function __main__(){
	for (let inx=0; inx < 11; inx ++){
		if (inx == 0) console.log(`${inx} – это ноль`)
		else if (inx % 2 !=0) console.log(`${inx} – нечетное число`)
			 else console.log(`${inx} – четное число`);
			};
}());