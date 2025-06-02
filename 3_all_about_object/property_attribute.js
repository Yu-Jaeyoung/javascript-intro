/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할 때 호출되는 함수로 구성된 프로퍼티
 *                  예) getter, setter
 *
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

// console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
// { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부.
 *               false 로 설정하면 프로퍼티 값을 설정할 수 없음
 * 3) enumerable - 열거가 가능한지 여부
 *                 for ... in 등을 사용할 수 있으면 true 를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 판단
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지됨
 *                   단, writable 이 true 일 경우
 *                   값 변경과 writable 을 변경하는 것은 가능
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

// 전체 출력
// console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    // accessor property
    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
};

// getter
console.log(yuJin2);
console.log(yuJin2.age);

// setter
yuJin2.age = 25;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log('--------------------------------');

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

console.log('--------------------------------');

// yuJin2.height = 175;
// yuJin2['height'] = 175;
Object.defineProperty(yuJin2, 'height', {
    value: 175,

    // 기본값 false
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

console.log('--------------------------------');

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 175;
console.log(yuJin2); // 변경 실패

console.log('--------------------------------');
/**
 * Enumerable
 */

console.log(Object.keys(yuJin2));

for (let key in yuJin2) {
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('--------------------------------');

console.log(Object.keys(yuJin2));

for (let key in yuJin2) {
    console.log(key);
}
console.log(yuJin2);      // name 출력 X
console.log(yuJin2.name); // name 출력 O

/**
 * Configurable
 */

Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// TypeError: Cannot redefine property: height
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// })

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('--------------------------------');

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// TypeError: Cannot redefine property: height
// Object.defineProperty(yuJin2, 'height', {
//     writable: true,
// });