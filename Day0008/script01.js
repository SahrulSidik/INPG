/* Soal Pertama
 * Buat fungsi dengan nama loopingAngka dengan nilai minimal
 * sebagai parameter pertama dan nilai ahir sebagai parameter kedua
 * contoh loopingAngka(5,9) megnhaislkan 5,6,7,8,9, contoh kedua
 * loopingAngka(17, 28) megnhasilkan 17,18,19,20,21,22,23,24,25,26,27,28 */

/* DRIVER CODE :
 * - loopingAngka(33,99)
 * - loopingAngka(4, 25)
 * - loopingAngka(99, 122) */

function loopingAngka(angka1, angka2) {
  var keluaran = "";
  for (var i = angka1; i < angka2; i++) {
    if (i % 2 === 0) {
      keluaran += i + ", ";
    } else {
      keluaran += i + ", ";
    }
  }
  return keluaran;
}
console.log(loopingAngka(33, 99));
console.log(loopingAngka(4, 25));
console.log(loopingAngka(99, 122));
