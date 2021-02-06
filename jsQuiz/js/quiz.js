// 1. Create a multidimensional array to hold quiz questions and answers

const questions = [
  ['How many states are there?', 50],
  ['How many fingers does a human have?', 10],
  ['How many legs does a biped have?', 2],
  ['How many hearts does an octopuss have?', 2]
];

// 2. Store the number of questions answered correctly
const correctQuestions = [];
const incorrectQuestions = [];
let correct = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i=0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let guess = prompt(question);
  
  if(+guess === answer){
    correct++;
    correctQuestions.push(question);
  } else {
    incorrectQuestions.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user

document.querySelector('main').innerHTML = `
  <h1>You got ${correct} question(s) correct!</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correctQuestions)}</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(incorrectQuestions)}</ol>
`;

//Or you can do it like this...
//let html = `
//  <h1>You got ${correct} question(s) correct</h1>
//`;
//
//document.querySelector('main').innterHTML = html;