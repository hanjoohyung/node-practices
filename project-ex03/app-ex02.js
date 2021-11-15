/* 
douzone-ghd167-math npm 모듈 테스트 (모듈 패키지: 로컬 배포)

$ npm i ../douzone-ghd167-math
명령으로 설치 후 테스트 할 것
*/

var dzMath = require('douzone-ghd167-math');

console.log(dzMath.sum(10, 20, 30));
console.log(dzMath.max(10, 20, 30));
console.log(dzMath.min(10, 20, 30));