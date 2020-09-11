"use strict";

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * points - зарабаотанные баллы
 * addPoint - 
 */

const player = {
    points: -1,
	showState(){
		if (this.point > 0){
			alert(`Вы заработали ${this.point}`);	
		} else {
			alert('Вы проиграли');			
		}
	}
};