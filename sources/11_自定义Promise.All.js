function All() {
  let pArr = []
  for (var i = 0; i < 4; i++) {
    let p = Promise.resolve(i).catch(err => console.log(err))
    pArr.push(p)
  }
  return pArr
}
let promises = All()
console.log(promises);
let [a, b, c, d] = promises

a.then(res => {
  console.log(res);
})
b.then(res => {
  console.log(res);
})
c.then(res => {
  console.log(res);
})
d.then(res => {
  console.log(res);
})
