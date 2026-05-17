const os = require('os');

function greet(name){
    return `Hello, ${name}! Welcome to Node.js`;
}

console.log(greet("Developer"));

console.log("----System Info-----");
console.log(`Operating System: ${os.type()}`);
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);