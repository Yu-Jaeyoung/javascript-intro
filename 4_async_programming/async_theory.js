/**
 * Async theory
 */

// function longWork() {
//     const now = new Date();
//
//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;
//
//     while (new Date().getTime() < afterTwoSeconds) {
//         // 2초동안 하고 싶은 작업을 가정
//     }
//
//     console.log('완료');
// }
//
// console.log('Hello');
// longWork();
// console.log('World');

// 비동기 예시
function longWork() {
    // 비동기로 실행되는 setTimeout 함수
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
