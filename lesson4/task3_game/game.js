"use strict";

let game = {
    /**
     * Запускает игру.
     */
    run() {
        
        let currentQuestion = 0;
		
		// Цикл пока не пройдены все вопросы или пока пользователь не проиграл
		while (currentQuestion < (questions.length+1) && player.point !== 0) {
            
			let objQuestion = questions[currentQuestion]; // Текущий вопрос
            let userAnswer = question.getAnswer(objQuestion); //Получаю ответ от пользователя на текущий вопрос
			
			if (userAnswer === null){ //Если пользователь не выбрал ответа, то выход
				break;
			}		
            
			currentQuestion++; //Увеличиваем номер вопроса
			player.point = question.getProfit(objQuestion,userAnswer); // Получаю кол-во заработанных рублей на текущем вопросе
			player.currentQuestion=currentQuestion;
			player.showState(); //Показываем состояние зарабатанных денег.
        };
		alert("Конец игры");
    },
    // Этот метод выполняется при открытии страницы.
    init() {
        this.run();
    }
};

game.init();