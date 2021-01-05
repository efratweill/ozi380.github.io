var min = document.querySelector('#minuets').value
var mininput = document.querySelector('#minuets')
var sec = document.querySelector('#seconds').value
var secinput = document.querySelector('#seconds')
var clockMin=document.querySelector('#clockmin')
var clocksec=document.querySelector('#clocksec')
var loadingLogo=document.querySelector('#loading')
mininput.onchange=function(){
  clockmin.innerText=mininput.value+":"
}
secinput.onchange=function(){
  secinput.value<10?
  clocksec.innerText="0"+secinput.value:clocksec.innerText=secinput.value;
}
async function fetchCats() {
    var img = await fetch("https://aws.random.cat/meow");
    var json = await img.json();
    document.querySelector('img').src=json.file
      document.querySelector('#loading').style.display='none'
}
    
var countdown = function(){
  min = document.querySelector('#minuets').value
  sec = document.querySelector('#seconds').value
    var intervalId=setInterval(function(){
    sec = sec-1
    if(sec <0){  
        min=min-1
        sec = 59
    }
    clockmin.innerHTML=(min)+':'
    clocksec.innerHTML=sec
    min<10?(clockMin.innerText="0"+min+":"):min+":"; sec<10?clocksec.innerText="0"+sec:sec
    var stopCount = function() {  
        clearInterval(intervalId);
    
      }
    if( min<0){
    document.querySelector('#loading').style.display='inline-block'
      fetchCats();
      stopCount();  
        document.querySelector('timer').style.display="none"
        document.querySelector('#catImage').style.display="inline"
        }
          var stopButton = document.getElementById("stop");
          stopButton.addEventListener('click',stopCount)
        },1000);
}

var startButton = document.getElementById("start");
startButton.addEventListener('click',countdown)
