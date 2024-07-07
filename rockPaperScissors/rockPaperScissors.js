
let compMove = "";
let won = 0;
let lost = 0;
let tie = 0;

rock = () => {
   playGame("Rock");
  count(won, lost, tie);
}

paper = () => {
  playGame("Paper");
  count(won, lost, tie);
}

scissors = () => {
  playGame("Scissors");
  count(won, lost, tie);
}

reset = () => {
  lost = 0;
  won = 0;
  tie = 0;
  count();
}

playGame = (playerMove) => {
  let result = "";
  randomMove();
  if(playerMove === "Scissors") {
    if( compMove === "Rock" ) {
      result = "You lost!";
      lost += 1;
    } else if ( compMove === "Paper" ) {
       result = "You won!";
      won += 1;
    } else if ( compMove === "Scissors" ) {
       result = "a tie!";
      tie += 1;
    }

  } else if(playerMove === "Paper") {
    if( compMove === "Rock" ) {
      result = "You won!";
      won += 1;
    } else if ( compMove === "Paper" ) {
      result = "a tie!";
      tie += 1;
    } else if ( compMove === "Scissors" ) {
      result = "You lost!";
      lost += 1;
    }
    
  } else if(playerMove === "Rock") {
    if( compMove === "Rock" ) {
      result = "a tie!";
      tie += 1;
    } else if ( compMove === "Paper" ) {
      result = "You lost!";
      lost += 1;
    } else if ( compMove === "Scissors" ) {
      result = "You won!";
      won += 1;
    }
  }

  alert(`You picked ${playerMove}, Computer picked ${compMove} and the result is ${result}`)

}

randomMove = () => {
  let randomNum;
  randomNum = Math.random();
  if (  randomNum >= 0 && randomNum < 1/3 ) {
    compMove = "Rock";
  } else if ( randomNum >= 1/3 && randomNum < 2/3 ) {
    compMove = "Paper";
  } else if ( randomNum >= 2/3 && randomNum < 1 ) {
    compMove = "Scissors";
  }
}

count = () => {
  document.getElementById("wonCount").innerHTML = `Won: ${won}`;
  document.getElementById("lostCount").innerHTML = `Lost: ${lost}`;
  document.getElementById("tieCount").innerHTML = `Tie: ${tie}`;
}
