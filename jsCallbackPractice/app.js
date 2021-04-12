const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

//This event listener adds a highlight to the textfield box for nameInput
nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

//This event listener removes the highlight to the textfield box for nameInput.  Blur is what happens when the cursor leaves the textfield.
nameInput.addEventListener('blur', event => {
  event.target.className = '';
});

//The same thing for the messageTextArea as above
messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

//The same thing for the messageTextArea as above
messageTextArea.addEventListener('blur', event => {
  event.target.className = '';
});