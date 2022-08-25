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

buttonPlay.addEventListener('click', (event) => {
    event.preventDefault();

    countdown()

    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

})

buttonPause.addEventListener('click', (event) => {
    event.preventDefault();

    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');

})

buttonStopWatch.addEventListener('click', (event) => {
    event.preventDefault();

    minutes = prompt("Quantos minutos de foco voce gostaria?");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");

    seconds = prompt("Quantos segundos de foco voce gostaria?");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    buttonStopWatch.classList.add('hide');
    buttonStop.classList.remove('hide');

})

buttonStop.addEventListener('click', (event) => {
    event.preventDefault();

    buttonStop.classList.add('hide');
    buttonStopWatch.classList.remove('hide');

})

buttonSoundOn.addEventListener('click', (event) => {
    event.preventDefault();

    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');

})

buttonSoundOff.addEventListener('click', (event) => {
    event.preventDefault();

    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');

})

function countdown() {
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent) 
        

        if(minutes <= 0) {
            

            return
        }
        
        if(seconds <= 0) {
            seconds = 60
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        
        countdown()
    }, 1000)
}