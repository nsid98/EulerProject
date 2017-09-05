let x = 0
let y = 0
let result = 0
for(let i = 1; i<= 100; i++){
  x = x + (i * i)
  y = y + i
  if(i === 100){
    y = y * y
    result = y - x
  }
}

console.log(result);
