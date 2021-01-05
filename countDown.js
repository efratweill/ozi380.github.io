var loadingLogo=document.querySelector('#loading')
async function fetchCats() {
    var img = await fetch("https://aws.random.cat/meow");
    var json = await img.json();
    document.querySelector('img').src=json.file
    document.querySelector('#loading').style.display='none'
}

var countdown = function(){
    var min = document.querySelector('#minuets').value
    var sec = document.querySelector('#seconds').value
    var clock=document.querySelector('#clockmin')
   
    var intervalId=setInterval(function(){
    sec = sec-1
    if(sec <0){  
        min=min-1
        sec = 59
    }
    clock.innerHTML=(min)+':'+(sec)
    if(sec<10){
        clock.innerHTML=(min)+':'+"0"+(sec)
    }
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
