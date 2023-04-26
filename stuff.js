// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) {
//         rl.close();
//         return completionCallback(sum);
//     } else {
//         rl.question("Input a number: ", answer => {
//             sum += parseInt(answer);
//             console.log(`Current sum is ${sum}`)
//             addNumbers(sum, numsLeft - 1, completionCallback)
//         })
//     }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) { 
    let func = this;
    return () => { ;
        func.apply(context);
    };
}

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

    