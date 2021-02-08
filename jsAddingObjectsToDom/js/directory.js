let html = '';
  
for (let i = 0; i<pets.length; i++) {
    html += `
    <h2>${pets[i].name}</h2>
    <h3>${pets[i].type} | ${pets[i].breed}</h3>
    <p>Age: ${pets[i].age}</p>
    <img src="${pets[i].photo}" alt="${pets[i].breed}">
  `;
}

//Or you can do it like this..
//
//for (let i=0; i<pets.length; i++) {
//  let pet = pets[i];
//  html += `
//    <h2>${pet.name}</h2>
//    <h3>${pet.type} | ${pet.breed}</h3>
//    <p>Age: ${pet.age}</p>
//    <img src="${pet.photo}" alt="${pet.breed}">
//  `;
//}

document.querySelector('main').innerHTML = html;

//Or you can at it this way with insertAdjacentHTML, which is faster than innerHTML
//document.querySelector('main').insertAdjacentHTML('beforeend', html);

