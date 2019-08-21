//브라우저에서 사용 가능한 예제
// var a = 2;

// (function IIFE(def) {
//   def(window)
// })(function def(global) {
//   var a = 3
//   console.log(a)
//   console.log(global.a)
// })

const a = () => {
  var i
  for(i = 0; i < 10; i++) {
    ((a) => {
      console.log(a)
    })(i)
  }
}

a()

