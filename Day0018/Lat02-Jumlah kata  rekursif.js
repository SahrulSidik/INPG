/* Latihan 2
Tersedia 2 input: suatu kata dan suatu huruf. Carilah berapa kali huruf muncul di dalam kata. Gunakan rekursif untuk menyelesaikan soal ini.
*/

function countLetters(word, letter) {
  var hasil = 0;
  if (word.length === 0) {
    return hasil;
  }
  if (word[0] === letter) {
    hasil++;
  }
  return hasil + countLetters(word.slice(1), letter)
}

// TEST CASES
console.log(countLetters('12104123', '1')); // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3

// silce(1) = ika parameter kedua tidak didefinisikan, irisan akan diambil hingga akhir dari array.
// Fungsi slice menerima satu atau dua parameter. Parameter pertama adalah index irisan diambil, dan parameter kedua adalah index irisan terakhir diambil.