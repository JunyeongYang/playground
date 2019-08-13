
function print1To10After1sec() {
  for(let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
  }

  let j
  for(j = 1; j <= 10; j++) {
    ((j)=>{
      setTimeout(()=>{
        console.log(j)
      }, 1000)
    })(j)
  }
}

print1To10After1sec()