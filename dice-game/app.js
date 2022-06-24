function rollDice() {




    var text = document.getElementById('dice_text');
    // var UserName = prompt("Enter you Name :")


    // var diceRollNumber = +prompt("Guess the number : ");


    var DiceNumbers = [1, 2, 3, 4, 5, 6]
    var RandomNumbers = Math.floor(Math.random() * DiceNumbers.length);
    var RemovedZero = DiceNumbers.splice(RandomNumbers, 1);
    text.innerHTML = `<span class="box">You Got ${RemovedZero}<span>`;



    // var randomNumber = Math.floor(Math.random() * lengthNumber.length);
    // var roll = array.splice(lengthNumber, 1);


    // if(diceRollNumber === randomNumber){
    //     text.innerHTML = `<span class="box">${UserName} is winner, You guess ${diceRollNumber} & Actual Number was ${randomNumber}<span>`;


    // }
    // // else if(diceRollNumber !== randomNumber){
    // //     text.innerHTML = `<span class="box">${UserName} is Loss, You guess ${diceRollNumber} & Actual Number was ${randomNumber}<span>`;
    // // }
    // else if (randomNumber>6){
    //     text.innerHTML = `<span class="box">Number is greater<span>`;

    // }
    // else{
    //     text.innerHTML = `<span class="box">${UserName} is Loss, You guess ${diceRollNumber} & Actual Number was ${randomNumber}<span>`;


    // }

}





