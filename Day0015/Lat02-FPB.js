/*
Diberikan sebuah function yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function gcd(firstNumber, secondNumber) {
  var tampungFirstNumber = []
  for (i = 1; i < firstNumber; i++) {
    if (firstNumber % i === 0) {
      tampungFirstNumber.push(i);
    }
  }
  var tampungSecondNumber = []
  for (j = 1; j < secondNumber; j++) {
    if (secondNumber % j === 0) {
      tampungSecondNumber.push(j);
    }
  }
  hasil = []
  for (k = 0; k < tampungFirstNumber.length; k++) {
    for (h = 0; h < tampungSecondNumber.length; h++) {
      if (tampungFirstNumber[k] === tampungSecondNumber[h]) {
        hasil.push(tampungFirstNumber[k]);
      }
    }
  }
  return hasil[hasil.length - 1];
}

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1