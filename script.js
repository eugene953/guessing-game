
//let x = numToGuess;
//let y

function playGuessingGame(numToGuess,TotalGuesses) {
TotalGuesses=10;

let guess = prompt("ENTER A NUMBER BETWEEN 1-100");

for(let i=1; i<=TotalGuesses; i++) {

    if (guess=null)
    return 0;

   else if (guess==numToGuess)
    {
        alert ("Successfully") ;

        break ;
        // return i;
    }else if(guess<numToGuess) {
                guess = prompt( guess + ' is too small' );
            }
            else if(guess>numToGuess) {
                guess = prompt( guess + ' is too large');
            }
if (isNaN(guess) || str.length === 0) {
  

guess = prompt("Please enter a number");

i++

}






}
 

}


