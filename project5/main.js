// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let i = 0
while(true){
  i++
  let tmp = true;
  for(let j = 1; j <= 20 && tmp; j++){
    if(i % j != 0){
      tmp = false;
    }
  }
  if(tmp){
    break
  }
}

console.log(i);
