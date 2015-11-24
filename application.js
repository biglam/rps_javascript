var p1wins = 0;
var p2wins = 0;
var draws = 0;
var winner = "";
var logic  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
                 paper: {name: "Paper", defeats: ["rock", "spock"]},
                 scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                 lizard: {name: "Lizard", defeats:["paper","spock"]},
                 spock: {name: "Spock", defeats:["scissors","rock"]}
                };

var names = Object.keys(logic);

$('#submit').click(function() {
  var p1answer = $('#p1choice').val();
  p2answer = makeComputerMove();
  detectWin(p1answer, p2answer);
  writeAnswers(p1answer, p2answer);
  writeResults();
});

function makeComputerMove() { 
  return names[Math.round(Math.random()*4)];
}


function detectWin(p1answer, p2answer) {
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
  var htmlstring = "<h2>Results:</h2><p><strong>" + winner + "</p><p><strong>Total wins for p1: " + p1wins + "</p><p>Total wins for p2: " + p2wins + "</p><p>Total draws: " + draws + "</p>";
  $('#results').html(htmlstring);
}