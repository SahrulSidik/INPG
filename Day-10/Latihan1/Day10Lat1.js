function arrayTotal(arr) {
  var total = 1;
  for(var i = 0; i < arr.length; i++){
    total *= arr[i]
  }
  return total
}

function perkalianUnik(arr) {
  var total = arrayTotal(arr)
  for(var i = 0; i < arr.length; i++) {
    if(i==0) {
      total = total / total[i]
    }
  return total
}
}

console.log(perkalianUnik([2, 4, 6]));
