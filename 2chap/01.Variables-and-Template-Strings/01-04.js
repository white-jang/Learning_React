// 01. 변수 값은 변경 가능하다
var pizza = true;
pizza = false;
console.log(pizza);

// 02. ES6부터 상수가 도입됐다
const pizza = true;
pizza = false;

// 03. var 변수의 영역은 블록 안으로 제한되지 않는다
var topic = "자바스크립트";

if (topic) {
  var topic = "리액트";
  console.log("블록", topic);
}
console.log("글로벌", topic);

// 04. ES6 let을 쓰면 구문적 변수 영역 규칙(Lexical Scoping)을 적용할 수 있다
var topic = "자바스크립트";
if (topic) {
  let topic = "리액트";
  console.log("블록", topic);
}
console.log("글로벌", topic);