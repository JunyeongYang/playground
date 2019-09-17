const userList = [
  {name: 'Austin', age: '30', phNo: '000-0000-0000'},
  {name: 'Billie', age: '21', phNo: '111-1111-1111'},
  {name: 'Phil', age: '34', phNo: '333-3333-3333'},
  {name: 'Peter', age: '23', phNo: '555-5555-5555'},
  {name: 'Jason', age: '39', phNo: '666-6666-6666'},
];

function _filter(arr, predi) {
  const tempArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(predi(arr[i])) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

console.log(_filter(userList, (user) => user.age >= 30 ));
console.log('-------');
console.log(_filter(userList, (user) => user.age < 30 ));
console.log('-------');
console.log(_filter([1,2,3,4], (data) => data > 2 ));
console.log('-------');

function _mapper(arr, mapper) {
  const tempArr = [];
  for(let i = 0; i < arr.length; i++) {
    tempArr.push(mapper(arr[i]));
  }
  return tempArr;
}

console.log(_mapper(userList, (user) => user.name ));

console.log(_mapper(_filter(userList, (user) => user.age >= 30), (user) => user.name));


