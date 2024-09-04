// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}!`);
// }

// greet.call(null, 'Hello', 'Alice'); // Outputs: Hello, Alice!
const person = {
  name: 'Bob'
};

function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

sayHello(); // Outputs: Hello, Bob!
