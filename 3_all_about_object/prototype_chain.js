/**
 * Prototype
 */
const testObj = {};

// __proto__ 는 모든 객체에 존재하는 프로퍼티
// class 의 상속 관계 중 부모 클래스에 해당
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); // {}

console.dir(IdolModel.prototype, {
    showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

console.log('--------------------------------------');

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype);  // true

console.log('--------------------------------------');

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log('--------------------------------------');

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${ this.name }이 인사를 합니다.`;
    };
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

console.log(yuJin2.hasOwnProperty('sayHello')); // true -> 즉, 상속받은 것이 아님

console.log('--------------------------------------');

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

// prototype 에 직접 선언
IdolModel3.prototype.sayHello = function () {
    return `${ this.name }이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true

console.log(yuJin3.hasOwnProperty('sayHello')); // false -> 상속받음

console.log('--------------------------------------');

IdolModel3.sayStaticHello = function () {
    return `static method`;
};

console.log(IdolModel3.sayStaticHello());

console.log('--------------------------------------');

/**
 * Overriding
 */

function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    // Override
    this.sayHello = function () {
        return `instance method`;
    };
}

IdolModel4.prototype.sayHello = function () {
    return `prototype method`;
};

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 쉐도잉 - class 에서 override
console.log(yuJin4.sayHello());

console.log('--------------------------------------');

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${ this.name } 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${ this.name }가 춤을 춥니다.`;
    };
}

const gaEul = new IdolModel('가을', 2002);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello());
console.log(ray.dance());
// TypeError: ray.sayHello is not a function
// console.log(ray.sayHello());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

// 인스턴스의 __proto__ 변경
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); // 실행 OK

console.log(ray.constructor === FemaleIdolModel); // false -> proto 를 변경하였기 때문
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true

console.log('--------------------------------------');

console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

console.log('--------------------------------------');

// 함수의 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true



