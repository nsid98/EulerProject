// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isPrime(x){
  let result = true;

  for(let i = 2; i < x; i++){
    if(x % i === 0){
      result = false;
    }
  }
  return result
}


let count = 1

let i = 2;
while (count < 10001){
  i++
  if(isPrime(i)){
    count++
  }
}

console.log(i);
