"use strict";

console.log("### Вполнение скрипта #4"); // для отладки

/*

4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/


(function __main__(){
	
	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];
	
	//Вывод массива до применения скидки
	console.log("Цены до скидки:")
	products.forEach(element => 
					 console.log(`id = ${element.id}, price = ${element.price}`));
	
	let discount = 15; //Скидка
	
	//Применение скидки
	products.forEach(function(element){element.price *= (100-discount)/100 }); 
	
	//Вывод массива после применения скидки
	console.log("Цены после скидки:")
	products.forEach(element => console.log(`id = ${element.id}, price = ${element.price}`));
	
}());

