// JavaScrip Generator Functions
function* myGenerator() {
    // First time .next() is called, we'll yield true
    yield true; 
    // Second time .next() is called, we'll yield 100
    yield 100;
    // And so on...
    yield 'Hello';
}

// Create an instance
const generatorInstance = myGenerator();
// console.log(generatorInstance.next());
// console.log(generatorInstance.next());
// console.log(generatorInstance.next());
// console.log(generatorInstance.next());

function* idGenerator() {
    let i = 1;
    while(true) {
        yield i;
        i += 1;
    }
}
const firstGenerator = idGenerator();
console.log(firstGenerator.next()); // value: 1
console.log(firstGenerator.next()); // value: 2

const secondGenerator = idGenerator();
console.log(secondGenerator.next()); // value: 1