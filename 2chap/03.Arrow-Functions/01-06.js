// 01. 일반 함수
var lordify = function (firstname) {
  return `켄터베리의 ${firstname}`
}

console.log(lordify("오성원"))
console.log(lordify("오정원"))

// 02. Arrow Function
var lordify = firstname => `캔터베리의 ${firstname}`

console.log(lordify("오성원"))
console.log(lordify("오정원"))

// 03. 일반 함수라면... (전형적인 방식)
var lordify = function (firstName, land) {
  return `${land}의 ${firstName}`
}

// 04. 화살표 함수라면...
var lordify = (firstName, land) => `${land}의 ${firstName}`

console.log(lordify("오성원", "브리즈번"))
console.log(lordify("오정원", "시드니"))

// 05.
var lordify = (firstName, land) => {

  if (!firstName) {
    throw new Error('lordify에 이름을 넘겨야 합니다.')
  }

  if (!land) {
    throw new Error('영주에게는 영지가 있어야 합니다.')
  }

  return `${land}의 ${firstName}`
}

console.log(lordify("이계영", "멜버른"))