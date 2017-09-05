// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let lsf = 1
for (let i = 0; i < 999; i ++){
  for(let j = 0; j < 999; j ++){
    if(isPalindrome(i * j)){
      if((i * j) > lsf)
      lsf = i * j
    }
  }
}


function isPalindrome(x){
  let arr = x.toString().split('')
  let mid = arr.length / 2
  let res = true;
  for(let i = 0; i < mid; i++){
    if(arr[i] != arr[arr.length - (i + 1)]){
      res = false;
    }
  }
  return res
}


console.log(lsf);
