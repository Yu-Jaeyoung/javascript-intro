/**
 * Class Keyword
 */

class IdolModel {
    // constructor에 this로 정의되어 있다면 필드값 생략 가능
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `My name is ${ this.name }`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());

console.log(typeof IdolModel); // function -> class 는 function 이다.
console.log(typeof yuJin);     // object -> class의 인스턴스는 object 이다.