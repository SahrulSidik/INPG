/*
Diberikan sebuah function yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function isPrime(number) {
  for (var index = 2; index < number; index++) {
    if (number % index === 0) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false