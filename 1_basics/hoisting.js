/**
 * Hoisting
 */

console.log('Hello');
console.log('World');

console.log('----------');

// console.log(name);
// var name = 'jaeyoung';
// console.log(name);

/**
 * Hoisting 이란,
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기함
 *
 * 아래 코드는, 위와 코드와 결과를 출력
 */

// var name;
// console.log(name);
// name = 'jaeyoung';
// console.log(name);

console.log('----------');

// ReferenceError: Cannot access 'jaeyoung' before initialization
// console.log(jaeyoung); // Hoisting 발생 ! !
// let jaeyoung = '재영';


// ReferenceError: jaeyoung is not defined
// 직전 코드는 호이스팅 되었음을 알 수 있음.
// console.log(jaeyoung)
