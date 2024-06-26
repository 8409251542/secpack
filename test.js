const {binarySearch} = require('secondpack');

// Test binarySearch
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(arr, target);
console.log(result === 4 ? 'binarySearch test passed' : 'binarySearch test failed');