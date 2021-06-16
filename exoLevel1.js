var playerNumber = prompt('Choose a number between 0 and 10: ');
var goodNumber = Math.floor(Math.random() * 11);
do{
 
   if(goodNumber > playerNumber){
        playerNumber = prompt('Wrong Answer : less than the target');
    }
    else if(goodNumber < playerNumber){
        playerNumber = prompt('Wrong Answer : higher than the target');
    }
    else if(goodNumber !== playerNumber){
        playerNumber = prompt('Wrong Answer : the input was inappropriate');
    }
}
while(playerNumber != goodNumber);
alert('You did it! Your number is equal to the target');
    
