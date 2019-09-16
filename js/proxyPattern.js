//ref: https://github.com/JunyeongYang/playground.git

function PhoneBook() {
  this.dictionary = {
    'austin': '0000000',
    'billie': '1111111',
    'phil': '2222222'
  }
}

PhoneBook.prototype.get = function(name, callback) {
  setTimeout(() => {
    callback(this.dictionary[name])
  }, 3000)
}

function PhoneBookProxy() {
  const phoneBook = new PhoneBook()
  let viewCount = 0
  const cache = {}

  return {
    get: (name, callback) => {
      viewCount++
      if(cache[name]) {
        callback(cache[name])
      } else {
        phoneBook.get(name, (phoneNumber) => {
          cache[name] = phoneNumber
          callback(phoneNumber)
        })
      }
    },

    getViewCount: () => viewCount
  }
}

// const phoneBookProxy = new PhoneBookProxy()

// phoneBookProxy.get('austin', (phoneNumber) => {
//   console.log(phoneNumber)
// })
// console.log(phoneBookProxy.getViewCount())

// setTimeout(()=> {
//   phoneBookProxy.get('austin', (phoneNumber) => {
//     console.log(phoneNumber)
//   })
//   phoneBookProxy.get('austin', (phoneNumber) => {
//     console.log(phoneNumber)
//   })
//   console.log(phoneBookProxy.getViewCount())
// }, 5000)



function Phonebook2() {
  this.dictionary = [
    {name: 'Austin', pNo: '000-0000-0000'},
    {name: 'Billie', pNo: '111-1111-1111'}
  ]
}

Phonebook2.prototype.get = function(name, callback) {
  callback(this.dictionary.filter(info => info.name === name))
}


function proxyPhonebook2(){
  const phonebook2 = new Phonebook2()
  const cache = {}

  return {
    get: (name) => {
      if(!cache[name]) {
        console.log('not cached');
        phonebook2.get(name, (res) => {
          if(res[0])
            cache[name] = res[0]
        })
      }
      return cache[name]
    }
  }
}

const pp2 = new proxyPhonebook2()

console.log(pp2.get('d'))
console.log(pp2.get('Austin'));
console.log(pp2.get('Austin'));
console.log(pp2.get('Billie'));
console.log(pp2.get('Austin'));
console.log(pp2.get('Billie'));