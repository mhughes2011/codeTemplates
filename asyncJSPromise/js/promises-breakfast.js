const breakfastPromise = new Promise( (esolve, reject) => {
    setTimeout(() => {
        resolve('Your order is ready. Come and get it!');
    }, 3000);
});

breakfastPromise.then( val => console.log(val))