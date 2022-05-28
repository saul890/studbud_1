const el = document.querySelector(".clock");
const bell = document.querySelector("audio");
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
let count = 0;
let countTwo = 0;



const startBtn = document.querySelector(".start");
sessionStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

startBtn.addEventListener("click", () => {
    let btn = sessionStorage.getItem("btn");

    if (btn === "focus") {
        mins = +sessionStorage.getItem("focusTime") || 25;
    } else if (btn === "break") {
        mins = +sessionStorage.getItem("breakTime") || 5;
    }
    else {
        mins = +sessionStorage.getItem("restTime") || 15;
    }

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
        perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
    
    } else {
        mins = 00;
        seconds = 00;
        let btn = sessionStorage.getItem("btn");
 
        if (btn === "focus"){
            // add one to the count once a focus mode has been completed
            
            count = count + 1;
            updateSet(count);
            
            startBtn.classList.add("break");

            if (count % 4 == 0){
                sessionStorage.setItem("btn", "rest");
                startBtn.textContent = "Take rest";
            }
            else if (count % 4 != 0){
                sessionStorage.setItem("btn", "break");
                startBtn.textContent = "Start break";
            }
            
        
        } else if (btn === "rest"){
            count = 0;
            updateSet(count);
            countTwo = countTwo + 1
            updateGame(countTwo);
            startBtn.classList.remove("break");
            startBtn.textContent = "Start focus";
            sessionStorage.setItem("btn", "focus");

        } else if (btn === "break") {
            startBtn.classList.remove("break");
            startBtn.textContent = "Start focus";
            sessionStorage.setItem("btn", "focus");
        }
        startBtn.style.transform = "scale(1)";
    }

}

function updateSet(count){
    const sets = document.querySelector("#sets");
    sets.innerHTML = count;
}

function updateGame(countTwo){
    const games = document.querySelector("#games");
    games.innerHTML = countTwo;
}

