// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

let result = 0
let below = 2000000
let listOfPrimes = []

for(let i = 2; i < below; i++){
  if(isprime(i)){
    result = result + i
    listOfPrimes.push(i);
  }
}


function isprime(num){
  let result = true
  for(let i = 0; i < listOfPrimes.length; i++){
    if(num % listOfPrimes[i] === 0){
      result = false;
      return result;
    }
  }
  return result;
}

  console.log(result);
