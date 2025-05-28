/**
 * function -> 함수
 */


/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 ?
 */

// console.log((2 * 10 / 2 % 3).toString());

// 3은 ?
// console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY 원칙
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력 받는 값에 대한 정의 : Parameter
 *
 * 실제 입력하는 값 : Argument
 */

calculate(2);

// 파라미터의 default 값 정의 가능
// function multiply(x, y = 10) {
//
//     console.log(x * y);
// }

/**
 * Arrow 함수
 */

const multiply = (x, y) => {
    return x * y;
};

const multiply2 = (x, y) => x * y;

const multiply3 = x => x * 2;

const multiply4 = x => y => z => `x: ${ x } y: ${ y } z: ${ z }`;

// console.log(multiply4(2)(5)(7));

function analyzeMultiply4(x) {
    return function (y) {
        return function (z) {
            return `x: ${ x } y: ${ y } z: ${ z }`;
        };
    };
}

const multiplyTwo = function (x, y) {
    return x * y;
};

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
};

console.log('--------------------------------');
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function - 즉시 실행 함수
(function (x, y) {
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);            // function
console.log(multiply instanceof Object); // true
