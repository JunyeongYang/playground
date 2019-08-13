function print1To10After1sec() {
  for(let i = 1; i <= 10; i++) {
    ((i)=>{
      setTimeout(()=>{
        console.log(i)
      }, 1000)
    })(i)
  }
}

print1To10After1sec()