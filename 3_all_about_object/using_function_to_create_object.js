/**
 * Using function to create objects
 */

function IdolModel(name, year) {
    // new 키워드가 없는 경우에 대한 처리
    // if (!new.target) {
    //     return new IdolModel(name, year);
    // }

    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${ this.name }이 춤을 춥니다.`;
    };
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); // undefined
// console.log(global.name); // 안유진


// TypeError: IdolModelArrow is not a constructor
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

// TypeError: IdolModelArrow is not a constructor
// const yuJin3 = new IdolModelArrow('안유진', 2003);