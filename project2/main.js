let first = 2
let second = 1
let fib = 0
let total = 2
while (fib <= 4000000){
  fib = first + second
  if (fib % 2 === 0){
    total = total + fib
  }
  second = first
  first = fib
}
console.log(total);
