/**
 * copy by value     값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */

let original = 'Hello';
let clone = original;

console.log(original);
console.log(clone);

clone += ' jaeyoung';
console.log('-----------');
console.log(original);
console.log(clone);

let originalObj = {
    name: 'jaeyoung',
    group: 'wisoft',
};

let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

console.log('-----------');
originalObj['group'] = 'graduate school';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

console.log('-----------');
originalObj = {
    name: 'gildong',
    group: 'wisoft',
};

cloneObj = {
    name: 'gildong',
    group: 'wisoft',
};
console.log(originalObj === cloneObj); // false

const jaeyoung1 = {
    name: 'jaeyoung',
    group: 'wisoft',
};

const jaeyoung2 = jaeyoung1; // copy by reference
const jaeyoung3 = {
    name: 'jaeyoung',
    group: 'wisoft',
};

console.log('-----------');
console.log(jaeyoung1 === jaeyoung2); // true
console.log(jaeyoung1 === jaeyoung3); // false
console.log(jaeyoung2 === jaeyoung3); // false
console.log('-----------');

/**
 * Spread Operator
 */

const jaeyoung4 = {
    ...jaeyoung3,
};
console.log(jaeyoung4);
console.log(jaeyoung4 === jaeyoung3); // false
console.log('-----------');

const jaeyoung5 = {
    year: 2025,
    ...jaeyoung3,
};
console.log(jaeyoung5);

const jaeyoung6 = {
    name: 'gildong',
    ...jaeyoung3,
};
console.log(jaeyoung6);

const jaeyoung7 = {
    ...jaeyoung3,
    name: 'gildong',
}
console.log(jaeyoung7);
