/**
 * Immutable Object
 */

const yuJin = {
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

console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin)); // true

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false

yuJin['groupName'] = '아이브';
console.log(yuJin); // 값 추가 X


delete yuJin['position']; // 삭제는 가능
console.log(yuJin);

console.log('------------------------------------------');
/**
 * Seal
 */

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
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // false

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // true

yuJin2['groupName'] = '아이브';
console.log(yuJin2); // 값 추가 X

delete yuJin2['name']; // 삭제 불가능
console.log(yuJin2);

// 변경이 됨
Object.defineProperty(yuJin2, 'name', {
    value: 'jaeyoung',
});

// configurable: false
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('------------------------------------------');
/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만듬
 */

const yuJin3 = {
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
console.log(Object.isFrozen(yuJin3)); // false

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // 값 추가 X

delete yuJin3['name']; // 삭제 불가능
console.log(yuJin3);

// TypeError: Cannot redefine property: name
// Object.defineProperty(yuJin3,'name',{
//     value: 'jaeyoung',
// })

// writable: false, configurable: false
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,

    wonYoung: {
        name: '장원영',
        year: 2004,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false