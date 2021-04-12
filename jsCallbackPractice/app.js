const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

//This removed the need to rewrite the equations at every event.  You can name the function and then just use it as a variable in the event listeners.
const focusHandler = event => {
  event.target.className = 'highlight';
};
const blurHandler = event => {
  event.target.className = '';
};

//This event listener adds a highlight to the textfield box for nameInput
nameInput.addEventListener('focus', focusHandler);

//This event listener removes the highlight to the textfield box for nameInput.  Blur is what happens when the cursor leaves the textfield.
nameInput.addEventListener('blur', blurHandler);

//The same thing for the messageTextArea as above
messageTextArea.addEventListener('focus', focusHandler);

//The same thing for the messageTextArea as above
messageTextArea.addEventListener('blur', blurHandler);