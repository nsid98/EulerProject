// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let gsf = 1
let list = []
for (let i = 1, max = 600851475143; i <= max; i++){
  if(max % i === 0){
    if(isPrime(i)){
      max = max/i;
      gsf = i;
      list.push(i)
    }
  }
}

function isPrime(x){
  let res = true
  for (let i = 2; i < x; i++){
    if(x % i === 0){
      res = false;
    }
  }
  return res
}

console.log(gsf);
console.log(list);
