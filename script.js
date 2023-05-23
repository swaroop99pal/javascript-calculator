
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
let calculation =[];
let removeComma

function calculate(button){
    let value = button.textContent;
    if(value==="ac"){
    calculation=['']
    removeComma = calculation.join('')
    display.textContent = removeComma;
        
    }else if(value==='='){
        display.textContent = eval(removeComma)
    }else if(value==="sc"){
        calculation = ["-"];

    removeComma = calculation.join("");
    display.textContent = removeComma; 
    
    }
    
    else{
    calculation.push(value);
    removeComma = calculation.join('')
    display.textContent = removeComma;
    }
    
    }

buttons.forEach(
    button=>button.addEventListener('click', ()=>calculate(button))
)
// for (var i =0; i<buttons.length; i++) {
//     buttons[i].addEventListener('click',
//     function(){
//         var value = this.getAttribute('data-value')
//         if(value =='+'){
//             operator='+';
//             operand1 = parseFloat(display.textContent);
            
//         }else if (value == "=") {
//             operand2 = parseFloat(display.textContent);
//             var result = eval(operand1 + ' ' + operator + ' ' + operand2);
//                 display.innerText = result;
//                 operand1 = result;
//                 operand2 = null;
//                 operator = null;
            
//     }else{

//         display.innerText += value
//     }
// })
// }
