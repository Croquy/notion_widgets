 
function date() {
    var today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerHTML = today.toLocaleDateString("fr-FR",options);
}


function clock() {
var today = new Date();
var hour = zeros(today.getHours());
var minutes = zeros(today.getMinutes());
var seconds = zeros(today.getSeconds());

hrs = today.getHours();
if (hrs < 12)
        greet = 'Bonjour ';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Bon après midi ';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Bonsoir  ';
// console.log(today.toLocaleTimeString());
document.getElementById('greet').innerHTML = greet;
document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = minutes;
document.getElementById('sec').innerHTML = seconds;
}


    
// adds zero infront of single digit number
function zeros(num) {
if (num < 10) {
    num = '0' + num
};
return num;
}

function dateTime() {
date();
clock();
setTimeout(dateTime, 500);
}

dateTime()
// END 