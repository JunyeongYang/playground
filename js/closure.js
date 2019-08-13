function sayHello(name) {
  let _name = name
  return () => {
    console.log('hello ', _name)
  }
}

let sayHelloToJun = sayHello('준')
let sayHelloToYeong = sayHello('영')
sayHelloToJun()
sayHelloToYeong()


function getSet() {
  let userID = 5959
  return {
    getID: () => userID,
    setID: (setID) => userID = setID
  }
}

const vueData = getSet()
console.log(vueData.getID())
vueData.setID(8959)
console.log(vueData.getID())