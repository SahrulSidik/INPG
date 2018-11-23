/* Soal Kelima
* Cari nilai tengah yang menerima 2 parameter, jika nilai tengah tidak bulat maka bulatkan ke angka
dibawahnya
contoh1 nilaiTengah(33, 99) menghasilkan 66
conthh2 nilaiTengah(7, 16) menghasilkan nilai 11 */

function carinilaiTengah(a, b) {
  i = (a + b) / 2;
  if (i % 1 !== 0) {
    i -= 0.5;
  }
  return i;
}
console.log(carinilaiTengah(33, 99));
console.log(carinilaiTengah(7, 16));
