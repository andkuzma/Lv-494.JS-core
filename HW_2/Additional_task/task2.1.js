let attempts, random, win, playAgain;
let min = 0;
let max = 5;
let x1 = 10;
let x2 = 5;
let x3 = 2;
let cash = [x3, x2, x1];
let totalPrize = 0;
let multiply = 1;

let start = confirm('Do you want to play a game?');
if (start) {
    do {
    attempts = 3;  
    win = false;
    
    while (attempts > 0) { 
      prize = cash[attempts-1]*multiply;
      random = Math.floor(Math.random() * (max + 1));
      console.log("Перевірочка " + random);
          if (parseInt(prompt(`Enter a number from 0 to ${max}\n` +
          `Attempts left: ${attempts}\n` +
          `Total prize: ${totalPrize}$\n` +
          `Possible prize on current attempt: ${prize}$`, 0)) === random) {
            win = true;
            break;
            }else {
            attempts--;
          }
        } 
        if (win) {
            totalPrize += prize;
            alert(`Congratulation, you won!   Your prize is: ${prize}  $.`); 
            max *=2;
            multiply *= 3;
          } else {
            max = 5;
            multiply = 1;
            totalPrize = 0;
          }
          playAgain = confirm('Do you want to continue?');
      }while (playAgain);
      alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
 } else {
 alert('You did not become a millionaire');
}     
  
      
    



