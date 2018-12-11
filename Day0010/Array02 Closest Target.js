/*
Latihan 2
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
  var x = "x", o = "o", tampungArray = [];
  if (arr.indexOf(x) === -1 ) {
    return 0;
  }
  for (var index = 0; index < arr.length; index++) {
    if(arr[index] === o) {
      indexOf = index;
    } 
  }
  var tampNil = 0, hasil = arr.length;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] === x) {
      var keluaran = Math.abs(index - indexOf);
      if (keluaran < hasil) {
        hasil = keluaran;
      }
    }
  }
return hasil;
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// indexOf -1 = indexOf jika nilai tidak di temukan akan mengembalikan nilai -1 / jika nilainya tidak ada maka akan mengembalikan apa
// Math.abs mengembalikan nilai mutlak