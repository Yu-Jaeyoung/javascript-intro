/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 25;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

let test2 = '98' + 2;
console.log(typeof test2, test2);

let test3 = '98' * 2;
console.log(typeof test3, test3);

let test4 = '98' - 2;
console.log(typeof test4, test4);


console.log('-----------------------');
/**
 * 명시적 변환 추가 예시
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환 시
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

console.log('-----------------------');
/**
 * Boolean 타입으로의 변환
 */

console.log(!!'x'); // true
console.log(!!'');  // false

console.log(!!0);           // false
console.log(!!'0');         // true
console.log(!!'false');     // true
console.log(!!false);       // false
console.log(!!undefined);   // false
console.log(!!null);        // false

console.log(!!{});          // true
console.log(!![]);          // true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환
 */