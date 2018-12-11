/* latihan
Buatlah sebuah program untuk membuat enkripsi password yang di-input user agar tidak bisa dimengerti oleh orang lain dengan aturan sebagai berikut:

- Hilangkan semua spasi yang ada di dalam input

- Reverse input

- Ganti huruf vokal menjadi satu huruf setelahnya (A menjadi B, I menjadi H dan seterusnya)

Best practice-nya, kamu bisa buat 3 function untuk masalah di atas. Jadi setiap step masalah akan diselesaikan dengan 1 function. Bisa saja kita membuat satu function untuk menyelesaikan semuanya, tapi akan lebih sulit untuk di-debug (mencari kesalahan logika/code). */
function removeSpaces(password) {
    return password.replace(/\s/g,'');
}

function reverseText(password) {
    hasil = "";
    for (i = password.length - 1; i >= 0; i--) {
        hasil += password[i]
    }
    return hasil;
}

function updateVowels(password) {
    var tanmPass = password.split("")
    var hurVokal = "aiueo";
    var changeVokal = "bjvfp";
    for (i = 0; i < tanmPass.length; i++) {
        for (j = 0; j < hurVokal.length; j++) {
            if (tanmPass[i] === hurVokal[j]) {
                tanmPass.splice(i, 1, changeVokal[j])
                hasilVowel = tanmPass.join("")
            }
        }
    }
    return hasilVowel;
}

var password = 'dimitri w';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);