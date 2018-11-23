/* Soal 2
 * Pake function terationNumber(angkaAwal, angkaAkhir
 * Tambahkan ganjil genap di sampingnya */

function iterationNumber(angkaAwal, angkaAkhir) {
  var arr = [];
  for (var i = angkaAwal; i <= angkaAkhir; i++) {
    if (i % 2 === 0) {
      arr.push(i + " Genap");
    } else {
      arr.push(i + " Ganjil");
    }
  }
  return arr;
}
console.log(iterationNumber(1, 50));
