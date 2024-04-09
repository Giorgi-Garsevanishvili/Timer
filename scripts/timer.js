let timeArray = ['00', '00', '00'];
let timerInterval;
let ins = false;

const savedTime = localStorage.getItem('savedtime')
if (savedTime){
  timeArray = JSON.parse(savedTime);
};

displayTime();

document.querySelector('.js-start-timer').addEventListener('click', () => {
  if (ins === false){
    timerStart();
    document.querySelector('.js-start-timer').classList.add('start-active-css');
  } else {
    return ins;
  }

});

document.querySelector('.js-stop-timer').addEventListener('click', () => {
  document.querySelector('.js-start-timer').classList.remove('start-active-css');
  stopTimer();
})

document.querySelector('.js-reset-timer').addEventListener('click', () => {
  stopTimer();
  resetTimer();
})



function timerStart() {
  ins = true;

  if (ins === true){
    timerInterval = setInterval(() => {
      timeArray[0] = pad(parseInt(timeArray[0]) + 1);
      displayTime();
        if (parseInt(timeArray[0]) === 60){
          timeArray[0] = '00';
          timeArray[1] = pad(parseInt(timeArray[1]) + 1);
        };
      saveTimer();
    }, 1000);
  
    setInterval(() => {
      if (parseInt(timeArray[1]) === 60) {
        timeArray[1] = '00';
        timeArray[2] = pad(parseInt(timeArray[2]) + 1);
      }
      saveTimer();
    }, 60000);
  
    return ins;
  } else if (ins === false){
    return ;
  };
  
  function pad(val) {
    return val < 10 ? '0' + val : val;
  };
  
  saveTimer();
}

function stopTimer(){
  if (ins === true){
    clearInterval(timerInterval);
    saveTimer();
    ins = false;
    return ins;
  };
  
};


function resetTimer (){
  timeArray = ['00', '00', '00'];
  displayTime();
  saveTimer();
}

function saveTimer (){
  localStorage.setItem('savedtime', JSON.stringify(timeArray));
};

function displayTime (){
  document.querySelector('.timer').innerHTML = `<p>${timeArray[2]}:${timeArray[1]}:${timeArray[0]}</p>`;
}