let randomNum;
let compMove = "";
let won = 0;
let lost = 0;
let tie = 0;

rock = () => {
  console.log("You: Rock");
   randomMove();
  if( compMove == "Rock" ) {
    console.log("It's a tie!");
    tie += 1;
  } else if ( compMove == "Paper" ) {
    console.log("You lost!");
    lost += 1;
  } else if ( compMove == "Scissors" ) {
    console.log("You won!");
    won += 1;
  }
  count(won, lost, tie);
}

paper = () => {
  console.log("You: Paper");
  randomMove();
  if( compMove == "Rock" ) {
    console.log("You won!");
    won += 1;
  } else if ( compMove == "Paper" ) {
    console.log("It's a tie!");
    tie += 1;
  } else if ( compMove == "Scissors" ) {
    console.log("You lost!");
    lost += 1;
  }
  count(won, lost, tie);
}

scissors = () => {
  console.log("You: Scissors")
  randomMove();
  if( compMove == "Rock" ) {
    console.log("You lost!");
    lost += 1;
  } else if ( compMove == "Paper" ) {
    console.log("You won!");
    won += 1;
  } else if ( compMove == "Scissors" ) {
    console.log("It's a tie!");
    tie += 1;
  }
  count(won, lost, tie);
}

reset = () => {
  lost = 0;
  won = 0;
  tie = 0;
  count();
}

randomMove = () => {
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
