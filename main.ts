#! /usr/bin/env node
import inquirer from"inquirer";
// console.log("hello world ");
console.log("Welcome to number guessing game!\n ");

const secretNumber = Math.floor(Math.random() * 10 +1);

let myLoop = true ;
let attempts = 1;

while(myLoop){
    const userInput = await inquirer.prompt({
        type :'number',
        name: 'userNumber',
        message :"Enter your Number!"
    });
    let{userNumber} = userInput;

    console.log(`\nYour attemp No.${attempts}`)

    if(userNumber === secretNumber) wonMatch();
    if(userNumber > secretNumber) greaterNum();
    if(userNumber < secretNumber) lessNum();

    function wonMatch(){
        console.log(`Congratulations! your guessed  number ${userNumber} is correct!`);
        console.log(`\nYou have attempted ${attempts} times to guess the right number!`);
        myLoop = false
        }

        function greaterNum(){
         console.log(` your guessed  number is greater than actual number!`);
         attempts++
}
function lessNum(){
    console.log(` your guessed  number is less than actual number!`);
        attempts++

   }
}
