//object+values//
var parameters = {
	fuel: 70,
	throttle: 15,
	speed:90,
	acceleration: 20
}

function displayParameters(){
document.getElementById('fuel-lvl').style.width = parameters.fuel + '%';
document.getElementById('percent-fuel').innerHTML = parameters.fuel + '%';
if (parameters.fuel < 20) {
	document.getElementById('fuel-lvl').style.backgroundColor = 'red';
	alert('Return to the Earth ASAP');
} else if (parameters.fuel < 40) {
	document.getElementById('fuel-lvl').style.backgroundColor = '#F7A82A';
} else {
	document.getElementById('fuel-lvl').style.backgroundColor = '#0fffb7';
}
console.log('ok')


document.getElementById('throttle-lvl').style.width = parameters.throttle + '%';
document.getElementById('percent-throttle').innerHTML = parameters.throttle + '%';
if (parameters.throttle < 20) {
	document.getElementById('throttle-lvl').style.backgroundColor = 'red';
} else if (parameters.throttle < 40) {
	document.getElementById('throttle-lvl').style.backgroundColor = '#F7A82A';
} else {
	document.getElementById('throttle-lvl').style.backgroundColor = '#0fffb7';
}



document.getElementById('speed-lvl').style.width = parameters.speed + '%';
document.getElementById('percent-speed').innerHTML = parameters.speed + 'km/h';
if (parameters.speed < 20) {
	document.getElementById('speed-lvl').style.backgroundColor = 'red';
} else if (parameters.speed < 40) {
	document.getElementById('speed-lvl').style.backgroundColor = '#F7A82A';
} else {
	document.getElementById('speed-lvl').style.backgroundColor = '#b666d2';
}



document.getElementById('acceleration-lvl').style.width = parameters.acceleration + '%';
document.getElementById('percent-acceleration').innerHTML = parameters.acceleration + '%';
if (parameters.acceleration < 20) {
	document.getElementById('acceleration-lvl').style.backgroundColor = 'red';
} else if (parameters.acceleration < 40) {
	document.getElementById('acceleration-lvl').style.backgroundColor = '#F7A82A';
} else {
	document.getElementById('acceleration-lvl').style.backgroundColor = '#0fffb7';
}

}
