
function playGuessingGame(numToGuess,TotalGuesses = 10) {

   let guessCount = 0;
while(guessCount < TotalGuesses) {
    let guess = prompt("ENTER A NUMBER BETWEEN 1-100");

     if (isNaN(guess) || guess.trim().length === 0) {

              alert("Please enter a number");
                     continue;
        }

    else if(guess < numToGuess) {
            alert( guess + ' is too small' );
       }

    else if(guess > numToGuess) {
           alert( guess + ' is too large');
       }
         
    else {
            alert ("Successfully") ;
            return guessCount + 1;
        } 

     guessCount++
    }

  if (guessCount >= TotalGuesses)
  {
    alert('Opp!! you are out of guesses!');
    return 0;
  }


}

 




