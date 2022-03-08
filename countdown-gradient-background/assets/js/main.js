import "../css/index.css";
import "../scss/under-constrction.scss";

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.querySelector(id);
  var daysSpan = clock.querySelector(".dayEl span");
  var hoursSpan = clock.querySelector(".hourEl span");
  var minutesSpan = clock.querySelector(".minuteEl span");
  var secondsSpan = clock.querySelector(".secondEl span");

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.style.setProperty("--value", t.days);
    hoursSpan.style.setProperty("--value", t.hours);
    minutesSpan.style.setProperty("--value", t.minutes);
    secondsSpan.style.setProperty("--value", t.seconds);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// 1 April 2022
var deadline = new Date(Date.parse("Apr 1, 2022 16:00:00"));
initializeClock("#clockdiv", deadline);
