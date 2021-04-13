// JS Libraries
var readLineSync = require('readline-sync');
const chalk = require('chalk');

// Welcome Input and Output
var name = readLineSync.question(chalk.blue("Enter your Name: "));

console.log(chalk.red.italic("\nHi "+name.toUpperCase()+"!"));
console.log(chalk.greenBright("\nI present you a Quiz on Harry Potter.\nThere are 3 Levels. To clear 1st and 2nd Level, you need to answer all the answers correctly"));
console.log(chalk.redBright("\nNOTE: To answer the questions, just enter the option character(a,b,c,d), otherwise your answer will be marked as WRONG!"));

// Data Structures
var highScore = [
  {
    name:"Dev", score:8
  },
  {
    name:"Himani", score:7
  },
  {
    name:"Surbhi", score:6
  }
];

var questionsLevelOne = [
  {
    question:"What is the name of Harry's School?", options:"a. Ilvermorny\nb. Beauxbatons\nc. Hogwarts\nd. Durmstrang", answer:"c"
  },
  {
    question:"What is the name of Harry's pet?: ", options:"a. Fawkes\nb. Hedwig\nc. Scabbers\nd. Crookshanks", answer:"b"
  }
];

var questionsLevelTwo = [
  {
    question:"How many horcruxes did Voldemort create: ", options:"a. 4\nb. 5\nc. 7\nd. 10",answer:"c"
  },
  {
    question:"Whom does Harry Potter marry?", options:"a. Luna Lovegood\nb. Ginny Weasley\nc. Hermoine Granger\nd. Cho Chang", answer:"b"
    },
  {
    question:"Who is the Half Blood Prince: ", options:"a. Harry Potter\nb. Albus Dumbledore\nc. Tom Riddle\nd. Severus Snape", answer:"d"
  }
];

var questionsLevelThree = [
  {
    question:"Which broomstick did Minerva gift Harry in his first year?: ", options:"a. Nimbus 2000\nb. Nimbus 2001\nc. Firebolt\nd. Thunderbolt VII", answer:"a"
  },
  {
    question:"What is the maximum speed of firebolt? ", options:"a. 75mph\nb. 100mph\nc. 150mph\nd. 200mph",answer:"c"},
  {
    question:"How many possible Quiditch fouls are there?: ", options:"a. 150\nb. 200\nc. 485\nd. 700", answer:"d"
  },
  {
    question:"What is the name of Harry's School?", options:"a. Ilvermorny\nb. Beauxbatons\nc. Hogwarts\nd. Durmstrang", answer:"c"
    },
  {
    question:"What is the name of the Defence Against the Dark Arts Teachers who turned out to be Harry's Father's Friend?: ", options:"a. Severus Snape\nb. Remus Lupin\nc. Amycus Carrow\nd. Gilderoy Lockhart", answer:"b"
  }
];

var questions = [questionsLevelOne, questionsLevelTwo, questionsLevelThree];

// Score Variables
var currentScore = 0, finalScore = 0, requiredScores = [2,3,0];

// askQuestion Function
function askQuestion(question, options, answer){

  var userAnswer = readLineSync.question(chalk.blue(question)+"\n"+chalk.yellowBright(options)+"\n-> ");

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.magentaBright("Congratulations, you are CORRECT!"));
    currentScore = currentScore + 1;
  }else{
    console.log(chalk.redBright("Sorry, you are wrong!"));
  }
  console.log(chalk.greenBright("Your Current Score is: "+currentScore));
  console.log(chalk.magentaBright("------------------------"));
}

// Driver code for Quiz

console.log();
for(var i=0;i<questions.length;i++){
  console.log("all levels loop"+ i);
  console.log(chalk.red.bold("\nLevel "+(i+1)));
  currentScore = 0;
  for (var j=0; j<questions[i].length; j++){
    console.log("second loop");
    askQuestion(questions[i][j].question, questions[i][j].options, questions[i][j].answer);
  }
  console.log(chalk.yellow("Your Score for Level "+(i+1)+" is: "+currentScore));
  finalScore = finalScore + currentScore;
  if(requiredScores[i] > currentScore){
    console.log(chalk.redBright("You couldn't clear the round, play again! To play again, refresh the page!"));
    break;
  }
  else{
    console.log("====================================");
    if(i < 2){
      console.log(chalk.red("Congratulations, You have cleared this Level, Best of Luck for the next Level!"));
      console.log(i);
    }
    else{
      console.log(chalk.magentaBright("Congratulations, You have completed all the levels!"));
      checkHighScore(); // highScore function called here
    } 
  }
}
console.log(chalk.yellowBright("\nYour final score: "+finalScore));

// Highscore Message
function checkHighScore(){
  flag = 0;
  for(var i=0; i<highScore.length; i++){
    if(finalScore > highScore[i].score){
      console.log(chalk.blue("Congratulations! You have beaten the High Score ;). Send me the screenshot to update the highscore ;)"));
      flag = 1;
      break;
    }
  }
  if(flag == 0){
    console.log(chalk.red("OOPS! You were NOT able to break the high score, play again to beat the high score! To play again, refresh the page!"));
  }
},