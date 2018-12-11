/* Latihan 3
Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).*/

function sortByCharacter (text) {
  var susun = text.split("");
  susun.sort();
  ahir = susun.join();
  return ahir;
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'