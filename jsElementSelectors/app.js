//This selects all the elements by the tag name of li and returns a collection of li elements
const myList = document.getElementsByTagName('li');

for (let i=0; i<myList.length; i++) {
  myList[i].style.color = 'purple';
}

//This uses querySelectorAll to grab all of the elements with the class of error-not-purple
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i=0; i<errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
}

//This shows that you can use querySelectorAll with psuedo classes to alter elements in the document.
const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i=0; i<evens.length; i++) {
  evens[i].style.backgroundColor = 'lightgray';
}