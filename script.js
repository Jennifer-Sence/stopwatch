const timerEl = document.getElementById("timer");
const startButtonEL = document.getElementById("start");
const stopButtonEL = document.getElementById("stop");
const resetButtonEL = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime= Date.now() - elapsedTime;
    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startButtonEL.disable = true;
    stopButtonEL.disable = false;
    
}

function formatTime(elapsedTime){
     const miliseconds = Math.floor((elapsedTime % 1000) / 10);

     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

     const hours = Math.floor(elapsedTime / (1000 * 60 * 60));


     return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +

        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +

        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
         "." +
             (miliseconds > 9 ? miliseconds : "0" + miliseconds))
}

function stopTimer(){
    clearInterval(timeInterval);
    startButtonEL.disable = false;
    stopButtonEL.disable = true;
}

function resetTimer(){
    clearInterval(timeInterval);

    elapsedTime = 0;
    timerEl.textContent ="00:00:00"

    startButtonEL.disable = false;
    stopButtonEL.disable = true;
}

startButtonEL.addEventListener("click", startTimer)


stopButtonEL.addEventListener("click", stopTimer)

resetButtonEL.addEventListener("click", resetTimer)