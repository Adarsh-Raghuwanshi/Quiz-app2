var readLineSync = require("readline-sync");
var chalk = require("chalk");
var orangeClr = chalk.hex('#FFBD7A').bold.italic;
var greenClr = chalk.hex("#34eb34").bold.italic;
var yellowClr = chalk.hex('#e5eb34').bold.italic;

var userName = readLineSync.question("What's your name? ");
console.log("Welcome " + yellowClr(userName) + " to the " + orangeClr("Mirzapur") + " quiz!!");
console.log("\n--------------");

var score = 0;
var highScorer = [
  {
   name: "Dhruv",
   score: "25"
  },
  {
   name: "Aman",
   score: "20"
  }
]
var questions = [
  {
    ques: "Opium is coded as 'barfi' in Mirzapur lingo?"
  },
  {
    ques: "Who plays the role of Guddu Pandit?",
    ans: "Ali Fazal"
  },
  {
    ques: "Who ruled Mirzapur before the Tripathis?",
    ans: "The Chaudharys",
    options: ["The Chaudharys", "The Shuklas", "The Guptas"]
  },
  {
    ques: "What is the name of the politician who helps Kaleen Bhaiya?",
    ans: "JP Yada",
    options: ["MP Yadav", "JP Yada", "OP Yadav"]
  },
  {
    ques: "Munna Bhaiya’s real name in the show was Phoolchand Tripathi?"
  }
];

function askQuestion(question){
  var opt = question.options;
  if(question.ans === undefined && opt === undefined){
    var reply = readLineSync.keyInYN(question.ques);
    if(reply){
      score += 5;
      console.log(chalk.blue.bold.italic("You are right!!"));
    }else{
      console.log(yellowClr("That's Wrong!"));
    }
    
  }else if(opt === undefined){
    var reply = readLineSync.question(question.ques);
    if(reply.toUpperCase() == question.ans.toUpperCase()){
      score += 5;
      console.log(chalk.blue.bold.italic("You are right!!"));
    }else{
      console.log(yellowClr("That's Wrong!"));
    }
    
  }else{
    var reply = readLineSync.keyInSelect(opt, question.ques);
    if(reply == -1){
      console.log(orangeClr("You skiped this question!"));
    }else if(opt[reply] == question.ans){
      score += 5;
      console.log(chalk.blue.bold.italic("You are right!!"));
    }else{
      console.log(yellowClr("That's Wrong!"));
    }
  }
  
  console.log("Current Score: " + greenClr(score));
  console.log("\n--------------");
}

for(var i = 0; i < questions.length; i++){
  askQuestion(questions[i]);
}

console.log("\n" + orangeClr("Game Over!!"));
console.log(orangeClr('Your final score is: ') + greenClr(score));
console.log("\n" + orangeClr("Check out the high scores, if you should be there ping me and I'll update it"));
highScorer.map(person => console.log(yellowClr(person.name) + " : " + greenClr(person.score)));
