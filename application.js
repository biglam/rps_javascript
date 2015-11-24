var p1wins = 0;
var p2wins = 0;
var draws = 0;
var winner = "";

$('#submit').click(function() {
  var p1answer = $('#p1choice').val();
  // compare and output
  // log scores
  p2answer = makeComputerMove();
  detectWin(p1answer, p2answer);
  writeAnswers(p1answer, p2answer);
  writeResults();
});

function makeComputerMove() { 
  var compmove = Math.round(Math.random()*4);
  switch(compmove) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "lizard";
      break;
    case 4:
      return "spock";
      break;
  }
}



function detectWin(p1answer, p2answer) {
  
  var logic  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
                   paper: {name: "Paper", defeats: ["rock", "spock"]},
                   scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                   lizard: {name: "Lizard", defeats:["paper","spock"]},
                   spock: {name: "Spock", defeats:["scissors","rock"]}
                  };

  if (p1answer == p2answer) {
    winner = "Its a draw";
    draws++;
  } else {
    p1obj = logic[p1answer];
    console.log(p1obj.defeats);
    if((jQuery.inArray(p2answer, p1obj.defeats))==0 ){
      winner = "You Win!";
      p1wins++;
    } else {
      winner = "You Lose!";
      p2wins++;
    }
  }
}

function writeAnswers(p1answer, p2answer) {
  var htmlstring = "<h2>Answers</h2><p>Player1 picked " + p1answer + "</p><p>Player2 picked " + p2answer + "</p>";
  $('#answers').html(htmlstring);
}

function writeResults() {
  var htmlstring = "<p>Results:</p><p><strong>" + winner + "</p><p><strong>Total wins for p1: " + p1wins + "</p><p>Total wins for p2: " + p2wins + "</p><p>Total draws: " + draws + "</p>";
  $('#results').html(htmlstring);
}