const order = true;

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if(order) {
            resolve('Your order is ready. COme and get it!');
        } else {
            reject(Error('Your order cannot be made.'));
        }
    }, 3000);
});

breakfastPromise
    .then( val => console.log(val))
    .catch( err => console.log(err));