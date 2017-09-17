let result = 0
for(let a = 1; a <= 1000; a++){
  for (let b = 1; b <= 1000; b++){
    let c = 1000 - (a + b)
    if(((a * a) + (b * b)) == c*c){
      result = a * b * c
    }
  }
}
console.log(result);
