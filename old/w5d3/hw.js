function madLib(x, y, z) {
  console.log(`We shall ${x.toUpperCase()} the ${y.toUpperCase()} ${z.toUpperCase()}`);
}
// madLib(make, best, guac);

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
}

function fizzBuzz(array) {
  const arr2 = [];
  debugger
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 ===0 && array[i] % 5 === 0) {
      continue;
    }
    else if (array[i] % 3 ===0 || array[i] % 5 === 0) {
      arr2.push(array[i]);
    }
  }
  return arr2;
}
fizzBuzz([1, 3, 5, 15, 4]);

function isPrime(number) {
    for ( let i = 2; i < number; i++) {
      if (number === 2) {
        return true;
      } else if (number % i === 0) {
        return false;
      }
    }

    return true;
 }


function sumOfNPrimes(n) {
  let sum = 0;
  let primeCount = 0;
  let i = 2;
  while (primeCount < n) {
    if (isPrime(i)) {
      sum += i ;
      primeCount++;
    }
    i++;
  }
  return sum;
}

function allOrNothing(mod, ...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % mod !== 0) {
      return false;
    }
  }
  return true;
}

function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized)
}

titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name => console.log(name));
})

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRRRRRRRRR!'`);
}


Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function () {
  let index = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[index]}`)
}

let bob2 = new Elephant("Bob", 50, ["washing your car", "smashing a pumpkin", "fighting crime"]);
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
bob2.trumpet()

let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];


Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`)
}

herd.forEach(Elephant.paradeHelper)

function dinerBreakfast () {
  let order = "I'd like cheesy scrambled eggs please."
  console.log(order)

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);

  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}
restWay(1,2,3,4,5,6)



const obj = {
  name: "Earl Watts"
};

// weird function; how is `this` supposed to be set if we don't call
// `greet` method style?
function greet(msg) {
  console.log(`${msg}: ${this.name}`);
}

greet.apply(obj, ["Hello"]);



const obj = {
  name: "Earl Watts"
};

function greet(msg1, msg2) {
  console.log(`${msg1}: ${this.name}`);
  console.log(`${msg2}: ${this.name}`);
}

greet.call(obj, "Hello", "Goodbye");


// wait 2000 milliseconds and then print 'hello':
window.setTimeout(function () {
  console.log('hello');
}, 2000);



setInterval(function() {
  console.log("I'm watching you");
}, 5000)


function addNum(x) {

  function other(y) {
    return x + y;
  }

  return other(y)
}
new1 = addNum(3)
new2 = addNum(5)

new1(2)
new1(3)
new2(2)


class Bicycle {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  action() {
    return "rolls along";
  }

  ride() {
    console.log(
      `The ${this.color} ${this.model}
      goes "whoosh" and ${this.action()}!`
      );
  }

  static parade() {
    Bicycle.funBicycles.forEach(bike => bike.ride());
  }
}

const cruiser = new Bicycle("Schwinn", "turquoise");
const salsaFargo = new Bicycle("Salsa Fargo", "burnt orange");
const flyingMerkel = new Bicycle("Flying Merkel", "green");
const bianchiVolpe = new Bicycle("Bianchi Volpe", "slate blue");

Bicycle.funBicycles = [cruiser, salsaFargo, flyingMerkel, bianchiVolpe];

Bicycle.parade();

// The turquoise Schwinn goes "whoosh" and rolls along!
// The burnt orange Salsa Fargo goes "whoosh" and rolls along!
// The green Flying Merkel goes "whoosh" and rolls along!
// The slate blue Bianci Volpe goes "whoosh" and rolls along!




window.setTimeout(function () {
  alert('HAMMERTIME');
}, 2000);

function hammerTime(time) {
  window.setTimeout(function () {
    alert(`${time} is HAMMERTIME`);
  });
}
hammerTime("2:00pm")


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question('Would you like some tea?', function (res) {
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', function (res2) {
      console.log(`You replied ${res2}.`);
      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I\'m chasing ${cat.name}! Woof!`)
}

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase.call(Markov, Noodles)
Noodles.chase(Markov);
Noodles.chase.call(Noodles, Markov)
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
//
