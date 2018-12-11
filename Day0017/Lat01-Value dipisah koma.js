// Latihan 1
// Diberikan sebuah function yang menerima 1 parameter berupa string yang berisi value dan dipisahkan dengan koma (Comma Separated Values). Implementasikan function ini supaya bisa mengembalikan value object literal. Sesuaikan dengan format di atas.

function csvToObject (text) {
  var tampungText = text.split(",");
  var tampungObj = {};
      tampungObj['nama'] = tampungText[0]
      tampungObj['email'] = tampungText[1]
      tampungObj['gender'] = tampungText[2]
  return tampungObj;
}

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }
