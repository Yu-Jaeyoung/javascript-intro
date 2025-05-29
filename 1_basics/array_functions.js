/**
 * Array Functions
 */

let wisoft = [
    'JavaScript',
    'TypeScript',
    'Java',
    'Database',
    'Operating System',
    'OOP',
];

console.log(wisoft);

// push()
console.log(wisoft.push('DDD')); // 추가한 후 length 반환
console.log(wisoft);

console.log('----------------------------');

// pop()
console.log(wisoft.pop());
console.log(wisoft);

console.log('----------------------------');

// shift()
console.log(wisoft.shift());
console.log(wisoft);

// unshift()
console.log(wisoft.unshift('JavaScript'));
console.log(wisoft);

console.log('----------------------------');

// splice()
console.log(wisoft.splice(0, 3));
console.log(wisoft);

console.log('----------------------------');
wisoft = [
    'JavaScript',
    'TypeScript',
    'Java',
    'Database',
    'Operating System',
    'OOP',
];
// 새로운 Array를 만들어서 반환
// concat()
console.log(wisoft.concat('DDD'));
console.log(wisoft);

// slice()
console.log(wisoft.slice(0, 3));
console.log(wisoft);

console.log('----------------------------');

// spread operator
let wisoftLab = [
    ...wisoft,
];
console.log(wisoftLab);

console.log('----------------------------');
wisoftLab = wisoft;
console.log(wisoftLab === wisoft);

console.log([ ...wisoft ] == wisoft);

// join()
console.log(wisoft.join());
console.log(wisoft.join('/'));
console.log(wisoft.join(', '));

// sort()
// 오름차순
console.log(wisoft.sort());
console.log(wisoft.reverse());

console.log('----------------------------');

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

console.log(numbers);

/** a, b 를 비교했을 때
 *  1) a 를 b 보다 나중에 정렬하려면, (뒤에 두려면) 0보다 큰 숫자를 반환
 *  2) a 를 b 보다 먼저 정렬하려면, (앞에 두려면) 0보다 작은 숫자를 반환
 *  3) 원래 순서를 그대로 두려면 0을 반환
 */

// 오름차순 1)
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

// 내림차순 2)
numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

console.log('----------------------------');

// map()
console.log(wisoft.map((x) => x));
console.log(wisoft.map((x) => `Subject: ${ x }`));

console.log(wisoft.map((x) => {
    if (x === 'JavaScript') {
        return `Studying Now -> ${ x }`;
    } else {
        return x;
    }
}));
console.log(wisoft);

console.log('----------------------------');

numbers = [ 1, 8, 7, 6, 3 ];

// filter() -> 전체에 대한 검색
console.log(numbers.filter((x) => x % 2 === 0)); // [ 8, 6 ]

// find() -> 해당되는 첫 번째 값만 검색
console.log(numbers.find((x) => x % 2 === 0)); // 8

// findIndex() -> find와 같지만, index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((prev, next) => prev + next, 0)); // 25

// console.log(numbers.reduce((prev, next) => {
//     console.log(`prev: ${ prev }`);
//     console.log(`next: ${ next }`);
//     console.log('---------------');
//     return prev + next;
// }, 0));