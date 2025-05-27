/**
 * 삼항 조건 연산자 ternary operator
 */

console.log(10 > 0 ? '10이 0보다 크다.' : '10이 0보다 작다.');
console.log('------------------')

/**
 * 단축평가 short circuit evaluation
 *
 * &&를 사용했을 때 좌측이 true  면 우측 값을 반환
 * &&를 사용했을 때 좌측이 false 면 좌측 값을 반환
 * ||를 사용했을 때 좌측이 true  면 좌측 값을 반환
 * ||를 사용했을 때 좌측이 false 면 우측 값을 반환
 */

console.log(true || 'jaeyoung');
console.log(false || 'jaeyoung');
console.log(false && 'jaeyoung');
console.log(true && 'jaeyoung');
console.log('------------------')

/**
 * null 연산자 ??
 */
let name;
console.log(name);

// 좌측값이 null or undefined 면 오른쪽 값을 반환
name = name ?? 'jaeyoung';
console.log(name);

// 축약
let name2;
name2 ??= 'jaeyoung';
console.log(name2);
