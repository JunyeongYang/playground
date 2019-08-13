
function sayHello(name) {
  let _name = name
  return () => {
    console.log('hello ', _name)
  }
}

let sayHelloToJun = sayHello('준영')
sayHelloToJun()
