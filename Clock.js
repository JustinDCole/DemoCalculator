    class Overview {
    constructor (time, shift) {
    this.time = time
    this.shift = shift
    }

longhand = document.querySelector("data-hour-hand")
bysec = document.querySelector("data-second-hand")
horas = document.querySelectorAll(".marks").innerText
stopwatch = document.querySelector("p").innerText
everyhour = Array.from(horas)
tiempo = stopwatch.getTime();

longhand.addEventListener('click', moveHourHand(this.shift)) 
function moveHourHand() {
   longhand.style.position.marginBottom = ''
   longhand.style.position.marginLeft = ''
   this.shift = setInterval(longhand, 3600)
   longhand.style.transform = rotate(30 * Math.PI/180)
   while (longhand.rotate(30*Math.PI/180)) {
       for (i = 0; i < everyhour.length; i++) {
    longhand.style.position = everyhour[i]
}
this.time = tiempo.getHours();
this.time += 1                       //Changes the hour part of the clock
return this.time
   }


function checkHour(longhand) {
moveHourHand.every(horas)
}

shorthand.addEventListener('click', moveMinuteHand())
function moveMinuteHand() {
shorthand.style.position.marginLeft = '' //grab current position of minute hand
shorthand.style.position.marginBottom = ''
this.shift = setInterval(shorthand, 60) // set the interval for how often the hand should rotate
shorthand.style.transform = rotate(30 * Math.PI/180) //specify how often the hand should rotate
while(shorthand.rotate(1 * Math.PI/180)) { //number of degrees hand rotates at a time
this.time = tiempo.getMinutes()
this.time += 1                   //Changes the minute part of the clock
return this.time
}
}

bysec.addEventListener('click', moveSecondHand())
function moveSecondHand() {
while(longhand.position != '') { //set up a while loop for wherever around the dot the hand is, no matter what
this.shift = setInterval(bysec, 1) //have the arm moving continuously every sec
}
bysec.style.position.marginLeft = '611px';
bysec.style.position.marginBottom = '349px';
bysec.rotate(2 * Math.PI/180)
}
}
