/* Soal Pertama
 * Buat fungsi dengan nama loopingAngka dengan nilai minimal
 * sebagai parameter pertama dan nilai ahir sebagai parameter kedua
 * contoh loopingAngka(5,9) megnhaislkan 5,6,7,8,9, contoh kedua
 * loopingAngka(17, 28) megnhasilkan 17,18,19,20,21,22,23,24,25,26,27,28 */

/* Soal kedua
 * Lanjutkan soal pertama namun keluarkan hasil ganjil dan genap */

/* DRIVER CODE :
 * - loopingAngka(33,99)
 * - loopingAngka(4, 25)
 * - loopingAngka(99, 122) */

/* Soal Ketiga
 * Buat fungsi luas luasSegitiga
 * a * t / 2 */

/* Soal Keempat
 * Buat fungsi luas luasLingkaran
 * 3,14 x r x r */

/* Soal Kelima
* Cari nilai tengah yang menerima 2 parameter, jika nilai tengah tidak bulat maka bulatkan ke angka
dibawahnya
contoh1 nilaiTengah(33, 99) menghasilkan 66
conthh2 nilaiTengah(7, 16) menghasilkan nilai 11 */


/* Soal Pertama */
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
console.log(loopingAngka(33, 99))
console.log(loopingAngka(4, 25))
console.log(loopingAngka(99, 122))


/* Soal Kedua */
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
console.log(loopingAngka(33, 99))
console.log(loopingAngka(4, 25))
console.log(loopingAngka(99, 122))


/* Soal Ketiga
 * Buat fungsi luas luasSegitiga
 * a * t / 2 */
function luasSegitiga(alas, tinggi) {
  return alas * tinggi / 2
}

console.log(luasSegitiga(3, 4));


/* Soal Keempat
 * Buat fungsi luas luasLingkaran
 * 3,14 x r x r */
// V-1
function luasLingkaran(v, r, r) {
  return v * r * r;
}
console.log(luasLingkaran(3.14, 10, 10))

// V-2
function luasLingkaran(r) {
  return 3.14 * r * r;
}
console.log(luasLingkaran(10))


/* Soal kelima */
function carinilaiTengah(a, b) {
  i = (a + b) / 2;
  if (i % 1 !== 0) {
    i -= 0.5;
  }
  return i;
}
console.log(carinilaiTengah(33, 99))
console.log(carinilaiTengah(7, 16))
