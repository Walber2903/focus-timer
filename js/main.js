const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonStopWatch = document.querySelector('.stopWatch');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes;
let seconds;

function resetControls() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    buttonStop.classList.add('hide');
    buttonStopWatch.classList.remove('hide');
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetDisplay() {
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
}

buttonPlay.addEventListener('click', () => {

    countdown()

    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

})

buttonPause.addEventListener('click', () => {

    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');

})

buttonStopWatch.addEventListener('click', () => {

    minutes = prompt("Quantos minutos de foco voce gostaria?");
    seconds = prompt("Quantos segundos de foco voce gostaria?");

    updateTimerDisplay(minutes, seconds)

    buttonStopWatch.classList.add('hide');
    buttonStop.classList.remove('hide');

})

buttonStop.addEventListener('click', () => {
    resetDisplay()
    resetControls()
})

buttonSoundOn.addEventListener('click', () => {

    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');

})

buttonSoundOff.addEventListener('click', () => {

    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');

})

function countdown() {
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent) 
        
        if(seconds <= 0) {
            seconds = 60
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")

            if(minutes <= 0) {
                resetDisplay()
                resetControls()
    
                return
            }
        }
              
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        
        countdown()
    }, 1000)
}