const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = `1 Jan 2025`;
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const result = (newYearsDate - currentDate) / 1000;

  //   days
  const days = Math.floor(result / 3600 / 24);
  //   hours
  const hours = Math.floor(result / 3600) % 24;
  //   minutes
  const minutes = Math.floor((result / 60) % 60);
  //   seconds
  const seconds = Math.floor(result % 60);

  //   console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

// Initial call
countdown();

setInterval(countdown, 1000);

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
