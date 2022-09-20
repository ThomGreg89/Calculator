"use strict";

const Calculator = () => {



    //loop through numbers to display on calculator
    for(let i = 0; i < number.length; i++){
        number[i].addEventListener('click', (e) => {
            e.preventDefault;
            //const currentNumber = e.target.innerText;
            const key = e.target;
            const keyContent = key.innerText;
            const displayedNum = input.innerText;
            //console.log(currentNumber);

            //append numbers
            if (displayedNum === '0') {
                input.innerText = keyContent;
            } else {
                input.innerText = displayedNum + keyContent;
            }
        })

    //loop through operators
    for(let i = 0; i < operator.length; i++){
        operator[i].addEventListener('click', (e) => {
            e.preventDefault;
            const key = e.target;
            const opVal = key.innerHTML;
            input.innerHTML = opVal;

            //output result
            result.addEventListener('click', (e) => {
                
            })

        })

    }

    

    }



    //clear content no calculator
    clear.addEventListener('click', (e) => {
        input.innerHTML = "";
    })




    /*let currentNumber = 0;
    const calculation = () => {

    }*/
}


//export default Calculator;