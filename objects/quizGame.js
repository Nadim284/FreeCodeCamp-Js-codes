const questions = [
  {
    category: "Math",
    question: "What is 2 + 3?",
    choices: ["2", "5", "9"],
    answer: "5"
  },
  {
    category: "Array",
    question: "What does the pop() method do?",
    choices: ["remove", "add", "merge"],
    answer: "remove"
  },
  {
  category: "Programming",
  question: "What does the typeof operator return for an array?",
  choices: ["object", "array", "undefined"],
  answer: "object"
  },
  {
    category: "Geography",
    question: "What is the capital of Bangladesh?",
    choices: ["Sylhet", "Dhaka", "Rajshahi"],
    answer: "Dhaka"
  },
  {
    category: "Programming",
    question: "Which language is used to style web pages?",
    choices: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  }
];


function getRandomQuestion(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]; 
}

function getRandomComputerChoice(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getResults(question,computerChoice){
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}