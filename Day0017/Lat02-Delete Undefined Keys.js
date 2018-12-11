// Latihan 2
// Implementasikan function di atas agar mengembalikan key yang memiliki value saja (bukan undefined)

function deleteUndefinedKeys(object) {
  var tampung = {}
  if (object.name !== undefined) {
    tampung.name = object.name;
  }
  if (object.age !== undefined) {
    tampung.age = object.age;
  }
  if (object.email !== undefined) {
    tampung.email = object.email;
  }
  return tampung;
}
console.log(deleteUndefinedKeys({
  name: 'Dimitri',
  age: undefined,
  email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }
console.log(deleteUndefinedKeys({
  name: undefined,
  age: undefined,
  email: undefined
}));
// {}