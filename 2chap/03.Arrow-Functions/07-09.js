// 07. Function
// 일반 함수는 this를 새로 바인딩한다 
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function (delay = 1000) {
    // JS 설계 오류로 인해
    // 여기 안에서는 this가 gangwon 객체인 반면
    setTimeout(function () {
      // 여기에서는 this가 window 객체가 된다
      console.log(this.resorts.join(","))
    }, delay)

  }
}

gangwon.print()
// Cannot read property 'join' of undefined 오류 발생
// this.resorts의 join 메소드를 호출하려고 시도했기 때문
// 여기서 this는 window 객체

// 08. 함수와 bind를 사용함
var tahoe = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function (delay = 1000) {

    setTimeout(function () {
      console.log(this.resorts.join(","))
    }.bind(this), delay)

  }
}

tahoe.print()

// 09. 화살표 함수를 사용함
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function (delay = 1000) {

    setTimeout(
      () => console.log(this.resorts.join(",")),
      delay
    )

  }
}

gangwon.print()
// 화살표 함수를 사용하면 새로운 this 영역을 만들어내지 않아 정상 작동한다
// 그러나 print 프로퍼티를 화살표 함수로 바꾸면 다시 this가 window 객체가 된다 (10번)

// 10. 화살표 함수를 너무 많이 사용함. this가 window를 가리킴
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: (delay = 1000) => {
    // 여기서 this는 window (상위 스코프의 this를 가리키므로)
    setTimeout(() => {
      // 따라서 여기에서도 this는 window
      console.log(this.resorts.join(","))
    }, delay)

  }
}

gangwon.print()
// 화살표 함수는 함수를 선언할 때 this에 바인딩될 객체가 정적으로 결정된다.
// Arrow 함수의 this는 언제나 상위 스코프의 this를 가리킨다.
// 즉, Lexical this를 가진다.