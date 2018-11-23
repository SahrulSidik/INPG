/* Soal 1
 * Pake function terationNumber(angkaAwal, angkaAkhir) */
function iterationNumber(angkaAwal, angkaAkhir) {
  var arr = [];
  for (var i = angkaAwal; i <= angkaAkhir; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(iterationNumber(1, 50));
