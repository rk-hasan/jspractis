// window(alert,innerWidth,innerHeight),Promt,Confrim,Setinterval,setTimeOut,Date,Time,screen.hight,screen.width



function digitalClock(){
   let date =  new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let secound = date.getSeconds();
    let formate = "AM";

    if(hours == 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        formate = "PM"
    }

    document.getElementById('hours').innerText = hours + ":";
    document.getElementById('minute').innerText = minute + ":";
    document.getElementById('secound').innerText = secound;
    document.getElementById('formate').innerText = formate;

    setInterval(digitalClock, 1000)
}

digitalClock();
