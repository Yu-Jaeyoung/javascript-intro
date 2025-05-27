/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값
 *
 * 직접 undefined로 값을 초기화 하는 것은 지양해야함
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('-----');

/**
 * null
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나,
 * JavaScript 에서는 개발자가 명시적으로 없는 값을 초기화할 때 사용
 * -> typeof를 사용하면 object로 나오는데, 이것은 버그
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log('-----');

/**
 * Symbol
 *
 * 유일무이한 값을 생성할 때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
console.log('-----');

/**
 * Object 타입
 *
 * Map과 비슷
 * key : value 로 이루어져 있음
 */

const dictionary = {
    red: '빨강',
    orange: '주황색',
    yellow: '노랑색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('-----');


/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
 * C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고, 값에 의해 타입을 "추론"
 * JavaScript
 */