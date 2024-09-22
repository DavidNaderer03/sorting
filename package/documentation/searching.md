### Searching function

This can be used for searching in a 2-dimensional array.
You can use it like this
`````js
const arr = [[1, 2], [3, 4]];

const s = new Search(arr);

console.log(s.search(x => x=== 5));
console.log(s.equals(new Point(0, 1), 2));
console.log(s.contain(new Point(10, 10)));
`````