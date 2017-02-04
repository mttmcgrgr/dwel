class Clock {
  constructor() {

      this.seconds = Date.now();
      this.date = new Date(this.seconds);
      this.hours = this.date.getHours();
      this.mins = this.date.getMinutes();
      this.secs = this.date.getSeconds();

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
      this.printTime();
      setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.mins}:${this.secs}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
      this.seconds = this.seconds + 1000;
      this.date = new Date(this.seconds);
      this.hours = this.date.getHours();
      this.mins = this.date.getMinutes();
      this.secs = this.date.getSeconds();
      this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

// const clock = new Clock();
// clock._tick()
// clock._tick()


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum = 0, numsLeft, completionCallback) {

  if(numsLeft > 0){
    reader.question("Enter a number: ", function (numString) {
      const num = parseInt(numString);

      sum = sum + num;
      console.log(sum);
      numsLeft--;

      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }

}

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));




























//
