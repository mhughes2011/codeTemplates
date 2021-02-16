const toggleListBtn = document.getElementById('toggleListBtn');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');//button.description is needed because the querySelector was only grabbing the first button it saw, which became the toggleListBtn.  This caused both eventListeners to fire which means the button for the p.innerHTML was firing and replacing the p tag with an empty string.
const listUl = listDiv.querySelector('ul');//Added to closer wrap the event listener on the list.
const addItemInput = document.querySelector('input.addItemInput');
const addItemBtn = document.querySelector('button.addItemBtn');
//const removeItemBtn = document.querySelector('button.removeItemBtn');
//const listItems = document.getElementsByTagName('li');//This gets all of the list items and stores them in an array
const lis = listUl.children;//This selects all of the list elements un the listUl
const firstListIem = listUl.firstElementChild;//This selects the first child element of the listUl
const lastListItem = listUl.lastElementChild;//This selects the last child element of the listUl

firstListIem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

//This function creates the buttons for each list item.
function attachListItemBtns(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

//This is the code that actually puts the list items to the already existing list items created through hard HTML.
for (let i=0; i<lis.length; i++) {
  attachListItemBtns(lis[i]);
}

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
//listDiv.addEventListener('mouseover', (event) => {
//  if (event.target.tagName == 'LI') {
//    event.target.textContent = event.target.textContent.toUpperCase();
//  }
//});
// listDiv.addEventListener('mouseout', (event) => {
//  if (event.target.tagName == 'LI') {
//    event.target.textContent = event.target.textContent.toLowerCase();
//  }
//});

//This is changed to listUl because when the code below runs it was being applied to any button that was listening in the parent element, which was the listDiv.  Since it's changed to the listUl which was selected above, it only applies to the ul buttons.
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    //This is how to write the code for remove a list item
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    //This is the code for how to move an item up in the list.  The nested if statement is for when the item is at the top of the list.
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    //This is the code for how to move an item down in the list.  Similar to the up case, the nested if statement is for when the item is at the bottom of the list.
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
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
  attachListItemBtns(li);//This calls the function up top that will add the buttons to new list items.
  ul.appendChild(li);//This adds the new li element that the user created and add it's to the list in HTML so it shows
  addItemInput.value = '';//This clears the addItemInput for the list once an item is added.
});

//removeItemBtn.addEventListener('click', () => {
//  let ul = document.getElementsByTagName('ul')[0];//This gets the ul as an array of ul lists, since there's only one it's element 0
//  let li = document.querySelector('li:last-child');//This selects the list of li un the ul and grabs the last child
//  ul.removeChild(li);//This removes the selected li element, in this case the last child from above
//});










