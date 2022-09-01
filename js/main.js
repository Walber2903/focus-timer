import Sounds from './sounds.js'

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
let timerTimeout;

const sounds = Sounds();

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
    buttonStopWatch.classList.add('hide');
    buttonStop.classList.remove('hide');

    sounds.pressButton();

})

buttonPause.addEventListener('click', () => {

    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    clearTimeout(timerTimeout)
    sounds.pressButton();

})

buttonStopWatch.addEventListener('click', () => {

    minutes = prompt("Quantos minutos de foco voce gostaria?") || 0;
    seconds = prompt("Quantos segundos de foco voce gostaria?") || 0;

    updateTimerDisplay(minutes, seconds)

    buttonStopWatch.classList.add('hide');
    buttonStop.classList.remove('hide');

})

buttonStop.addEventListener('click', () => {
    resetDisplay()
    resetControls()
    sounds.pressButton();
})

buttonSoundOn.addEventListener('click', () => {

    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide'); 
    sounds.bgAudio.pause();

})

buttonSoundOff.addEventListener('click', () => {

    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
    sounds.bgAudio.play();

})

function countdown() {
    timerTimeout = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent) 
        
        if(seconds <= 0) {
            seconds = 60
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")

            if(minutes <= 0) {
                resetDisplay()
                resetControls()
                sounds.timeEnd();
                return
            }
        }
              
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        
        countdown()
    }, 1000)
}