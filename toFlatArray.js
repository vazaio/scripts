// Recursive function
const toFlat = arr => {
  for (const el of arr) if (typeof el === 'object') {
    arr.splice(arr.indexOf(el), 1, ...el);
    toFlat(el);
  }
  return arr;
}

// toString method
const toTalf = arr => ('' + arr).split(',').map(Number);


// Usage
let testArray = [1, [2, 3], [4], 5, 6, 7, [8, [9, [10, 11]]]];

console.log(toFlat(testArray));
console.log(toTalf(testArray));
