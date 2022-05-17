const el = document.querySelector(".clock");
const bell = document.querySelector("audio");
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
let count = 0;
let countTwo = 0;
const startBtn = document.querySelector(".start");
sessionStorage.setItem("btn", "focus");
let initial, totalsecs, perc, paused, mins, seconds;
startBtn.addEventListener("click", ()=>{
    let btn = sessionStorage.getItem("btn");
    if (btn === "focus") mins = +sessionStorage.getItem("focusTime") || 25;
    else if (btn === "break") mins = +sessionStorage.getItem("breakTime") || 5;
    else mins = +sessionStorage.getItem("restTime") || 15;
    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    startBtn.style.transform = "scale(0)";
    paused = false;
});
function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    if (seconds > 0) {
        // calculating percentage of time
        perc = Math.ceil((totalsecs - seconds) / totalsecs * 100);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
    } else {
        mins = 00;
        seconds = 00;
        let btn = sessionStorage.getItem("btn");
        if (btn === "focus") {
            // add one to the count once a focus mode has been completed
            count = count + 1;
            updateSet(count);
            startBtn.textContent = "start break";
            startBtn.classList.add("break");
            sessionStorage.setItem("btn", "break");
        } else if (count % 4 === 0) {
            count = 0;
            updateSet(count);
            countTwo = countTwo + 1;
            updateGame(countTwo);
            startBtn.textContent = "take rest";
            sessionStorage.setItem("btn", "rest");
        } else {
            startBtn.classList.remove("break");
            startBtn.textContent = "start focus";
            sessionStorage.setItem("btn", "focus");
        }
        startBtn.style.transform = "scale(1)";
    }
}
function updateSet(count1) {
    const sets = document.querySelector("#sets");
    sets.innerHTML = count1;
}
function updateGame(countTwo1) {
    const games = document.querySelector("#games");
    games.innerHTML = countTwo1;
}

//# sourceMappingURL=pomodoro.9c998928.js.map
