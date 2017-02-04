Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return this;
};

Array.prototype.myMap = function (blk) {
  let newArr = [];
  this.myEach(el => newArr.push(blk(el)));
  return newArr;
};

Array.prototype.myInject = function (callback, accum) {
  let new_arr = this;

  if (accum === undefined) {
    accum = this[0];
    new_arr = this.slice(1);
  }

  new_arr.myEach(el => {
    accum = callback(accum, el);
  });

  return accum;
};

//easier version without checking accumulator
// Array.prototype.myInject = function (func) {
//   let result = this[0];
//
//   this.slice(1).myEach(element => result = func(result, element) );
//
//   return result;
// };

Array.prototype.mySelect = function (callback) {
  let selected = [];

  this.myEach(el => {
    if ( callback(el) === true) {
      selected.push(el);
    }
  });

  return selected;
};

// [1,2,3,4,5,6,7,8,9].mySelect(el => el % 3 === 0)

Array.prototype.myCount = function (num) {
  let count = 0;
  if (num === undefined) {
    this.myEach(el => count++);
  }
  else {
    this.myEach(el => {
      if (num===el) {
        count++;
      }
    });
  }
  return count;
};




// blows everything up
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("What is your name?", function (answer) {
  console.log(`Hello ${answer}!`);

  // Close the reader, which will allow the program to end because it
  // is no longer waiting for any events.
  reader.close();
});

console.log("Last program line");


















//
