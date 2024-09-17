## Comparer-Pkg

This package is for comparing objects.
You can use it with the commands
````js
const compareAble = require('comparer-pkg/compareBase/compareAble');

const obj1 = { name: "A" };
const obj2 = { name: "A"};

function extract(obj) {
    return obj.name;
}

function comparer(left, right) {
    left === right;
}

const compareAbleObject = new compareAble(obj1, obj2, extract, comparer)
````