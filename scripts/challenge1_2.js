//object+values//

var supplies = {
	food: 9,
	water: 70,	
}

function displaySupplies(){
	document.getElementById('food-lvl').style.width = supplies.food + '%';
	document.getElementById('percent-food').innerHTML = supplies.food + '%';
		if (supplies.food < 10) {
			document.getElementById('food-lvl').style.backgroundColor = 'red';
			alert('Return to the Earth, otherwise you will starve to death');
		} else if (supplies.food < 40) {
			document.getElementById('food-lvl').style.backgroundColor = '#F7A82A';
		} else {
			document.getElementById('food-lvl').style.backgroundColor = '#0fffb7';
		}

	document.getElementById('water-lvl').style.width = supplies.water + '%';
	document.getElementById('percent-water').innerHTML = supplies.water + '%';
		if (supplies.water < 10) {
			document.getElementById('water-lvl').style.backgroundColor = 'red';
			alert('Return to the Earth, otherwise you will die from thirst');
		} else if (supplies.water < 40) {
			document.getElementById('water-lvl').style.backgroundColor = '#F7A82A';
		} else {
			document.getElementById('water-lvl').style.backgroundColor = '#0fffb7';
	}

}