/* Latihan 2
Dari variabel di atas, buatlah sebuah program JavaScript untuk membuat array baru seperti contoh di bawah:
[
  ['dimitri', 'dimitri@mail.com', 'male'],
  ['icha', 'icha@mail.com', 'female'],
  ['windi', 'windi@mail.com', 'female']
]
*/

var data = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
var tampungArray = [];
var tampungData = data.split(',');

for (var index = 0; index < tampungData.length; index++) {
  var tampungDataSplit = tampungData[index].split(':');
  tampungArray.push(tampungDataSplit);
}
console.log(tampungArray);
