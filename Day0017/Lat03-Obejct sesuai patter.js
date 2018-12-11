// Latihan 3
// Implementasikan function di atas agar mengembalikan object baru sesuai dengan pattern yang diberikan di test cases

// step 1
function complexConversion(text) {
  keluaran = []
  var arr = text.split(',')
  for (var index = 0; index < arr.length; index++) {
    hasil = arr[index].split(':')
    keluaran.push(hasil);
  }
  arrToObject = {}
  for (var jIndex = 0; jIndex < keluaran.length; jIndex++) {
    arrToObject[keluaran[jIndex][0]] = keluaran[jIndex][1]
  }
  return arrToObject
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }