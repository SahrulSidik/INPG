/* Latihan 1
Exercise kali ini cukup simple, kalian harus menampilkan semua data yang ada di sebuah multi-dimensional array dengan format output yang sudah ditentukan.

Berikut adalah contoh datanya:

Buatlah sebuah program JavaScript untuk membuat output seperti di bawah ini:

ID: 1 Name: Dimitri Company: Hacktiv8

ID: 2 Name: Dhani Company: Hacktiv8

ID: 3 Name: Icha Company: Hacktiv8

Tips: Gunakan console.log() untuk menampilkan salah satu value yang ada di dalam array people. Jika sudah bisa menampilkan salah satu value, pikirkan cara untuk membuat code kalian bisa menampilkan semua element yang ada di dalam array people. Jadi ketika ada 10 element, program kalian harus bisa menampilkan semuanya. */

var data = [[1, 'Dimitri', 'Hacktiv8'],[2, 'Dhani', 'Hacktiv8'],[3, 'Icha', 'Hacktiv8']];

for(var index = 0; index < data.length; index++){
  console.log('ID: ' + data[index][0]+' Nama: ' +data[index][1] + ' Company: ' + data[index][2]);
}