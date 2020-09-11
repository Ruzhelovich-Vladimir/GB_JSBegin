"use strict";

let question = {
    /**
     * Получает ответ от пользователя.
     * @returns {int} Возвращаем номер ответа
     */
	
	getAnswer(objQuestion) {
		
		let availableАnswer = [1, 2, 3, 4]; // Доступные значения ввода.        
        while (true) {
            // Получаем от пользователя направление.
			let strChoice="";
			for (let inx=0;inx < availableАnswer.length;inx++) {
				strChoice = `${strChoice}    ${inx+1} - ${objQuestion.choice[inx]}`;
			}
            let answer = parseInt(prompt(`${objQuestion.question}\n ${strChoice}`));
            if (isNaN(answer)) {
                return null;
            }
            // Если введено не корректное значение, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableАnswer.includes(answer)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3 или 4.');
                continue;
            }
            // Если пользователь ввел корректное значение - отдаем его.
            return answer;
        }
    },
	
	/**
 	* Получение кол-во заработанных рублей, если ответ правильный
 	*/
	getProfit(objQuestion,answer){
		
		let point=0;
		
		if (answer == objQuestion.rightАnswer) {
				point = objQuestion.point ;
				alert('Ответ правильный.');
			} else {
				alert('Вы ошиблись.');
				point = 0;
			}
		
		return point;
	}
};
		

