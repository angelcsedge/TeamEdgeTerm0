const READLINE = require("readline-sync")
let gameIsOn = true
let inputMsg =""
 
function start(){
   console.log("what is you name Player");
   let name = READLINE.question("What is your name, player? ")
   console.log("Welcome, " + name + `\n` + "You awaken in a old, vacant room. There is only a mirror on the wall, you walk over to see your reflection");
 
   while(gameIsOn){
       checkAnswer(promptUser())
   }
}



function promptUser(){
    let  reply = READLINE.question("What do you want to do?  >>  ")
    return reply
}

function checkAnswer(input){
 
    inputMsg = input

    if(inputMsg.includes("help")){

        console.log("Here are some commands you can try: help, end")

    }else if(inputMsg.includes("end")){

    gameIsOn =false
    console.log("Thank you for playing, goodbye!")

    }else {
        console.log("Sorry, I don't know what that means.")
        }
    }
start()
