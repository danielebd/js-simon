'use strict';
//GENERAZIONE ARRAY NUMERI DA MEMORIZZARE
function createRandomNumber(ranNumb) {

    const memoryNumber = document.getElementById('memory-number');
    let arrayMemoryNumber = [];
    for (let i = 0; arrayMemoryNumber.length < ranNumb; i++) {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        if (!arrayMemoryNumber.includes(randomNumber)) {
            arrayMemoryNumber.push(randomNumber);
            memoryNumber.innerHTML += ` ${randomNumber}`;
        }
        else {
        }
    }
    return arrayMemoryNumber;
}

function myprompt(prtNumb) {
    const number = [];
    for (let i = 0; i < prtNumb; i++) {
        const promptNumber = prompt('inserisci il numero');
        number.push(parseInt(promptNumber))
    }
    return number
}

console.log(myprompt(5))

createRandomNumber(5)
let seconds = 2;
const memory = setInterval(function () {
    console.log(seconds);
    if (seconds === 0) {
        clearInterval(clock)
        document.getElementById('memory-number').classList.add('none')
    }
    else {
        seconds--;
    }
}, 1000);






