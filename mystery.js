let readlineSync = require('readline-sync');



function intro(){
let userName = readlineSync.question('Welcome to Hotel Chateau! Could we have your name please?\n');
    console.log(`Welcome ${userName}, please come with me to the yellow room.`);
        start(userName)
}

 function start(userName){
    let plot = ["Be friends with the butler?", "Shoot the butler and take the diamond form the yellow room?"]
    let index = readlineSync.keyInSelect(plot,"What's next?");
        if (index == 0){
           console.log ( `${userName} , your are now freinds with the butler.`)
            playAgain(userName)
            }
        else if (index == 1){
              alarm(userName)
            };
        }

    function alarm(userName) {
        let plotTwo = ["Alarm was tripped", "Owner of the Chateau heard a gunshot."]
        let index = readlineSync.keyInSelect(plotTwo,"What do you do?");
            if (index == 0) { 
                console.log ( `${userName} the alarm has been tripped and alerted the authorities!`)
                escapeTunnel(userName)
            }
            else if (index == 1 ){
                console.log ( `${userName}, the owner of the Chateau is comming in the elevator!`)
                escapeWindow()
            }
    };
    
    function escapeTunnel(userName){
        let plotThree = ["Escape through the secret tunnel.", "Drive away in the Chateau's Rolls Royce."]
        let index = readlineSync.keyInSelect(plotThree,"What do you do?");
            if (index == 0) {
                console.log (`${userName} you've escapaed the authorities unseen.You win!`)
                playAgain()
            }
            else if ( index == 1) { 
                console.log ("Rolls Royce was due for maintenance and didn't have gas. You have benn captured.")
                playAgain()
            } 
    }
    
    function escapeWindow()  {
        let plotFour = [ "Find the key for the staircase.", "Jump out the window."]
        let index = readlineSync.keyInSelect(plotFour,"What do you do?");
            if (index == 0) {
                console.log ( " You found it ! You have escaped the Hotel Chateau unseen." )
                playAgain()
            }
            else if (index == 1 ) { 
                console.log ( "Your not Superman!!! You have broken a leg and have been captured by detective Frederic Larsan.")
                playAgain() 
            }
    }
            
    function playAgain() {
        let play= readlineSync.question('Do you want to play again? y || n \n');
        play= play.toLowerCase();
        if (play === 'y') {
            intro ()
            }
        else if (play === 'n') { 
          console.log('Thanks for playing.\nGoodbye.')
            }
            
        else  {
            console.log ( "Not valid answer choose y or n.") 
              playAgain()
            }
       
    };
               
        intro()
        