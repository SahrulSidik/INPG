/* Latihan 3
Dari array numbers di tersebut, buatlah program JavaScript untuk mencari modus (mode) / nilai yang paling sering muncul di dalam array tersebut. */

var numbers = [10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7];

var tampNil = 0;
for (var index = 0; index < numbers.length; index++) {
    var nil = 0;
    for (var jIndex = index; jIndex < numbers.length; jIndex++) {
        if (numbers[index] === numbers[jIndex]) {
            nil++;
            if (nil > tampNil) {
                tampNil = nil;
                hasil = numbers[index]
            }
        }
    }
}
console.log(hasil)