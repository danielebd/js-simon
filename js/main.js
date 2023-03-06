'use strict';

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
createRandomNumber(5)

let seconds = 30;
const clock = setInterval(function() {
    console.log(seconds);
    if(seconds === 0){
        clearInterval(clock)
        document.getElementById('memory-number').classList.add('none')
    }
    else {
        seconds--;
    }
}, 1000);


