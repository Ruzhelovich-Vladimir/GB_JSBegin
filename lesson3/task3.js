"use strict";

console.log("### Вполнение скрипта #4"); // для отладки

/*
3. Выведите в консоль значения, указанные рядом с комментариями:
*/

/*
Не хочется задумываться об объявлении той или иной переменной в скриптах, которые работают в рамках одной страницы, поэтому восспользовался вашим решением. 

Делаю именованную фуннкцию, чтобы было проще читать код.
*/
(function __main__(){

	const post = {
		author: "John", //вывести этот текст
		postId: 23,
		comments: [
			{
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: {
					likes: 10,
					dislikes: 2 //вывести это число
				}
			},
			{
				userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1
				}
			},
		]
	}

	console.log(post.author);
	console.log(post.comments[0].rating.dislikes);
	console.log(post.comments[1].userId);
	console.log(post.comments[1].text);

}());