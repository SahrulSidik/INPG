var arr = [5,7,4,8,1]

function isiArray() {
  var arr =  [];
  for(var i = 0; i < arr < 5; i++) {
    array.push(i+1)
  }
  return arr
}


function arrayKaliDua(arr) {
  var array = [];
  for(var i = 0; i < arr.length; i++) {
    var hasil = arr[i] * 2
    array.push(hasil)
  }
  return array
}


function arrayTotal(arr) {
  var total = 1;
  for(var i = 0; i <arr.length; i++) {
    total = total * arr[i]
  }
  return total
}

function arrayTotal(total, length) {
  var arr = []
  for(var i = 0; i < legth; i ++)
    arr.push(total)
  }
  return arr
}




function arrayTotalKecualiPertama(arr) {
  var total = 1;
  for(var i = 0; i < arr.length; i++) {
    if(i !==0) total = toal * arr[i]
  }
  return total
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
