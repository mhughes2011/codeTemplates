const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

//the fetch() command in the btn event listener removes the need for this entire function
//all the argument it needs is the url path to the resource you want to get.
//fetch returns a promise.  Once it's fulfilled it returns a response object containing the information.
//In order to use the use the data you need to parse it to JSON first.
// function getJSON(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => {
//       if(xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
//         resolve(data);
//       } else {
//         reject( Error(xhr.statusText) );
//       }
//     };
//     xhr.onerror = () => reject( Error('A network error occured') );
//     xhr.send();
//   });
// }

function getProfiles(json) {
  const profiles = json.people.map( person => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name) //The getJSON func is replaced with fetch here also.
          .then(response => response.json())
          .then(profile => {
              return {...profile, craft};
          })
          .catch(err => console.log('Error fethcing wiki', err))
  }); 
  return Promise.all(profiles); //This takes all of the returned promises and combines them into one return value once all of the promises are fulfilled.
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";

  fetch(astrosUrl)
    .then(response => response.json()) //This is parseing the response data from fetch(astrosUrl) to a json object.
    .then(getProfiles)
    .then(generateHTML)
    .catch(err => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';
      console.log(err)
    })
    .finally(() => event.target.remove());
});