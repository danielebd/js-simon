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

const arrayMemoryNumber = createRandomNumber(5);

let seconds = 30;
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

    console.log(elementGuess.length);
    console.log(arrayMemoryNumber);
    const correctNumber = [];
    for (let i = 0; i < elementGuess.length; i++){
        if(arrayMemoryNumber.includes(elementGuess[i])){
            correctNumber.push(elementGuess[i]);
        }
    }
    console.log(correctNumber.length);
    document.getElementById('result').innerHTML = `hai indovinato ${correctNumber.length} numeri`;
    document.getElementById('quali').innerHTML = `i numeri indovinati sono ${correctNumber}`;
    document.getElementById('memory-number').classList.remove('none')    
}, seconds * 1100)

