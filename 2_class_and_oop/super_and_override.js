/**
 * Super and Override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요, ${ this.name } 입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    // 변수 값을 불러올 때는 super 키워드를 사용하지 X
    // 함수는 super 키워드를 사용할 수 있음
    sayHello() {
        return `${ super.sayHello() } ${ this.part }를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
