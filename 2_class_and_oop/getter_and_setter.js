/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private 한 값을 반환할 떄
     */
    get nameAndYear() {
        return `${ this.name }-${ this.year }`;
    }


    set setName(name) {
        this.name = name;
    }

    set year(year) {
        this.year = year;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2 {
    #name;  // ES7 엔진에서부터 지원
    year;


    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);      // name 값이 보이지 않음
console.log(yuJin2.name);
yuJin2.name = 'Jaeyoung';
console.log(yuJin2.name);
