/* Soal kedua
 * Lanjutkan soal pertama namun keluarkan hasil ganjil dan genap */

/* DRIVER CODE :
 * - loopingAngka(33,99)
 * - loopingAngka(4, 25)
 * - loopingAngka(99, 122) */

function loopingAngka(angka1, angka2) {
  var keluaran = "";
  for (var i = angka1; i < angka2; i++) {
    if (i % 2 === 0) {
      keluaran += i + "Genap ";
    } else {
      keluaran += i + "Ganjil ";
    }
  }
  return keluaran;
}
console.log(loopingAngka(33, 99));
console.log(loopingAngka(4, 25));
console.log(loopingAngka(99, 122));
