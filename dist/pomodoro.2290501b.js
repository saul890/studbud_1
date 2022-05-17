const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");
const focusValue = document.getElementById("focusValue");
const breakValue = document.getElementById("breakValue");
const restValue = document.getElementById("restValue");
focusTimeInput.value = 25;
breakTimeInput.value = 5;
document.querySelector(".start").addEventListener("click", (e)=>{
    e.preventDefault();
    sessionStorage.setItem("focusTime", focusTimeInput.value);
    sessionStorage.setItem("breakTime", breakTimeInput.value);
});
document.querySelector(".reset").addEventListener("click", ()=>{
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    mindiv.textContent = "00";
    secdiv.textContent = "00";
});
pauseBtn.addEventListener("click", ()=>{
    if (paused === undefined) return;
    if (paused) {
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }
});
function onFocusInput(sliderValue) {
    focusValue.innerHTML = sliderValue.value;
}
function onBreakInput(sliderValue) {
    breakValue.innerHTML = sliderValue.value;
}
function onRestInput(sliderValue) {
    restValue.innerHTML = sliderValue.value;
}

//# sourceMappingURL=pomodoro.2290501b.js.map
