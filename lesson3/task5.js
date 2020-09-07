"use strict";

console.log("### Вполнение скрипта #5"); // для отладки
/*

5. Перед вами находится массив с продуктами в интернет-магазине. 
	Вам нужно:
		1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
		2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
		https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
*/

/**
* Выводт в консоль список продуктов
* @param {array} productsList списка продуктов
*/
function show_products_console(productsList){
		productsList.forEach(element => 
			console.log(`id = ${element.id}, price = ${element.price}, photos = ${element.photos}`));
};

(function __main__(){
	
	const products = [
		{
			id: 3,
			price: 127,
			photos: [
				"1.jpg",
				"2.jpg",
			]
		},
		{
			id: 5,
			price: 499,
			photos: []
		},
		{
			id: 10,
			price: 26,
			photos: [
				"3.jpg"
			]
		},
		{
			id: 8,
			price: 78,
		},
	];
 
	console.log("Список продуктов:");
	show_products_console(products);
	//Выполнение первого задания
	console.log("Товары, которые с фотографией:");
	const with_photos_result =
        products.filter(product => "photos" in product).filter(product => product.photos.length > 0);
	show_products_console(with_photos_result);
	//Выполнение второго задания
	console.log("Список товара отсортированный по возврастанию цены:");
    const sort_result = products.sort(function(item1, item2) {
            return item1.price - item2.price});
	show_products_console(sort_result);
    
}());


