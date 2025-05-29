/**
 * Object / 객체
 */

// key : value pair
let jaeyoung = {
    name: '재영',
    group: 'wisoft',
    language: function () {
        return `${ this.name } is studying JavaScript`;
    },
};

console.log(jaeyoung);
console.log(jaeyoung.name);
console.log(jaeyoung['name']);

const key = 'name';
console.log(jaeyoung[key]);

console.log(jaeyoung.language());

const nameKey = 'name';
const nameValue = '재영';

const groupKey = 'group';
const groupValue = 'wisoft';

const jaeold = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    language: function () {
        return `${ this.name } is studying JavaScript`;
    },
};

console.log(jaeold);
console.log(jaeold.language());

jaeold['group'] = 'graduate school';
console.log(jaeold);

jaeold['englishName'] = 'Jack';
console.log(jaeold);

delete jaeold['englishName'];
console.log(jaeold);

/**
 * 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없음
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있음
 */

const gildong = {
    name: '길동',
    group: 'wisoft',
};
console.log(gildong);

// gildong = {};

jaeold['group'] = 'graduate school';
console.log(gildong);

/**
 * 모든 키 값 가져오기
 */

console.log(Object.keys(gildong));

/**
 * 모든 벨류 값 다 가져오기
 */

console.log(Object.values(gildong));

const name = 'jaeyoung';
const jaemiddle = {
    // name: name
    name,
};

console.log(jaemiddle);
