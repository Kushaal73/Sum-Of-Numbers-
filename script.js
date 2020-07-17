//need to find all the odd numbers,all the way to the requested number
//add all of them up

//need to find all the even numbers,all the way to the requested number
//add all of them up

//add the even and odd sums up to get total

let number = prompt("what's the number?");

console.log(number, "is your number");
let evenStart = 0;
let oddStart = -1;

let interval = 2;

let oddStorage = [];
let oddTotal = 0;
while (oddStart < number - 1) {
  oddStart = oddStart + interval;
  oddTotal = oddTotal + oddStart;
  oddStorage.push(oddStart);
}
console.log(oddTotal, "total odd");
console.log(oddStorage, "odd numbers");

let evenStorage = [];
let evenTotal = 0;

while (evenStart < number - 1) {
  evenStart = evenStart + interval;
  evenTotal = evenTotal + evenStart;
  evenStorage.push(evenStart);
}
console.log(evenTotal, "total even");
console.log(evenStorage, "even numbers");

let total = evenTotal + oddTotal;
console.log(total, "is the total sum of all the digits");
