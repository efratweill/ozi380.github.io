var min = document.querySelector('#minuets').value
var mininput = document.querySelector('#minuets')
var sec = document.querySelector('#seconds').value
var secinput = document.querySelector('#seconds')
var clockMin=document.querySelector('#clockmin')
var clocksec=document.querySelector('#clocksec')
var loadingLogo=document.querySelector('#loading')
var stopButton = document.getElementById("stop");
var pauseButton=document.querySelector("#pause")
var pauseCheck=0
var pausedSec;
var pausedMin;
mininput.onchange=function(){
  clockmin.innerText=mininput.value+":"
  mininput.value<10?
  (clockmin.innerText="0"+mininput.value+":"):clockmin.innerText=mininput.value+":";
}

secinput.onchange=function(){
  secinput.value<10?
  (clocksec.innerText="0"+secinput.value):clocksec.innerText=secinput.value;
}


async function fetchCats() {
    var img = await fetch("https://aws.random.cat/meow");
    var json = await img.json();
    document.querySelector('img').src=json.file
      document.querySelector('#loading').style.display='none'
      document.querySelector('#catImage').style.display='inline-block'
}

var countdown = function(){
  min = document.querySelector('#minuets').value
  sec = document.querySelector('#seconds').value
  var intervalId=setInterval(function(){
    var stopCount = function() {  
        clearInterval(intervalId);
    }
    if(pauseCheck!==0){{
      pausedSec = pausedSec-1}
      if(pausedSec <0){  
        pausedMin=pausedMin-1
        pausedSec = 59
    }
    clockMin.innerHTML=(pausedMin)+':'
    clocksec.innerHTML=pausedSec
    pausedMin<10?(clockMin.innerText="0"+pausedMin+":"):pausedMin+":"; pausedSec<10?clocksec.innerText="0"+pausedSec:pausedSec
  } 
    if(pauseCheck===0){{
      sec = sec-1}

      if(sec <0){  
        min=min-1
        sec = 59
      } 
      var pauseCount= function(){
        stopCount()
        pauseCheck=1
        pausedMin = min
        pausedSec= sec}

        clockMin.innerHTML=(min)+':'
    clocksec.innerHTML=sec
    min<10?(clockMin.innerText="0"+min+":"):min+":"; sec<10?clocksec.innerText="0"+sec:sec
    }
    if( min<0||pausedMin<0){
      document.querySelector('#loading').style.display='inline-block'
      fetchCats();
      stopCount();  
      document.querySelector('timer').style.display="none"
    }
    stopButton.addEventListener('click',stopCount)
          pauseButton.addEventListener('click',pauseCount)
        },1000);
}

var startButton = document.getElementById("start");
startButton.addEventListener('click',countdown)
