let hours = document.getElementById('hr');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');

function timeCycle(){
    let date = new Date();
    
    let hh =  date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    
    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    minutes.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(timeCycle,1000)