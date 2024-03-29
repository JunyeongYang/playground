function sayHello(name) {
  const _name = name
  return () => {
    console.log('hello ', _name)
  }
}

const sayHelloToJun = sayHello('준')
const sayHelloToYeong = sayHello('영')
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


//IIFE
//ref: http://chanlee.github.io/2013/12/10/understand-javascript-closure/
function iife(userList) {
  let userID = 100
  for(let i = 0; i < userList.length; i++) {
    //즉시 호출된 함수 표현식(Immediately Invoked Function Expression. IIFE)
    userList[i].id = ((j) => userID + j)(i)
  }

  return userList
}

let userList = [
  {
    id: '',
    name: '토르'
  },
  {
    id: '',
    name: '아이언맨'
  },
  {
    id: '',
    name: '캡틴아메리카'
  }
]

let t = iife(userList)
console.log(t)

// make new instance to use the function independently
const outer = function(out) {
  return (inn) => {
    return out + inn
  }
}

const addFour = new outer(4)
const addThree = new outer(3)

console.log('addFour ', addFour(1))
console.log('addThree', addThree(5))



function a() {
  return {
    data: '',
    console: ''
  }
}

function UserList2() {
  const list = [
    {
      name: 'Austin',
      pNo: '000-0000-000'
    },
    {
      name: 'Billie',
      pNo: '111-1111-1111'
    }
  ]
  return {
    getInfoByName: (name) => {
      return list.filter(info => info.name === name)
    }
  }
}

const userList2 = new UserList2()

console.log(userList2.getInfoByName('Austin'))