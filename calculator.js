var number = ""
var result = 0
var prevOperator = ""
var count = 0
const screen = document.querySelector(".screen") //get the screen

/*-------------------------Get all buttons------------------------------- */
function main(){
    document.querySelector('.calculator').addEventListener("click",event=>{
        console.log(event.target.innerText)
        buttonClick(event.target.innerText)
    })
}

/*------------------------------------------------------------------------*/

/*-------Check the type of clicked button---------- */
function buttonClick(value) {
    if(isNaN(parseInt(value))) handleOperator(value);
    else handleNumber(value);
}
/*------------------------------------------------ */

function handleOperator(op){
    switch(op){
        case "+":
        case "-":
        case "×":
        case "÷":
        prevOperator = op
        handleOperations()
        count++
        number = ""
        show("0")
        break;
        case "=":
        findPreviousOperator()
        number=result.toString()
        console.log(result)
        show(result)
        break;
        case "C":
        number=""
        result=0
        count=0
        show(result)
        break;
        case "←":
        handleArrow()
        break;
    }
}

function findPreviousOperator(){
    if(prevOperator === '+')
    return result += parseInt(number)
    else if(prevOperator === '-')
    return result -= parseInt(number)
    else if(prevOperator === '×')
    return result *= parseInt(number)
    else if(prevOperator === '÷')
    return result /= parseInt(number)

    return null;
}


function handleOperations(){
    if(count === 0){
        switch(prevOperator){
            case "+":
            case "-":
            case "×":
            case "÷":
            result=parseInt(number)
            break;
        }
    }
    else{
       findPreviousOperator()
    }
}

function handleArrow(){
    if(number.length === 0) number = "0"  
    number=number.substr(0,number.length-1)
    console.log(number)
    show(number)
}

function handleNumber(num){
   number += num
   show(number)  
}

function show(num){ //display the numbers in screen
    screen.innerText = num
}

main();