let workDuration = 25;
let breakDuration = 5;
let x = "default";

function work() {
  document.getElementById("work-break").innerHTML = "Work&nbsp;<i class='fa fa-rocket' aria-hidden='true'></i>";
}

function breaktime() {
  document.getElementById("work-break").innerHTML = "Break&nbsp;<i class='fa fa-coffee' aria-hidden='true'></i>";
}

function printWorkDuration() {
  document.getElementById("countdown").innerHTML = workDuration + ":00";
}

function printBreakDuration() {
  document.getElementById("countdown").innerHTML = breakDuration + ":00";
}

// Countdown static display
printWorkDuration();

// Select Work button
document.getElementById("work").onclick = selectWork;
function selectWork() {
  x = "work";
  work();
  printWorkDuration();
}

// Select Break button
document.getElementById("break").onclick = selectBreak;
function selectBreak() {
  x = "break";
  breaktime();
  printBreakDuration();
}

// Add or minus 5mins to Work counter
document.getElementById("work-add").onclick = addFiveWork;
function addFiveWork() {
  x = "work";
  workDuration = workDuration + 5;
  printWorkDuration();
  work();
}

document.getElementById("work-minus").onclick = minusFiveWork;
function minusFiveWork() {
  x = "work";
  workDuration = workDuration - 5;
  printWorkDuration();
  work();
}

// Add or minus 1min to Break counter
document.getElementById("break-add").onclick = addOneBreak;
function addOneBreak() {
  x = "break";
  breakDuration = breakDuration + 1;
  printBreakDuration();
  breaktime();
}

document.getElementById("break-minus").onclick = minusOneBreak;
function minusOneBreak() {
  x = "break";
  breakDuration = breakDuration - 1;
  printBreakDuration();
  breaktime();
}

// Start countdown when play button clicked
document.getElementById("start").onclick = startCountdown;
function startCountdown() {
  if (x==="default" || x==="work") {
    countdown(workDuration);
  } else if (x==="break") {
    countdown(breakDuration);
  }
}

// Reset countdown
document.getElementById("reset").onclick = resetCountdown;

function resetCountdown() {
  clearInterval(timeoutHandle);
  if (x==="default" || x==="work") {
    printWorkDuration();
  } else if (x==="break") {
    printBreakDuration();
  }
}

// Countdown
var timeoutHandle;

function countdown(minutes) {
  var seconds = 60;
  var mins = minutes;
  function tick() {
    var counter = document.getElementById("countdown");
    var current_minutes = mins-1
    seconds--;
    counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if( seconds > 0 ) {
      timeoutHandle=setTimeout(tick, 1000);
    } else if (seconds == 0) {
      alert("Time's Up!");
    } else {
      if(mins > 1){
        // countdown(mins-1);   never reach “00″ 
        setTimeout(function () { countdown(mins - 1); }, 1000);
      }
    }
  }
  tick();
}