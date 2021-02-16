const toggleListBtn = document.getElementById('toggleListBtn');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');//button.description is needed because the querySelector was only grabbing the first button it saw, which became the toggleListBtn.  This caused both eventListeners to fire which means the button for the p.innerHTML was firing and replacing the p tag with an empty string.
const addItemInput = document.querySelector('input.addItemInput');
const addItemBtn = document.querySelector('button.addItemBtn');
const removeItemBtn = document.querySelector('button.removeItemBtn');
//const listItems = document.getElementsByTagName('li');//This gets all of the list items and stores them in an array

//This is used to apply the event listeners on each individual li but this causes bubbling.  Bubbling is what causes an error to occur when you delete a list item them add it back.  The event listeners will no longer have their effect.
////This loop is used to go through the array of list items and add the events to each li.
//for (let i=0; i < listItems.length; i++) {
//  //This addEventListener is what is used to trigger the callback function when it's moused over.
//  listItems[i].addEventListener('mouseover', () => {
//    listItems[i].textContent = listItems[i].textContent.toUpperCase();//This is the callback function that's used to turn all of letters to uppercase.                      
//  });
//   listItems[i].addEventListener('mouseout', () => {
//    listItems[i].textContent = listItems[i].textContent.toLowerCase();                          
//  });
//}

//You can put the event listeners as close to the li elements we want by targeting the div with the class list, which we already assigned to listDiv up top.  The event.target.tagName returns an element in all caps.
listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
 listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});


toggleListBtn.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleListBtn.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleListBtn.textContent = 'Show List';
    listDiv.style.display = 'none';  
  }
});

descriptionBtn.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];//This gets the ul as an array of ul lists, since there's only one it's element 0.
  let li = document.createElement('li');//This creates the new li element
  li.textContent = addItemInput.value;//This adds the user input text into the newly created li element above.
  ul.appendChild(li);//This adds the new li element that the user created and add it's to the list in HTML so it shows
  addItemInput.value = '';//This clears the addItemInput for the list once an item is added.
});

removeItemBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];//This gets the ul as an array of ul lists, since there's only one it's element 0
  let li = document.querySelector('li:last-child');//This selects the list of li un the ul and grabs the last child
  ul.removeChild(li);//This removes the selected li element, in this case the last child from above
});










