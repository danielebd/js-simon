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

//CREAZIONE PROMPT
function myprompt(prtNumb) {
    const number = [];
    for (let i = 0; i < prtNumb; i++) {
        const promptNumber = prompt('inserisci il numero');
        number.push(parseInt(promptNumber))
    }
    return number
}


const arrayMemoryNumber = createRandomNumber(5)

//
//console.log(elementMemo)
//console.log(elementGuess);


let seconds = 5;
const memory = setInterval(function () {
    console.log(seconds);
    if (seconds === 0) {
        clearInterval(memory)
        document.getElementById('memory-number').classList.add('none')
    }
    else {
        seconds--;
    }
}, 1000);


let elementGuess;
const guess = setTimeout(function () {
    elementGuess = myprompt(5)
    console.log(elementGuess);
    console.log(arrayMemoryNumber);
}, seconds * 1100)

