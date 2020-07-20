const READLINE = require("readline-sync");
 

let inputMsg ="" 
let gameIsOn = true 
let currentRoom = null
let rooms = []



  class Room {

    constructor(name, description, objects, paths, visited, key) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.visited = visited
        this.paths = paths;
        this.key = key;

    }

}
       
        class Item {

            constructor(name, type, description,  location, specialPower ){
      
               this.name = name
               this.type = type
               this.location = location
               this.description = description
               this.specialPower = specialPower
               
                
              
            }
          }
        
    
    class Player {
        constructor(name, items){
            this.name =name
            this.items = items
        }
      }

  let player = new Player()
  player.name = null
  player.items = []
  
let kitchen = new Room()
   kitchen.name = "Kitchen"
   kitchen.description = "The kitchen is a little dusty from your time spent away on your other adventures. It seems you may have to clean up when you get back."
   kitchen.objects =["match", "sandwich", "water"]
   kitchen.paths=["Entry Hall" , "Trophy room" ]
   kitchen.visited = false
   kitchen.key = null

   let Trophyroom = new Room()
   Trophyroom.name= "Trophy room"
   Trophyroom.description ="You are in your Trophy room. You see all the various items and treasures that you have proquered in you travels. "
   Trophyroom.objects = ["sword" , "candle"]
   Trophyroom.paths =["Kitchen"]
   Trophyroom.visited = false
   Trophyroom.key = null

   let Entryhall = new Room()
   Entryhall.name= "Entry Hall"
   Entryhall.description ="The hall is quite large and welcoming for those who enter, but you can't wait for what lies beyond the door. "
   Entryhall.objects = []
   Entryhall.paths =["Kitchen", "Library", "Bedroom"]
   Entryhall.visited = false
   Entryhall.key = null

   let Library = new Room()
   Library.name= "Library"
   Library.description ="Your have collected thousands of books, from various merchents, and now you have quite the collection of knowledge."
   Library.objects = ["map"]
   Library.paths =["Entry Hall", "Living room"]
   Library.visited = false
   Library.key = null

   let Livingroom = new Room()
   Livingroom.name= "Living room"
   Livingroom.description ="This room was specifically made so that you can enjoy relexation from when you require a break from adventures. "
   Livingroom.objects = ["Journal"]
   Livingroom.paths =["Kitchen"]
   Livingroom.visited = false
   Livingroom.key = null

   let Bedroom = new Room()
   Bedroom.name= "Bedroom"
   Bedroom.description ="Your room is very bare and simple, after all you don't sleep at home much "
   Bedroom.objects = []
   Bedroom.paths =["Entry Hall", "Attic", "Treasure room"]
   Bedroom.visited = false
   Bedroom.key = null

   let Treasureroom = new Room()
   Treasureroom.name= "Treasure room"
   Treasureroom.description ="The room is scattered with many valuable items and wealth from all your travels. "
   Treasureroom.objects = ["pouch of gold"]
   Treasureroom.paths =["Bedroom"]
   Treasureroom.visited = false
   Treasureroom.key = null

   let Attic = new Room()
   Attic.name= "Attic"
   Attic.description ="You have stored a lot of junk that was in the way and you feel very weird when you are in the space. "
   Attic.objects = ["armour"]
   Attic.paths =["Bedroom"]
   Attic.visited = false
   Attic.key = "Treasure key"

   let Outside = new Room()
   Outside.name= "Outside"
   Outside.description ="You have stored a lot of junk that was in the way and you feel very weird when you are in the space. "
   Outside.objects = []
   Outside.paths =["Entry Hall"]
   Outside.visited = false
   Outside.key = "key"

rooms.push(kitchen, Trophyroom, Entryhall, Library, Livingroom, Bedroom, Treasureroom, Attic, Outside)

let Key = new Item()
Key.name = "key"
Key.description = "The key is light and dusty from being with all the books"
Key.location =  ""
Key.type = "key"
Key.specialPower = "open outside room"

let Treasurekey = new Item()
Treasurekey.name = "Treasure key"
Treasurekey.description = "The key is shiny and elegent"
Treasurekey.location = ""
Treasurekey.type = "key"
Treasurekey.specialPower = "open Treasure room"
 
function start(){
             
    console.log("Welcome to ....\n");
    console.log(`

    _____  _     _____   ____  ____  _     _____ _      _____  _     ____  _____   _      ____  _      ____  _  ____  _     
    /__ __\/ \ /|/  __/  /  _ \/  _ \/ \ |\/  __// \  /|/__ __\/ \ /\/  __\/  __/  / \__/|/  _ \/ \  /|/ ___\/ \/  _ \/ \  /|
      / \  | |_|||  \    | / \|| | \|| | //|  \  | |\ ||  / \  | | |||  \/||  \    | |\/||| / \|| |\ |||    \| || / \|| |\ ||
      | |  | | |||  /_   | |-||| |_/|| \// |  /_ | | \||  | |  | \_/||    /|  /_   | |  ||| |-||| | \||\___ || || \_/|| | \||
      \_/  \_/ \|\____\  \_/ \|\____/\__/  \____\\_/  \|  \_/  \____/\_/\_\\____\  \_/  \|\_/ \|\_/  \|\____/\_/\____/\_/  \|
                                                                                                                             
                                                                                                                         

    `)
    let name = READLINE.question("What is your name, player? ")
    player.name = name
    console.log("Welcome, " + name);
    console.log("You can type [help] to learn how to play");

   
    currentRoom = Bedroom

    console.log(`You are in your: ${currentRoom.name}. and you can't wait for your adventure.`)

   
    while(gameIsOn){

        checkAnswer(promptUser())

    }
}

function promptUser(){

   let  reply = READLINE.question(`${player.name}, what do you want to do?  >> \n `)

    return reply
}


function checkAnswer(input){

    //inputMsg = input;

    input = input.split(" ")
    console.log("input : " + input)

    let command = input.splice(0,1)

    console.log("Input, after command : " + input)
    inputMsg = input.join(" "); 

    console.log(" input message: " + inputMsg)



        if(command.includes("go")){

        
            let msgArray  = inputMsg.split(" ") 
            let newRoom = inputMsg;


            console.log("tyring to go to: " + newRoom)

        
             if(currentRoom.paths.includes(newRoom)){

                console.log("Current room includes the room : " + newRoom)
                

                for (room of rooms){

                    if(room.name.toLowerCase() == newRoom.toLowerCase() ){
                        
                        
                        
                                
                                

                            }
                            let index = rooms.indexOf(room) 
                            currentRoom = rooms[index]

                            
                            console.log("You are now at the : " + currentRoom.name);
                            console.log("this room has : " + currentRoom.objects)
                            console.log(currentRoom.description)
                            currentRoom.visited = true

                        }


                        
                        } 
                         if(room.key !=null) {

                            console.log("This room is locked! It looks like you need to find a special key")

                            

                           
            
                            if(room.key==null ||   player.objects.includes(room.key) ){

                            }
  
                }

             } else{

                console.log("No, you can't go there")
             }
              if(command.includes("end")){
        
                gameIsOn =false
                console.log("Thank you for playing, goodbye!")
            
        
            } else if(command.includes("look")){
 
            console.log("------ LOOK ----------\n")
            console.log("You see the following: ") 

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
            console.log("---------------------\n")

        } else if(command.includes("take")){
            console.log("------TAKE----------\n")
            
           
            let itemToTake = inputMsg
            

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) 

                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
            console.log("---------------------\n")

        } else if (command.includes("room")){

            console.log("-------ROOM----------\n")
            console.log( "You are in " + currentRoom.name);
            console.log("---------------------")

        }  else if (command.includes("inventory")){
            console.log("--------INVENTORY----------\n")
            console.log("You have the following items: ")
            for(item of player.items){

                console.log(item)
            }
            console.log("---------------------")


        } else if (command.includes("help")){
            console.log("---------HELP-------\n")
            console.log("Here are some commands you can type:")
            console.log(" - 'look' to look around. \n - 'go' followed by the name of the room or area you want to walk to. \n - 'take' to add objects to your inventory. ")
            console.log("---------------------")
            
             
        } else if (command == ""){

            console.log(" input: " + inputMsg)
             
            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }
    

        Key.location =  rooms[Math.floor(Math.random()*rooms.length)]; //set an random integer as the location, which is an index in the rooms array
        while(Key.location == Outside){
         
           
            Key.location =  rooms[Math.floor(Math.random()*rooms.length)]; 
        }
        
        console.log("The key is in: " + Key.location.name)
        
        
       Treasurekey.location =  rooms[Math.floor(Math.random()*rooms.length)];
        while(Treasurekey.location == Attic){
         
           
            Treasurekey.location =  rooms[Math.floor(Math.random()*rooms.length)]; 
        }
        
        for (room in rooms) {
        
            if(Treasurekey.location == room.name){
        
                room.objects.push(Treasurekey.name)
            }
            if(Key.location == room.name){
        
                room.objects.push(Key.name)
            }
        }
        
        
        
        console.log("The Treasure key is in: " + Treasurekey.location.name)
        
 

 



 




    }
 

start()
