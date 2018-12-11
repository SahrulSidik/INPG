/* Latihan 1
Buat function bernama multiDimensi menerima 2 parameter yang merupakan panjang sebuah array kemudian gambarkan
Contoh :
multiDimensi(2,5) => [[1,2,3,4,5,],[1,2,3,4,5]]
multiDimensi(3,4) => [[1,2,3,4],[1,2,3,4],[1,2,3,4]]
multiDimensi(5,2) => [[1,2],[1,2],[1,2],[1,2][1,2]]
*/

function multiDimensi(parameter1, parameter2) {
    var tampungArray = [];
    for (var index0 = 0; index0 < parameter1; index0++) {
        tampungArray[index0] = [];
   
        for (var index1 = 0; index1 <= parameter2; index1++) {
            tampungArray[index0].push(index1);
        }   
    }
    return tampungArray;
}
console.log(multiDimensi(2, 5))
console.log(multiDimensi(4, 3))

// console.log(multiDimensi(2, 5));
// console.log(multiDimensi(3, 4));
// console.log(multiDimensi(5, 2));



