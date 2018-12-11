/* Soal 2
sama seperti di atas jika masuk ke index pertama
print first dan index terahir print last angka bertambH = > [[1,2,3],[4,5,6],[7,8,9]]
tidak mengulang dari 1
contoh :
multiDimensi(2,5) => [["first",2,3,4,"last"],["first",7,8,9,"last"]]
multiDimensi(3,2) => [["first",2,3,"last"], ["frist",6,7,"last"],["first",10,11,"last"]] */

function multiDimensi(parameter1, parameter2) {
    var tampungArray = [];
    var tampungNilai = 0;
    for (var index0 = 0; index0 < parameter1; index0++) {
        tampungArray[index0] = [];

        for (var index1 = 0; index1 <= parameter2; index1++) {
            tampungArray[index0].push(index1 + tampungNilai);
        }

        tampungNilai = tampungNilai + parameter2;
        tampungArray[index0].shift();
        tampungArray[index0].unshift('First');
        tampungArray[index0].pop();
        tampungArray[index0].push('Last');

    }
    return tampungArray;
}
console.log(multiDimensi(2, 5))
console.log(multiDimensi(4, 3))