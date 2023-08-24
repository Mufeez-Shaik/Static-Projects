const display = document.querySelector('.counter_preview');
const allbtns = document.querySelector('#allBtns');
allbtns.addEventListener('click', count)

let value = 0;
function count(e){
    const eachBtn = e.target.id

if(eachBtn==='increment'){
    value = value +1
}
else if(eachBtn ==='decrement'){
    value = value -1
}
else{
    value=0
}
if(value < 0){
    value = 0 
}

display.textContent = value
}