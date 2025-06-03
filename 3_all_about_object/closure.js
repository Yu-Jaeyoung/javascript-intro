/**
 * Closure
 *
 * A closure is the combination of a function and
 * the lexical environment within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합"
 *
 * "상위 함수보다 하위 함수가 더 오래 살아 있는 경우를 closure 라고 함"
 */

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber()); // 5

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();
console.log(runner);   // [Function: innerGetNumber]
console.log(runner()); // 5

/**
 * 1) 데이터 캐싱
 */

function cacheFunction() {
    // 아래 계산이 매우 오래 걸린다고 가정
    var number = 10 * 10;

    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }

    return innerCacheFunction;
}


// 복잡한 연산을 단 1회만 실행
const runner2 = cacheFunction();

// 미리 계산한 뒤, 기억한 값을 활용하여 계산됨
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 2) 정보 은닉
 */

function Idol(name, year) {
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function () {
        return `안녕하세요, 저는 ${ this.name }입니다. ${ _year }에 태어났습니다.`;
    };
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); // undefined
