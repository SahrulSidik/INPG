/*
Latihan 1
Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function threeStepsAB(text) {
  a = [];
  b = [];
  for (index = 0; index < text.length; index++) {
    if (text[index] === "a") {
      a.push(index)
    }
    if (text[index] === "b") {
      b.push(index)
    }
  }
  ab = [];
  for (jIndex = 0; jIndex < b.length; jIndex++) {
    for (kIndex = 0; kIndex < a.length; kIndex++) {
      ab.push(b[jIndex] - a[kIndex])
    }
  }

  for (lIndex = 0; lIndex < ab.length; lIndex++) {
    if (ab[lIndex] > 0 && ab[lIndex] < 5) {
      return true
    }
  }
  return false
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false