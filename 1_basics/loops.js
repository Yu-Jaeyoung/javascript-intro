/**
 * for ... in
 */

const jaeyoung = {
    name: 'jaeyoung',
    year: '1999',
    studying: 'javascript',
};

for (let key in jaeyoung) {
    console.log(key);
}

console.log('---------------');

const todoList = [ 'JavaScript', 'TypeScript', 'AI', 'Python' ];

for (let key in todoList) {
    console.log(`${ key } : ${ todoList[key] }`);
}

console.log('---------------');

/**
 * for ... of
 */

for (let value of todoList) {
    console.log(value);
}