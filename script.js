const h4 = document.querySelector("h4");
const h1 = document.querySelector("h1");
const timeNow = document.querySelector(".timeNow");
const stopWatch = document.querySelector(".stopwatch");
const clockControls = document.querySelector(".stopWatchButtons");
const date = document.querySelector(".date");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timeInClock = document.querySelector(".timeInClock");
const counterInClock = document.querySelector(".counterInClock");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//BUGS that need fixing-
//1. While counter is running, switch to clock

const today = new Date();
let hours = today.getHours();
let displayedHours = hours;
hours > 12 && hours < 24 ? (displayedHours -= 12) : hours;

if (hours >= 24) hours = 0;
const minutes =
  today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
const time = hours >= 12 && hours < 24 ? "pm" : "am"; //<= Adds 0 to minutes if it's less than 10 to keep the 2 digits format

const hoursNow = `${displayedHours}:${minutes} ${time}`;
const dateNow = `Today is: ${
  months[today.getMonth()]
} ${today.getDate()}, ${today.getFullYear()}`;

let counterHours = 0;
let counterMinutes = 0;
let counterSeconds = 0;
let interval = 0;

//===========FUNCTIONS============//

//function for stopwatch
function timer() {
  counterSeconds++;

  let hrs =
    Math.floor(counterSeconds / 3600) < 10
      ? `0${Math.floor(counterSeconds / 3600)}`
      : Math.floor(counterSeconds / 3600);
  let min =
    Math.floor((counterSeconds - hrs * 3600) / 60) < 10
      ? `0${Math.floor((counterSeconds - hrs * 3600) / 60)}`
      : Math.floor((counterSeconds - hrs * 3600) / 60);
  let sec =
    counterSeconds % 60 < 10 ? `0${counterSeconds % 60}` : counterSeconds % 60;

  counterInClock.innerText = `${hrs}:${min}:${sec}`;
  console.log("working");
  console.log(counterSeconds);
}

function count() {
  interval = setInterval(timer, 1000);
}

date.innerText = dateNow;
timeInClock.innerText = hoursNow;
counterInClock.innerText = `00:00:00`;

//=========EVENTLISTENERS=============//

//Start StopWatch
start.addEventListener("click", () => {
  count();
  start.classList.add("pointerEventsNone");
  reset.classList.add("pointerEventsNone");
});

//Stop StopWatch
stop.addEventListener("click", () => {
  start.classList.remove("pointerEventsNone");
  reset.classList.remove("pointerEventsNone");
  clearInterval(interval);
  interval = 0;
});

//Reset StopWatch
reset.addEventListener("click", () => {
  counterSeconds = 0;
  counterInClock.innerText = `00:00:00`;
});

//Clock Button
timeNow.addEventListener("click", () => {
  counterInClock.dataset.hide = true;
  delete timeInClock.dataset.hide;
  timeNow.dataset.active = true;
  delete stopWatch.dataset.active;
  clockControls.dataset.hide = true;
  delete date.dataset.hide;
});

//Stopwatch Button
stopWatch.addEventListener("click", () => {
  timeInClock.dataset.hide = true;
  delete counterInClock.dataset.hide;
  stopWatch.dataset.active = true;
  delete timeNow.dataset.active;
  date.dataset.hide = true;
  delete clockControls.dataset.hide;
});
