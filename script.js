let display = document.getElementById('inpt');
let allBtns = document.querySelectorAll('button');


let output = ""

let arr = Array.from(allBtns);
arr.forEach(function(button){
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            output = eval(output);
            display.value = output
        }
       else if(e.target.innerHTML== 'AC'){
            output = "";
            display.value = output
        }
        else if(e.target.innerHTML == 'DEL'){
            output=  output.substring(0, output.length-1);
            display.value=output
        }


else{
    output+= e.target.innerHTML;
    display.value = output
}
        

    })
})