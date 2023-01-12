function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const refs = {
    butnStart: document.querySelector('[data-start]'),
    butnStop: document.querySelector('[data-stop]'),
}

refs.butnStart.addEventListener('click', onStartClick);
refs.butnStop.addEventListener('click', onStopClick);

  function onStartClick(event) {
    refs.butnStart.disabled = true;
  timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopClick(event) {
  clearInterval(timerId);
  refs.butnStart.disabled = false;
} 
