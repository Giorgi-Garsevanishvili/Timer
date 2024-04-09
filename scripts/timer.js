let minutes = '00';
let hours = '00';
let seconds = '00';
let ins = false;

document.querySelector('.js-start-timer').addEventListener('click', () => {
  if (ins === false){
    timerStart();
  } else {
    return ins;
  }

});




function timerStart(val) {
  ins = true;

  if (ins === true){
    setInterval(() => {
      seconds = pad(parseInt(seconds) + 1);
      document.querySelector('.timer').innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
      console.log(seconds);
    }, 1000);
  
    setInterval(() => {
      if (seconds = 60) {
        seconds = '00';
        minutes = pad(parseInt(minutes) + 1);
        document.querySelector('.timer').innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
        console.log(minutes, seconds);
      }
    }, 60000);
  
    setInterval(() => {
      if (minutes = 60) {
        minutes = '00';
        hours = pad(parseInt(hours) + 1);
        document.querySelector('.timer').innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
        console.log(hours,minutes, seconds);
      }
    }, 3600000);
  
    return ins;
  } else if (ins === false){
    return ;
  };
  
  function pad(val) {
    return val < 10 ? '0' + val : val;
  };
  

}
