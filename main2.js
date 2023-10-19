let a=[[1, 2, 3], [100, 2, 1, 10,7]]
console.log(a);
let newArr=a.flat();

let uniqueNumbers = [];

newArr.forEach(function(value) {
  if (uniqueNumbers.indexOf(value) === -1) {
    uniqueNumbers.push(value);
  }
});

console.log(uniqueNumbers); 