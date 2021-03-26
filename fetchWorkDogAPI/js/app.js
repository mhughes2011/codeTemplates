const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

//This is a uniform fetch function that can be reused to get all kinds of data.
function fetchData(url) {
  return fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .catch(err => console.log('Looks like there was a problem', error))
}

//This waits for all of the promises listed in the array to be resolved before sending the data.
//This function does in fact fail if one of the promises fail.  The whole thing doesn't work if one promise fails.
Promise.all([
  fetchData('https://dog.ceo/api/breeds/list'),
  fetchData('https://dog.ceo/api/breeds/image/random')
])
.then(data => {
  const breedList = data[0].message;
  const randomImage = data[1].message;
  
  generateOptions(breedList);
  generateImage(randomImage);
})

//These aren't needed anymore because of the Promise.all object.
//fetchData('https://dog.ceo/api/breeds/list')
//  .then(data => generateOptions(data.message))
//
//fetchData('https://dog.ceo/api/breeds/image/random')
//  .then(data => generateImage(data.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
    <img src='${data}' max-width='100%' alt>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  
  //This url is a template literal because it pulls a random image of the selected dog breed
  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
      img.src = data.message;
      img.alt = breed;
      p.textContent = `Click to view more ${breed}s`;
    })
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit', postData);


// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, comment: comment})//or name, comment
  }
  
  fetch('https://jsonplaceholder.typicode.com/comments', config)//You can also put the whole config variable in here
    .then(checkStatus)
    .then(res => res.json())
    .then(data => console.log(data))
}
















