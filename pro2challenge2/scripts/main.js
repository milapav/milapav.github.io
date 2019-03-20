function displayTime() {
		var date = new Date();
		
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();

		hour = addZero(hour);
		min = addZero(min);
		sec = addZero(sec);

		document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec;


	//ADAPT:change of background image (noon & evening)//
		if(hour <= 12){
			document.body.style.backgroundImage = "url('./images/1.jpg')"
		}else{
			document.body.style.backgroundImage = "url('./images/2.jpg')"
		}


	setTimeout(displayTime,1000);

}

//add zeros if its less tahn 10//
function addZero(number){
	if (number< 10){
		number = "0" + number;
	}
return number;
}

//colors for theme//
function changeColor(){
var textColor = 0;

document.getElementById('button').onclick = function(){
	if(textColor == 0){
		document.body.style.color = "black";
		textColor ++;
	}else{
		document.body.style.color = "white";
		textColor --;
	}
}
};



