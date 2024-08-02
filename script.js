

function start(){
    console.log('testing')
    randomVar=Math.floor(Math.random()*100)
    document.querySelector('article').innerHTML='<img src="lucky.gif">'
    document.getElementById('ti').innerText='Congratulations! you got a  '+randomVar+'% discount!'
}


var sec=1800;
setInterval("runClock()",1000);
console.log(countDownDate)
function runClock(){
  var minutes = Math.floor(sec/60);
  var seconds = sec%60;
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  if (sec > 0) {
    sec-=1;
  }
  else{
    clearInterval("runClock()");
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}
runClock()

function message(){
  alert("Submitted successfully!")
}




