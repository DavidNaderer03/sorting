const Search = require('comparer-pkg/searching/2d/search');
const Point = require('comparer-pkg/searching/point');

const arr = [[1, 2], [3, 4]];

const s = new Search(arr);

console.log(s.search(x => x=== 5)); // should be undefined
console.log(s.equals(new Point(0, 1), 2)); // true
console.log(s.contain(new Point(10, 10))); // should be false