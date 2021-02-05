const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];

const brass = ['trumpet', 'trombone','french horn','baritone','tuba'];
const woodwind = ['flute','oboe','clarinet','saxophone','bassoon'];

const instruments = [...brass, ...woodwind];

console.log(burger);
console.log(instruments);