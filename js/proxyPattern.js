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

const phoneBookProxy = new PhoneBookProxy()

phoneBookProxy.get('austin', (phoneNumber) => {
  console.log(phoneNumber)
})
console.log(phoneBookProxy.getViewCount())

setTimeout(()=> {
  phoneBookProxy.get('austin', (phoneNumber) => {
    console.log(phoneNumber)
  })
  phoneBookProxy.get('austin', (phoneNumber) => {
    console.log(phoneNumber)
  })
  console.log(phoneBookProxy.getViewCount())
}, 5000)

// const phoneBook = new PhoneBook()

// phoneBook.get('austin', (phoneNumber) => {
//   console.log(phoneNumber)
// })
