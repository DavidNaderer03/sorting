const compareAble = require('sorting-algorythem/sortingbase/compareAble');

const left = {
    name: "A",
    age: 1
};

const right = {
    name: "B",
    age: 1
};

function extractValueFalse(object) {
    return object.name;
}

function extractValueTrue(object) {
    return object.age;
}

function comparer(left, right) {
    return left === right;
}

const objectFalse = new compareAble(left, right, extractValueFalse, comparer);
const objectTrue = new compareAble(left, right, extractValueTrue, comparer);

console.log(objectFalse.compare());
console.log(objectTrue.compare());