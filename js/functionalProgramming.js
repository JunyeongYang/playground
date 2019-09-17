const userList = [
  {name: 'Austin', age: '30', phNo: '000-0000-0000'},
  {name: 'Billie', age: '21', phNo: '111-1111-1111'},
  {name: 'Phil', age: '34', phNo: '333-3333-3333'},
  {name: 'Peter', age: '23', phNo: '555-5555-5555'},
  {name: 'Jason', age: '39', phNo: '666-6666-6666'},
];

function _filter(users, predi) {
  const temp_userList = [];
  for(let i = 0; i < users.length; i++) {
    if(predi(users[i])) {
      temp_userList.push(users[i]);
    }
  }
  return temp_userList;
}

console.log(_filter(userList, (user) => { return user.age >= 30 }));
console.log('-------');
console.log(_filter(userList, (user) => { return user.age < 30 }));
